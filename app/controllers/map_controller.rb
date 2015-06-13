class MapController < ApplicationController

  def main
    # root
  end

  def show
    @location = Hole.find(params[:id]).return_coords
  end
end
