class Api::V1::Tasks::MembersController < Api::ApiController
  def show
    tasks = Task.where(:user_id => params[:id])

    render :template => 'api/v1/workspaces/tasks/member.json.jb', :locals => { :tasks => tasks }
  end
end
