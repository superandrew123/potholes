class HoleController < ApplicationController
  def create
    @hole = Hole.new(hole_params)
    @hole.round_to_four
    @hole = Hole.already_reported?(@hole)

    redirect_to show_path(@hole)
  end

  private
    def hole_params
      params.require(:location).permit(:latitude, :longitude)
    end
end
