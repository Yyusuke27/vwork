# == Schema Information
#
# Table name: project_members
#
#  id         :bigint           not null, primary key
#  role       :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  member_id  :bigint           not null
#  project_id :bigint           not null
#
class ProjectMember < ApplicationRecord
  belongs_to :project
  belongs_to :member, class_name: 'User'
end
