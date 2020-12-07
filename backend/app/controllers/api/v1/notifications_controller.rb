class Api::V1::NotificationsController < Api::ApiController
  before_action :set_workspace, :only => [:index, :update]
  before_action :set_notifications, :only => [:index]
  before_action :set_notification, :only => [:update]

  def index
    render :template => 'api/v1/notifications/index.json.jb', :locals => {
      :notifications => @notifications
    }
  end

  def update
    @notification.update! :unread => params[:unread]

    render :template => 'api/v1/notifications/update.json.jb'
  end

  private

  def set_workspace
    @workspace = Workspace.find_by(:path_id => params[:workspace_path_id])
    not_found if @workspace.blank?
  end

  def set_notifications
    @notifications = Notification.includes(:task => [:project])
                                 .where(:workspace_id => @workspace.id, :user_id => @current_user.id)
                                 .order(:created_at => :DESC)
  end

  def set_notification
    @notification = Notification.find(params[:id])
    not_found if @notification.blank?
  end
end
