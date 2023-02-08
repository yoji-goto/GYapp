class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :customer_id
      t.integer :review_id
      t.string :comment
      t.boolean :is_reported, default: false
      t.boolean :is_deisplayed, default: false

      t.timestamps
    end
  end
end
