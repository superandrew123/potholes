class HoleController < ApplicationController
  def create
    @hole = Hole.new(hole_params)
    @hole.round_to_four
    @hole = Hole.already_reported?(@hole)
    params[:hole_id] = @hole.id
    redirect_to map_path
  end

  private
    def hole_params
      params.require(:location).permit(:latitude, :longitude)
    end
end
