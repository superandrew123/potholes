class MapController < ApplicationController

  def main
    # root
  end

  def map
    @current_location = Hole.last.return_coords
    @locations = Hole.all_coords
  end

  private
    def map_params

    end
end
