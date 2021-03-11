# Extend from the official Elixir image
FROM elixir:1.11.3-alpine

# Install required libraries on Alpine
# note: build-base required to run mix “make” for
# one of my dependecies (bcrypt)
RUN apk update && apk upgrade && \
  rm -rf /var/cache/apk/*

# Set environment to production
ENV MIX_ENV prod

# Install hex package manager and rebar
# By using --force, we don’t need to type “Y” to confirm the installation
RUN mix do local.hex --force, local.rebar --force

# Cache elixir dependecies and lock file
COPY mix.* ./

# Install and compile production dependecies
RUN mix do deps.get --only prod
RUN mix deps.compile

# Cache and install node packages and dependencies
# COPY assets/package.json assets/
# RUN cd assets && \
#     npm install

# Copy all application files
COPY . ./

RUN mix do compile

# Run entrypoint.sh script
RUN chmod +x entrypoint.sh

CMD ["/entrypoint.sh"]