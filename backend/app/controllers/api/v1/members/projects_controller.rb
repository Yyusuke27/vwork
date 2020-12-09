class Api::V1::Members::ProjectsController < Api::ApiController
  before_action :check_workspace_owner, :only => [:index]

  def index
    project_members = ProjectMember.includes(:project)
                                   .where(:member_id => params[:member_id])
                                   .where(:projects => { :workspace_id => @workspace.id })
    not_found if project_members.blank?

    render :template => 'api/v1/members/projects/index.json.jb', :locals => {
      :project_members => project_members
    }
  end
end
