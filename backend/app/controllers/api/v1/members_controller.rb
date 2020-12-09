class Api::V1::MembersController < Api::ApiController
  def index
    workspace_members = WorkspaceMember.includes(:member).where(:workspace_id => @workspace.id)

    render :template => 'api/v1/members/index.json.jb', :locals => {
      :workspace_members => workspace_members
    }
  end

  def show
    workspace_member = WorkspaceMember.includes(:member).where(:workspace_id => @workspace.id, :member_id => params[:id]).first
    profile = UserProfile.where(:workspace_id => @workspace.id, :user_id => params[:id]).first
    not_found if workspace_member.blank? || profile.blank?

    render :template => 'api/v1/members/show.json.jb', :locals => {
      :workspace_member => workspace_member,
      :profile => profile
    }
  end
end
