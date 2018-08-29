# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_08_29_171428) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favourites", force: :cascade do |t|
    t.bigint "item_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_favourites_on_item_id"
    t.index ["user_id"], name: "index_favourites_on_user_id"
  end

  create_table "items", force: :cascade do |t|
    t.bigint "user_id"
    t.string "category"
    t.string "photo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "owner"
    t.index ["user_id"], name: "index_items_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "last_fed"
    t.integer "happiness"
    t.boolean "tucked_in"
    t.bigint "head_item_id"
    t.bigint "face_item_id"
    t.bigint "neck_item_id"
    t.bigint "body_item_id"
    t.bigint "couch_item_id"
    t.bigint "table_item_id"
    t.bigint "side_table_item_id"
    t.bigint "window_item_id"
    t.bigint "plant_item_id"
    t.bigint "floor_item_id"
    t.bigint "wall_item_id"
    t.string "clubhouse_name"
    t.index ["body_item_id"], name: "index_users_on_body_item_id"
    t.index ["couch_item_id"], name: "index_users_on_couch_item_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["face_item_id"], name: "index_users_on_face_item_id"
    t.index ["floor_item_id"], name: "index_users_on_floor_item_id"
    t.index ["head_item_id"], name: "index_users_on_head_item_id"
    t.index ["neck_item_id"], name: "index_users_on_neck_item_id"
    t.index ["plant_item_id"], name: "index_users_on_plant_item_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["side_table_item_id"], name: "index_users_on_side_table_item_id"
    t.index ["table_item_id"], name: "index_users_on_table_item_id"
    t.index ["wall_item_id"], name: "index_users_on_wall_item_id"
    t.index ["window_item_id"], name: "index_users_on_window_item_id"
  end

  add_foreign_key "favourites", "items"
  add_foreign_key "favourites", "users"
  add_foreign_key "items", "users"
end
