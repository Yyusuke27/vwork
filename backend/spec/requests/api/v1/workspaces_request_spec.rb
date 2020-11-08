require 'rails_helper'

RSpec.describe 'Api::V1::Workspaces', type: :request do
  include SignInHelper
  describe '正常' do
    before do
      @user = create(:user)
      @auth_tokens = sign_in(@user)
    end

    it '自分のworkspaceが全て表示されていること' do
      get api_v1_workspaces_path, headers: @auth_tokens

      expect(response).to have_http_status(:success)
      json = JSON.parse(response.body, {:symbolize_names => true})

      workspace_count = @user.workspaces.count

      expect(json[:workspaces].length).to eq workspace_count
    end
  end
end
