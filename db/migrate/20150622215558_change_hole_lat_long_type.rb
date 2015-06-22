class ChangeHoleLatLongType < ActiveRecord::Migration
  def change
    change_column :holes, :latitude, :float
    change_column :holes, :longitude, :float
  end
end
