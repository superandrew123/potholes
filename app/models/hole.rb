class Hole < ActiveRecord::Base

  # Check for another hole of the same coords
  before_create :round_to_four

  def self.all_coords
    Hole.all.collect {|hole| hole.return_coords }
  end

  def round_to_four
    self.latitude = self.latitude.round(4)
    self.longitude = self.longitude.round(4)
  end

  def return_coords
    [self.latitude.to_f, self.longitude.to_f]
  end
end
