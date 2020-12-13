require 'rails_helper'

RSpec.describe 'Api::V1::Attendances::Today', :type => :request do
  include SignInHelper

  before do
    @user = create(:user)
    @auth_tokens = sign_in(@user)
    @workspace = @user.workspaces.first
  end

  describe '正常' do
    it '今日の勤怠情報が表示されていること' do
      get "/api/v1/workspaces/#{@workspace.path_id}/attendances/today", :headers => @auth_tokens

      expect(response.status).to eq(200)

      json = JSON.parse(response.body, { :symbolize_names => true })
      expect(json[:success]).to eq true
    end
  end
end
