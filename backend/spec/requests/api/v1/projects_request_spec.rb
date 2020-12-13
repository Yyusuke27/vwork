require 'rails_helper'

RSpec.describe 'Api::V1::Projects', :type => :request do
  include SignInHelper

  before do
    @user = create(:user)
    @auth_tokens = sign_in(@user)
    @workspace = @user.workspaces.first
  end

  let(:valid_params) do
    {
      :project => {
        :name => 'プロジェクト名',
        :description => 'プロジェクトの説明'
      }
    }
  end

  let(:invalid_params) do
    {
      :project => {
        :name => nil,
        :description => nil
      }
    }
  end

  describe '正常' do
    context 'workspaceのownerの場合' do
      it 'workspaceのownerにprojectの一覧が表示されていること' do
        get "/api/v1/workspaces/#{@workspace.path_id}/projects", :headers => @auth_tokens

        expect(response.status).to eq(200)
      end

      it 'workspaceのownerにprojectの詳細が表示されていること' do
        project = create(:project, :workspace => @workspace)
        get "/api/v1/workspaces/#{@workspace.path_id}/projects/#{project.id}", :headers => @auth_tokens

        expect(response.status).to eq(200)
      end
    end

    it 'projectのメンバーにprojectの詳細が表示されていること' do
      project = @user.projects.first
      get "/api/v1/workspaces/#{@workspace.path_id}/projects/#{project.id}", :headers => @auth_tokens

      expect(response.status).to eq(200)
    end

    it 'projectが作成されていること' do
      post "/api/v1/workspaces/#{@workspace.path_id}/projects", :headers => @auth_tokens, :params => valid_params

      json = JSON.parse(response.body, { :symbolize_names => true })
      expect(json[:success]).to eq true
    end
  end

  describe '異常' do
    context 'workspaceのownerではない場合' do
      before do
        @user = create(:user, :workspace_owner => false)
        @auth_tokens = sign_in(@user)
        @workspace = @user.workspaces.first
      end

      it 'workspaceのowner以外にprojectの一覧が表示されていないこと' do
        get "/api/v1/workspaces/#{@workspace.path_id}/projects", :headers => @auth_tokens

        expect(response.status).to eq(404)
      end
    end

    it 'projectが作成されないこと' do
      post "/api/v1/workspaces/#{@workspace.path_id}/projects", :headers => @auth_tokens, :params => invalid_params

      json = JSON.parse(response.body, { :symbolize_names => true })
      expect(json[:success]).to eq false
    end
  end
end
