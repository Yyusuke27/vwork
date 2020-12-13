require 'rails_helper'

RSpec.describe 'Api::V1::Projects::My', :type => :request do
  include SignInHelper
  before do
    @user = create(:user)
    @auth_tokens = sign_in(@user)
    @workspace = @user.workspaces.first
  end

  describe '正常' do
    it '自分のプロジェクトが全て表示されること' do
      get "/api/v1/workspaces/#{@workspace.path_id}/projects/my", :headers => @auth_tokens
  
      expect(response.status).to eq(200)

      json = JSON.parse(response.body, { :symbolize_names => true })

      expect(json[:success]).to eq true
      expect(json[:projects].length).to eq @user.projects.length
    end
  end
end
