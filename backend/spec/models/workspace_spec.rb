# == Schema Information
#
# Table name: workspaces
#
#  id         :bigint           not null, primary key
#  active     :boolean
#  name       :string(255)
#  slug       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  path_id    :string(191)
#
# Indexes
#
#  index_workspaces_on_path_id  (path_id)
#  index_workspaces_on_slug     (slug) UNIQUE
#
require 'rails_helper'

RSpec.describe Workspace, :type => :model do
  describe 'workspaceを作成する' do
    context '正常に作成できる時' do
      example 'nameが入力されていれば有効' do
        workspace = build(:workspace)
        expect(workspace).to be_valid
      end

      example '保存時にランダム15字のpath_idが追加されている' do
        workspace = create(:workspace)
        expect(workspace.path_id.length).to eq(15)
      end
    end

    context '作成できない時' do
      example 'nameがなければ無効' do
        workspace = build(:workspace, :name => nil)
        workspace.valid?
        expect(workspace.errors[:name]).to include("can't be blank")
      end
    end
  end
end
