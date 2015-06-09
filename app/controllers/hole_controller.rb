class HoleController < ApplicationController
  def create
    Hole.create(hole_params)

    render nothing: true
  end

  private
    def hole_params
      params.require(:location).permit(:latitude, :longitude)
    end
end
