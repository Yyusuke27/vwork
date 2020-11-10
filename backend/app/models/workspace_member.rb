# == Schema Information
#
# Table name: workspace_members
#
#  id           :bigint           not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  member_id    :bigint           not null
#  workspace_id :bigint           not null
#
class WorkspaceMember < ApplicationRecord
  belongs_to :workspace
  belongs_to :member, class_name: 'User'
end
