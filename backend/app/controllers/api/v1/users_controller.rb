class Api::V1::UsersController < Api::ApiController
  def update
    @current_user.attributes = { :name => user_params[:name] } if user_params[:name].present?
    @current_user.save!

    if user_profile_params.present?
      user_profile = UserProfile.find_by(
        :user_id => @current_user.id,
        :workspace_id => @workspace.id
      )
      not_found if user_profile.blank?

      user_profile.attributes = { :position => user_profile_params[:position] }
      user_profile.save!
    end

    render :template => 'api/v1/users/update.json.jb'
  end

  private

  def user_params
    params.permit(:name, :email)
  end

  def user_profile_params
    params.permit(:position)
  end
end
