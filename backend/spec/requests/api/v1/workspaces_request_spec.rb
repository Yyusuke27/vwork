require 'rails_helper'

RSpec.describe 'Api::V1::Workspaces', :type => :request do
  include SignInHelper

  before do
    @user = create(:user)
    @auth_tokens = sign_in(@user)
  end

  let(:valid_params) do
    {
      :workspace => {
        :name => 'ワークスペース名'
      },
      :project => {
        :name => 'プロジェクト名',
        :description => 'プロジェクト詳細',
        :icon => 0,
        :color => 0
      },
      :userProfile => {
        :name => 'VWORK太郎',
        :position => 'エンジニア'
      },
      :invitations => [
        {
          :name => '招待者名',
          :email => 'invitee@test.com'
        }
      ]
    }
  end

  let(:invalid_params) do
    {
      :workspace => {},
      :project => {},
      :userProfile => {},
      :invitations => []
    }
  end

  describe '正常' do
    it '自分のworkspaceが全て表示されていること' do
      get api_v1_workspaces_path, :headers => @auth_tokens

      expect(response).to have_http_status(:success)
      json = JSON.parse(response.body, { :symbolize_names => true })

      workspace_count = @user.workspaces.count

      expect(json[:workspaces].length).to eq workspace_count
    end

    it '正常にworkspaceが作成されること' do
      expect { post api_v1_workspaces_path, :headers => @auth_tokens, :params => valid_params }.to change(Workspace, :count).by(+1)
    end

    it '正常にworkspaceが更新されること' do
      workspace = create(:workspace)
      WorkspaceMember.create!(:workspace_id => workspace.id, :member_id => @user.id, :role => 1)

      put "/api/v1/workspaces/#{workspace.path_id}", :headers => @auth_tokens, :params => { :name => 'updated workspace' }
      expect(response.status).to eq(200)
    end
  end

  describe '異常' do
    it 'workspaceが作成されないこと' do
      post api_v1_workspaces_path, :headers => @auth_tokens, :params => invalid_params
      json = JSON.parse(response.body, { :symbolize_names => true })

      expect(json[:success]).to eq(false)
    end
  end
end
