class Api::V1::Invitations::RegisterController < Api::ApiController
  def create
    workspace = Workspace.friendly.find(params[:workspace_path_id])

    if workspace.present?
      begin
        ActiveRecord::Base.transaction do
          workspace.user_profiles.create!(
            :position => user_profile_params[:user_profile][:position],
            :user_id => @current_user.id
          )

          workspace.workspace_members.create!(
            :member_id => @current_user.id,
            :role => 0
          )

          # ユーザーの登録状況を更新
          @current_user.name = user_params[:user_profile][:name]
          @current_user.save!
          @current_user.update_registration

          render :template => 'api/v1/invitations/register/create.json.jb', :locals => { :workspace => workspace }
        end
      rescue StandardError => e
        logger.warn e.message
        render :json => { :success => false }
      end
    else
      not_found
    end
  end

  private

  def user_profile_params
    params.require(:register).permit(:user_profile => [:position])
  end

  def user_params
    params.require(:register).permit(:user_profile => [:name])
  end
end
