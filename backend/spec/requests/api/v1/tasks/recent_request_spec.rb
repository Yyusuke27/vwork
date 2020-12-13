require 'rails_helper'

RSpec.describe 'Api::V1::Tasks::Recent', :type => :request do
  include SignInHelper

  before do
    @user = create(:user)
    @auth_tokens = sign_in(@user)
    @workspace = @user.workspaces.first
  end

  describe '正常' do
    it '1週間以内にupdateされたタスク全て表示されていること' do
      get "/api/v1/workspaces/#{@workspace.path_id}/tasks/recent", :headers => @auth_tokens

      expect(response).to have_http_status(:success)
      json = JSON.parse(response.body, { :symbolize_names => true })

      task_count = Task.where(
        :user_id => @user.id,
        :workspace_id => @workspace.id
      ).recent.count

      expect(json[:tasks].length).to eq task_count
    end
  end
end
