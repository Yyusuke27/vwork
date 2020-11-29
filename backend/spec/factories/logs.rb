FactoryBot.define do
  factory :log do
    user_id { '' }
    task_id { '' }
    type { 1 }
    old_state { 'MyString' }
    new_state { 'MyString' }
  end
end
