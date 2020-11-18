class Api::ApiController < ApplicationController
  before_action :authenticate_api_v1_user!
  before_action :set_user

  def not_found
    raise ActionController::RoutingError.new('Not Found')
  end

  private

  def set_user
    @current_user = current_api_v1_user
  end
end
