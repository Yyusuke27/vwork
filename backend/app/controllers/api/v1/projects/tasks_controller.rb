class Api::V1::Projects::TasksController < Api::ApiController
  before_action :check_project_member, :only => [:index]

  def index
    tasks = Task.includes(:user, :project).where(:project_id => @project.id)

    render :template => 'api/v1/projects/tasks/index.json.jb', :locals => {
      :tasks => tasks
    }
  end

  private

  def check_project_member
    @project = Project.find(params[:project_id])
    not_found if @project.blank?

    not_found unless @project.member? @current_user.id
  end
end
