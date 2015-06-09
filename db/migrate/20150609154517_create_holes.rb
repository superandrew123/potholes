class CreateHoles < ActiveRecord::Migration
  def change
    create_table :holes do |t|
      t.decimal :latitude
      t.decimal :longitude
      t.integer :count, default: 1
      t.timestamps null: false
    end
  end
end
