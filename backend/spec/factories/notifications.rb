FactoryBot.define do
  factory :notification do
    user_id { '' }
    task_id { '' }
    workspace_id { '' }
    type { 1 }
    unread { false }
  end
end
