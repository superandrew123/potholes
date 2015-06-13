class Hole < ActiveRecord::Base

  # Check for another hole of the same coords
  # before_create :check_duplicate

  def check_duplicate
    
  end

  def return_coords
    [self.latitude.to_f, self.longitude.to_f]
  end
end
