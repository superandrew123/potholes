class HoleController < ApplicationController
  def create
    # binding.pry
    @hole = Hole.new(hole_params)
    @hole.round_to_four
    # lat/long accuracy to 4 decimals is effective
    binding.pry

    redirect_to show_path(@hole)
  end

  private
    def hole_params
      params.require(:location).permit(:latitude, :longitude)
    end
end
