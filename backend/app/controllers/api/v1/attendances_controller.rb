class Api::V1::AttendancesController < Api::ApiController
  def index
    attendances = Attendance.includes(:attendance_tasks)
                            .where(
                              :user_id => @current_user.id,
                            )
    attendances =
      if params[:year] && params[:month]
        attendances.where(:created_at => "#{params[:year]}-#{params[:month]}-1".in_time_zone.all_month)
      else
        attendances.where(:created_at => Time.zone.today.all_month)
      end

    render :template => 'api/v1/attendances/index.json.jb', :locals => {
      :attendances => attendances
    }
  end

  def show
    attendance = Attendance.includes(:attendance_tasks).find(params[:id])
    not_found if attendance.blank?

    render :template => 'api/v1/attendances/show.json.jb', :locals => {
      :attendance => attendance
    }
  end

  def update
    attendance = Attendance.find(params[:id])
    not_found if attendance.blank?
    ActiveRecord::Base.transaction do
      attendance.assign_attributes attendance_params
      attendance.save!

      if attendance_tasks_params.present?
        tasks = attendance_tasks_params[:tasks]
        tasks.each do |task|
          AttendanceTask.create_attendance_task(attendance, task)
        end
      end

      render :template => 'api/v1/attendances/update.json.jb', :locals => {
        :attendance => attendance
      }
    end
  rescue StandardError => e
    logger.warn e.message
    render :json => { :success => false }
  end

  private

  def attendance_params
    params.require(:attendance).permit(
      :started_at,
      :end_at,
      :rest_started_at,
      :rest_ended_at,
      :comment
    )
  end

  def attendance_tasks_params
    return nil if params[:attendance][:tasks].blank?

    params.require(:attendance).permit(
      :tasks => %i[id name description startDateAt endDateAt state progress priority]
    )
  end
end
