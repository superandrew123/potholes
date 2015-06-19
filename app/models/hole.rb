class Hole < ActiveRecord::Base

  # Check for another hole of the same coords
  # before_create :check_duplicate

  def self.all_coords
    Hole.all.collect {|hole| hole.return_coords }
  end

  def check_duplicate
    # x.latitude.round(4) == y.latitude.round(4)me
  end

  def return_coords
    [self.latitude.to_f, self.longitude.to_f]
  end
end
