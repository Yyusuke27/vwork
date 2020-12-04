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
    # workspaceのメンバーであれば作成可能
  end

  private

  def check_project_member
    @project = Project.find(params[:id])

    not_found unless @project.member? @current_user.id
  end
end
