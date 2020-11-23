require 'sidekiq'

Sidekiq.configure_server do |config|
  case Rails.env
    when 'production' then
      config.redis = {:url => "redis://#{ENV['REDIS_HOST']}:6379"}
    else
      config.redis = {:url => "redis://#{ENV['REDIS_HOST']}:6379"}
  end
end

Sidekiq.configure_client do |config|
  case Rails.env
    when 'production' then
      config.redis = {:url => "redis://#{ENV['REDIS_HOST']}:6379"}
    else
      config.redis = {:url => "redis://#{ENV['REDIS_HOST']}:6379"}
  end
end
