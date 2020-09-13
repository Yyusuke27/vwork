FactoryBot.define do
  factory :invite do
    user { nil }
    workspace { nil }
    invitationToken { "MyString" }
    invitationExpire { "2020-09-13 22:01:15" }
  end
end
