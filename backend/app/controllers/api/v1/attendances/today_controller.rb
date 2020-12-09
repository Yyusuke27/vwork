class Api::V1::Attendances::TodayController < Api::ApiController
  def index
    workspace = Workspace.friendly.find(params[:workspace_path_id])
    not_found if workspace.blank?

    attendance = Attendance.current_workspace(@current_user, workspace).today.first
    if attendance.blank?
      # 今日の勤怠がなかったら作成
      attendance = Attendance.create_today(@current_user, workspace)
    end

    render :template => 'api/v1/attendances/today/index.json.jb', :locals => {
      :attendance => attendance
    }
  end
end
