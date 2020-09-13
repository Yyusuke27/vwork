class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  include ApiCommonHandler
  after_action :set_cors_header

  private

  def sign_up_params
    params.permit(:name, :email, :password, :password_confirmation)
  end

  def account_update_params
    params.permit(:name, :email)
  end
end
