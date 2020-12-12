require 'rails_helper'

RSpec.describe 'Api::V1::Tasks', :type => :request do
  include SignInHelper

  before do
    @user = create(:user)
    @auth_tokens = sign_in(@user)
    @workspace = @user.workspaces.first
    @project = @user.projects.first
  end

  let(:valid_params) do
    {
      :task => {
        :user_id => @user.id,
        :project_id => @project.id,
        :name => 'タスク名',
        :description => 'タスク詳細',
        :start_date_at => Time.zone.today,
        :end_date_at => Time.zone.today.since(1.day),
        :state => 'open',
        :progress => 1,
        :priority => 'low',
        :todays_task => false
      }
    }
  end

  let(:invalid_params) do
    {
      :task => {
        :user_id => @user.id,
        :project_id => @project.id,
        :name => nil,
        :description => nil,
        :start_date_at => Time.zone.today,
        :end_date_at => Time.zone.today.since(1.day),
        :state => 'open',
        :progress => 1,
        :priority => 'low',
        :todays_task => false
      }
    }
  end

  let(:task) { @user.tasks.first }

  describe '正常' do
    it 'taskの詳細が表示されていること' do
      get "/api/v1/workspaces/#{@workspace.path_id}/tasks/#{task.id}", :headers => @auth_tokens

      json = JSON.parse(response.body, { :symbolize_names => true })

      expect(json[:success]).to eq true
    end

    it 'taskが作成されていること' do
      post "/api/v1/workspaces/#{@workspace.path_id}/tasks", :headers => @auth_tokens, :params => valid_params

      json = JSON.parse(response.body, { :symbolize_names => true })

      expect(json[:success]).to eq true
    end

    it 'taskが更新されていること' do
      put "/api/v1/workspaces/#{@workspace.path_id}/tasks/#{task.id}", :headers => @auth_tokens, :params => valid_params

      json = JSON.parse(response.body, { :symbolize_names => true })

      expect(json[:success]).to eq true
    end
  end

  describe '異常' do
    it 'taskが作成されないこと' do
      post "/api/v1/workspaces/#{@workspace.path_id}/tasks", :headers => @auth_tokens, :params => invalid_params

      json = JSON.parse(response.body, { :symbolize_names => true })

      expect(json[:success]).to eq false
    end

    it 'taskが更新されないこと' do
      put "/api/v1/workspaces/#{@workspace.path_id}/tasks/#{task.id}", :headers => @auth_tokens, :params => invalid_params

      json = JSON.parse(response.body, { :symbolize_names => true })

      expect(json[:success]).to eq false
    end
  end
end
