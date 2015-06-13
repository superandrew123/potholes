class HoleController < ApplicationController
  def create
    @hole = Hole.create(hole_params)

    redirect_to show_path(@hole)
  end

  private
    def hole_params
      params.require(:location).permit(:latitude, :longitude)
    end
end
