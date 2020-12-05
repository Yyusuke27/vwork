class Api::V1::Invitations::RegisterController < Api::ApiController
  def create
    workspace = Workspace.find_by(:path_id => invitee_param[:workspacePathId])

    if workspace.present?
      begin
        ActiveRecord::Base.transaction do
          workspace.members << @current_user

          user_profile = workspace.user_profile.new(
            :name => invitee_param[:name],
            :email => invitee_param[:email],
            :user_id => @current_user.id
          )
          user_profile.save!

          workspace_role = workspace.workspace_roles.new(
            :workspace_id => workspace.id,
            :member_id => @current_user.id,
            :role => 0
          )
          workspace_role.save!

          # ユーザーの登録状況を更新
          @current_user.update_registration

          render :template => 'api/v1/invitations/register_invitee.json.jb', :locals => { :workspace => workspace }
        end
      rescue StandardError => e
        render :json => { :success => false }
      end
    else
      not_found
    end
  end

  private

  def invitee_param
    params.require(:invitee).permit(:name, :position, :workspacePathId)
  end
end
