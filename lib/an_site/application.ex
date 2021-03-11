defmodule AnSite.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false
  require Logger

  use Application

  def start(_type, _args) do
    # List all child processes to be supervised
    port = 8080

    children = [
      {Plug.Cowboy, scheme: :http, plug: AnSite.AppRouter, options: [port: port]}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: MyApp.Supervisor]

    Logger.info("Now listening on port #{port}!")

    Supervisor.start_link(children, opts)
  end
end
