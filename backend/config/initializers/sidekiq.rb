require 'sidekiq'

# TODO: 環境変数にSPLIT_SERVERを設定
Sidekiq.configure_server do |config|
  case Rails.env
    when 'production' then
      config.redis = {url: 'redis://' + ENV['SPLIT_SERVER'] + ':6379'}
    else
      config.redis = {url: 'redis://127.0.0.1:6379'}
  end
end

Sidekiq.configure_client do |config|
  case Rails.env
    when 'production' then
      config.redis = {url: 'redis://' + ENV['SPLIT_SERVER'] + ':6379'}
    else
      config.redis = {url: 'redis://127.0.0.1:6379'}
  end
end
