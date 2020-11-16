module Common
  extend ActiveSupport::Concern
  require 'securerandom'
  require 'digest'

  def get_token
    random_hex = SecureRandom.hex(20)
    Digest::SHA512.hexdigest(random_hex)
  end

  def get_expired_datetime
    Time.now + 60 * 60
  end

  def get_random_password
    SecureRandom.hex(8)
  end
end
