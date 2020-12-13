require 'rails_helper'

RSpec.describe 'Api::V1::Attendances', :type => :request do
  include SignInHelper

  before do
    @user = create(:user)
    @auth_tokens = sign_in(@user)
    @workspace = @user.workspaces.first
    @attendance = create(:attendance, :user => @user, :workspace => @workspace)
  end

  describe '正常' do
    it '今月の勤怠一覧が表示されていること' do
      get "/api/v1/workspaces/#{@workspace.path_id}/attendances", :headers => @auth_tokens

      expect(response.status).to eq(200)

      json = JSON.parse(response.body, { :symbolize_names => true })
      expect(json[:success]).to eq true
    end

    it '勤怠の詳細が表示されていること' do
      get "/api/v1/workspaces/#{@workspace.path_id}/attendances/#{@attendance.id}", :headers => @auth_tokens

      expect(response.status).to eq(200)

      json = JSON.parse(response.body, { :symbolize_names => true })
      expect(json[:success]).to eq true
    end

    it '勤怠が更新されること' do
      started_at = Time.zone.today.since(1.hour)
      put "/api/v1/workspaces/#{@workspace.path_id}/attendances/#{@attendance.id}", :headers => @auth_tokens, :params => {
        :attendance => {
          :started_at => started_at
        }
      }

      expect(response.status).to eq(200)

      @attendance.reload
      expect(@attendance.started_at).to eq started_at

      json = JSON.parse(response.body, { :symbolize_names => true })
      expect(json[:success]).to eq true
    end
  end
end
