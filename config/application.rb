require_relative 'boot'


require 'rails/all'
# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module GetAutism
  class Application < Rails::Application
    require 'carrierwave/orm/activerecord'
    config.assets.enabled = false
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
