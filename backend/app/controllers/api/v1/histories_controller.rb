class Api::V1::HistoriesController < Api::ApiController
  def index
    histories = History.includes(:log => [:user])
                       .includes(:comment => [:user])
                       .where(:task_id => params[:task_id])

    render :template => 'api/v1/histories/index.json.jb', :locals => { :histories => histories }
  end
end
