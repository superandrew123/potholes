class Hole < ActiveRecord::Base

  # Check for another hole of the same coords

  def self.all_coords
    Hole.all.collect {|hole| hole.return_coords }
  end

  def round_to_four
    self.latitude = self.latitude.round(4)
    self.longitude = self.longitude.round(4)
  end

  def return_coords
    [self.latitude, self.longitude, self.count, self.created_at.strftime("First reported on %m/%d/%Y")]
  end

  def self.already_reported?(new_hole)
    reported_hole = Hole.where("latitude=? AND longitude=?", new_hole.latitude, new_hole.longitude).take
    if reported_hole
      reported_hole.count += 1
      reported_hole.save
      reported_hole
    else
      new_hole.save
      new_hole
    end
  end
end
