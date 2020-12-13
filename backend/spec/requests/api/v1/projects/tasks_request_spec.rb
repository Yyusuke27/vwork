require 'rails_helper'

RSpec.describe 'Api::V1::Projects::Tasks', :type => :request do
  include SignInHelper

  before do
    @user = create(:user)
    @user2 = create(:user)
    @auth_tokens = sign_in(@user)
    @workspace = @user.workspaces.first
    @project = @user.projects.first
  end

  describe '正常' do
    it 'プロジェクトのタスクが全て表示されていること' do
      get "/api/v1/workspaces/#{@workspace.path_id}/projects/#{@project.id}/tasks", :headers => @auth_tokens

      expect(response.status).to eq(200)

      json = JSON.parse(response.body, { :symbolize_names => true })

      expect(json[:success]).to eq true
      expect(json[:data][:tasks].length).to eq @project.tasks.length
    end
  end
end
