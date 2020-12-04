# == Schema Information
#
# Table name: logs
#
#  id         :bigint           not null, primary key
#  log_type   :integer
#  new_state  :string(255)
#  old_state  :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  history_id :bigint
#  task_id    :bigint
#  user_id    :bigint
#
# Indexes
#
#  index_logs_on_history_id  (history_id)
#  index_logs_on_task_id     (task_id)
#
class Log < ApplicationRecord
  belongs_to :user
  belongs_to :task
  belongs_to :history

  enum :log_type => {
    :create_new_task => 0,
    :task_name => 1,
    :description => 2,
    :start_date_at => 3,
    :end_date_at => 4,
    :state => 5,
    :progress => 6,
    :priority => 7,
    :todays_task => 8,
    :project => 9,
    :user => 10
  }

  # rubocop:disable all
  def self.create_logs(log, task, user_id)
    change_logs = []
    if log[:user_id].present?
      new_user = User.find(log[:user_id])
      change_logs << { :user_id => user_id, :task_id => task.id, :log_type => 'user', :new_state => new_user, :old_state => task.user_id }
    end
    if log[:start_date_at].present?
      new_date = DateTime.parse(log[:start_date_at]).strftime('%Y年%m月%d日')
      change_logs << { :user_id => user_id, :task_id => task.id, :log_type => 'start_date_at', :new_state => new_date, :old_state => task.start_date_at.strftime('%Y年%m月%d日') }
    end
    if log[:end_date_at].present?
      new_date = DateTime.parse(log[:end_date_at]).strftime('%Y年%m月%d日')
      change_logs << { :user_id => user_id, :task_id => task.id, :log_type => 'end_date_at', :new_state => new_date, :old_state => task.end_date_at.strftime('%Y年%m月%d日') }
    end
    log[:name].present? && change_logs << { :user_id => user_id, :task_id => task.id, :log_type => 'task_name', :new_state => log[:name], :old_state => task.name }
    log[:description].present? && change_logs << { :user_id => user_id, :task_id => task.id, :log_type => 'description', :new_state => log[:description], :old_state => task.description }
    log[:state].present? && change_logs << { :user_id => user_id, :task_id => task.id, :log_type => 'state', :new_state => log[:state], :old_state => task.state_before_type_cast }
    log[:progress].present? && change_logs << { :user_id => user_id, :task_id => task.id, :log_type => 'progress', :new_state => log[:progress], :old_state => task.progress }
    log[:priority].present? && change_logs << { :user_id => user_id, :task_id => task.id, :log_type => 'priority', :new_state => log[:priority], :old_state => task.priority_before_type_cast }
    log[:project_id].present? && change_logs << { :user_id => user_id, :task_id => task.id, :log_type => 'project', :new_state => log[:project_id], :old_state => task.project_id }
    log[:todays_task].present? && change_logs << { :user_id => user_id, :task_id => task.id, :log_type => 'todays_task', :new_state => log[:todays_task], :old_state => task.todays_task }

    change_logs.each do |change_log|
      history = History.create!(:task_id => task.id, :history_type => 'log_item')
      history.create_log! change_log
    end
  end
  # rubocop:disable all
end
