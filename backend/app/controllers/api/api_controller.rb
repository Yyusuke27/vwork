class Api::ApiController < ApplicationController
  before_action :authenticate_api_v1_user!
  before_action :set_user
  before_action :set_workspace

  def not_found
    raise ActionController::RoutingError.new('Not Found')
  end

  def check_workspace_owner
    is_workspace_owner = WorkspaceMember.exists?(
      :workspace_id => @workspace.id,
      :member_id => @current_user.id,
      :role => 1
    )
    render :status => :unauthorized, :json => { :status => 401, :message => 'Unauthorized' } unless is_workspace_owner
  end

  private

  def set_user
    @current_user = current_api_v1_user
  end

  def set_workspace
    return unless params[:workspace_path_id] || params[:path_id]

    path_id = params[:workspace_path_id] || params[:path_id]
    @workspace = Workspace.friendly.find(path_id)
    not_found if @workspace.blank?
  end
end
