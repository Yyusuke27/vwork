# == Schema Information
#
# Table name: project_roles
#
#  id         :bigint           not null, primary key
#  role       :integer          default("normal")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  member_id  :bigint           not null
#  project_id :bigint           not null
#
class ProjectRole < ApplicationRecord
  belongs_to :project
  belongs_to :member, :class_name => 'User'

  enum :role => %i[normal owner]
end
