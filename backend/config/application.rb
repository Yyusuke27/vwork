require_relative 'boot'

require 'rails'
# Pick the frameworks you want:
require 'active_model/railtie'
require 'active_job/railtie'
require 'active_record/railtie'
require 'active_storage/engine'
require 'action_controller/railtie'
require 'action_mailer/railtie'
require 'action_mailbox/engine'
require 'action_text/engine'
require 'action_view/railtie'
require 'action_cable/engine'
require 'rails/test_unit/railtie'

Bundler.require(*Rails.groups)

module Backend
  class Application < Rails::Application
    config.load_defaults 6.0

    config.time_zone = "Tokyo"

    config.api_only = true

    config.generators do |g|
      g.test_framework :rspec,
      :view_specs => false,
      :helper_specs => false,
      :routing_specs => false
    end

    config.cache_store = :redis_store, "redis://#{ENV['REDIS_HOST']}:#{ENV['REDIS_PORT']}/0/cache", { :expires_in => 90.minutes }

    config.active_job.queue_adapter = :sidekiq
  end
end
