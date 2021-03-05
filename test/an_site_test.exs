defmodule AnSiteTest do
  use ExUnit.Case
  doctest AnSite

  test "greets the world" do
    assert AnSite.hello() == :world
  end
end
