class Api::V1::ProjectsController < Api::ApiController
  before_action :check_project_member, :only => [:show]
  before_action :set_workspace, :only => [:index]

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
    # メンバーのみ閲覧可能
    project = Project.find(params[:id])
    project_members = ProjectMember.includes(:member).where(:project_id => project.id)

    render :template => 'api/v1/projects/show.json.jb', :locals => { :project => project, :project_members => project_members }
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

  def check_project_member
    @project = Project.find(params[:id])

    unauthorized unless @project.member? @current_user.id
  end

  def set_workspace
    @workspace = Workspace.find_by(:path_id => params[:workspace_path_id])
    not_found if @workspace.blank?
  end
end
