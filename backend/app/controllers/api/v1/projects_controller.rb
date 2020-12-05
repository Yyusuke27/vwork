class Api::V1::ProjectsController < Api::ApiController
  before_action :check_project_member, :only => [:show]

  def index
    # workspaceのownerのみ閲覧可能
    # workspaceのproject一覧
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

      render :template => 'api/v1/projects/create.json.jb'
    end
  rescue StandardError => e
    render :json => { :success => false }
  end

  private

  def project_params
    params.require(:project).permit(:name, :description)
  end

  def check_project_member
    @project = Project.find(params[:id])

    not_found unless @project.member? @current_user.id
  end
end
