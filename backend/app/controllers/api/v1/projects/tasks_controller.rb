class Api::V1::Projects::TasksController < Api::ApiController
  before_action :set_project, :only => [:index]
  before_action :valid_member?, :only => [:index]

  def index
    if @is_workspace_owner || @is_project_member.present? || @current_user.admin?
      tasks = Task.includes(:user, :project).where(:project_id => @project.id)

      render :template => 'api/v1/projects/tasks/index.json.jb', :locals => {
        :tasks => tasks
      } and return
    end

    render :status => :unauthorized, :json => { :status => 401, :message => 'Unauthorized' }
  end

  private

  def set_project
    @project = Project.find(params[:project_id])
    not_found if @project.blank?
  end

  def valid_member?
    project_members = ProjectMember.includes(:member).where(:project_id => @project.id)
    @is_workspace_owner = WorkspaceMember.exists?(
      :workspace_id => @workspace.id,
      :member_id => @current_user.id,
      :role => 'owner'
    )
    @is_project_member = project_members.where(
      :member_id => @current_user.id
    )
  end
end
