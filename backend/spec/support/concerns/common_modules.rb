require 'rails_helper'
include ActionController::RespondWith

module SignInHelper
  def sign_in(user)
    post api_v1_user_session_path, :params => { :email => user['email'], :password => 'test1234' }
    {
      'uid' => response.header['uid'],
      'client' => response.header['client'],
      'access-token' => response.header['access-token'],
      'expiry' => response.header['expiry'],
      'token-type' => 'Bearer'
    }
  end

  def create_auth_header_from_scratch
    @current_user = FactoryBot.create(:user)
  
    token = DeviseTokenAuth::TokenFactory.create

    @current_user.tokens[token.client] = {
      :token => token.token_hash,
      :expiry => token.expiry
    }

    new_auth_header = @current_user.build_auth_header(token.token, token.client)
  
    puts 'This is the new auth header'
    puts new_auth_header.to_s
  
    puts response.headers.merge!(new_auth_header).to_s
  end
end
