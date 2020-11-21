class ApplicationMailer < ActionMailer::Base
  default :from => 'info@vwork.xyz'
  layout 'mailer'

  def frontend_host
    if Rails.env.production?
      'https://vwork.xyz'
    else
      'http://localhost:3000'
    end
  end
end
