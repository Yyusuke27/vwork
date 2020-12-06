class Api::V1::Members::AttendancesController < Api::ApiController
  def index
    attendances = Attendance.includes(:attendance_tasks)
                            .where(
                              :user_id => params[:member_id]
                            )
    attendances =
      if params[:year] && params[:month]
        attendances.where(:created_at => "#{params[:year]}-#{params[:month]}-1".in_time_zone.all_month)
      else
        attendances.where(:created_at => Time.zone.today.all_month)
      end

    render :template => 'api/v1/members/attendances/index.json.jb', :locals => {
      :attendances => attendances
    }
  end
end
