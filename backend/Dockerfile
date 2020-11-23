FROM ruby:2.6.3
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    nodejs \
    mariadb-client \
    yarn
WORKDIR /backend
ADD Gemfile /backend/Gemfile
ADD Gemfile.lock /backend/Gemfile.lock
RUN bundle install
ADD . /backend
