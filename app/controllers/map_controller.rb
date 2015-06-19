class MapController < ApplicationController

  def main
    # root
  end

  def show
    @current_location = Hole.find(params[:id]).return_coords
    @locations = Hole.all_coords
  end

  def index
    @current_location = Hole.last.return_coords
    @locations = Hole.all_coords
  end
end
