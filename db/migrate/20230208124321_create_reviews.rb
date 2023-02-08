class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :customer_id
      t.integer :movie_id
      t.string :title
      t.string :review
      t.integer :evaluation
      t.boolean :is_reported, default: false
      t.boolean :is_displayed, default: false

      t.timestamps
    end
  end
end
