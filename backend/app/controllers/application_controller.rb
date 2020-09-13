class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ApiCommonHandler
  after_action :set_cors_header
end
