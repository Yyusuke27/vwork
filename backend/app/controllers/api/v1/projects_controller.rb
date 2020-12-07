class Api::V1::ProjectsController < Api::ApiController
  before_action :set_project, :only => [:show]
  before_action :set_workspace, :only => [:index, :show]

  def index
    # workspaceのownerのみ閲覧可能
    # workspaceのproject一覧
    workspace_member = WorkspaceMember.find_by(
      :workspace_id => @workspace.id,
      :member_id => @current_user.id
    )

    not_found if workspace_member.blank? || workspace_member.normal?

    projects = Project.where(:workspace_id => @workspace.id)

    render :template => 'api/v1/projects/index.json.jb', :locals => {
      :projects => projects
    }
  end

  def show
    # メンバー、Workspaceのownerのみ閲覧可能
    project_members = ProjectMember.includes(:member).where(:project_id => @project.id)
    is_workspace_owner = WorkspaceMember.exists?(
      :workspace_id => @workspace.id,
      :member_id => @current_user.id,
      :role => 'owner'
    )
    is_project_member = project_members.where(
      :member_id => @current_user.id
    )
    if is_workspace_owner || is_project_member.present? || @current_user.admin?
      render :template => 'api/v1/projects/show.json.jb', :locals => {
        :project => @project,
        :project_members => project_members
      } and return
    end

    render :status => :unauthorized, :json => { :status => 401, :message => 'Unauthorized' }
  end

  def create
    workspace = Workspace.find_by(:path_id => params[:workspace_path_id])
    ActiveRecord::Base.transaction do
      project = workspace.projects.create! project_params.merge(:icon => rand(6), :color => rand(6))
      project.project_members.create!(:member_id => @current_user.id, :role => 1)

      render :template => 'api/v1/projects/create.json.jb', :locals => {
        :project => project
      }
    end
  rescue StandardError => e
    logger.warn e.message
    render :json => { :success => false }
  end

  private

  def project_params
    params.require(:project).permit(:name, :description)
  end

  def set_project
    @project = Project.find(params[:id])
    not_found if @project.blank?
  end

  def set_workspace
    @workspace = Workspace.find_by(:path_id => params[:workspace_path_id])
    not_found if @workspace.blank?
  end
end
