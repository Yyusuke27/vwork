require 'rails_helper'

RSpec.describe 'Api::V1::Projects::Members', :type => :request do
  include SignInHelper

  before do
    @user = create(:user)
    @user2 = create(:user)
    @auth_tokens = sign_in(@user)
    @workspace = @user.workspaces.first
    @project = @user.projects.first
  end

  describe '正常' do
    it 'メンバーの詳細が表示されていること' do
      get "/api/v1/workspaces/#{@workspace.path_id}/projects/#{@project.id}/members/#{@user.id}", :headers => @auth_tokens

      expect(response.status).to eq(200)
    end

    it 'メンバーの作成されていること' do
      post "/api/v1/workspaces/#{@workspace.path_id}/projects/members", :headers => @auth_tokens, :params => {
        :members => [@user2.id],
        :projectId => @project.id
      }
      json = JSON.parse(response.body, { :symbolize_names => true })

      expect(json[:success]).to eq true
    end
  end
end
