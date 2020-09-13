module ApiCommonHandler
  extend ActiveSupport::Concern

  def set_cors_header
    response.headers['Access-Control-Allow-Credentials'] = true
    response.headers['Access-Control-Request-Method'] = '*'
    allow_origin = nil
    if Rails.env.development?
      allow_origin = 'http://localhost:3000'
    elsif request.referer.present?
      if Rails.env.production?
        allow_origin = 'https://v-work-2020.web.app/'
      end
    end
    response.headers['Access-Control-Allow-Origin'] = allow_origin
  end
end
