require 'rails_helper'

RSpec.describe 'Api::V1::Projects::NewMembers', :type => :request do
  include SignInHelper

  before do
    @user = create(:user)
    @auth_tokens = sign_in(@user)
    @workspace = @user.workspaces.first
    @project = @user.projects.first
  end

  describe '正常' do
    it 'プロジェクトメンバー以外のワークスペースのメンバーが全て表示されていること' do
      project_members_ids = @project.project_members.ids

      get "/api/v1/workspaces/#{@workspace.path_id}/projects/new_members", :headers => @auth_tokens
      expect(response.status).to eq(200)

      json = JSON.parse(response.body, { :symbolize_names => true })
      new_members_ids = json[:data].pluck(:id)
      expect(project_members_ids - new_members_ids).to eq project_members_ids
    end
  end
end
