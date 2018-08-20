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

ActiveRecord::Schema.define(version: 2018_08_20_193343) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "item_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_favorites_on_item_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "items", force: :cascade do |t|
    t.bigint "user_id"
    t.string "category"
    t.string "photo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
    t.bigint "head_id"
    t.bigint "face_id"
    t.bigint "neck_id"
    t.bigint "body_id"
    t.bigint "couch_id"
    t.bigint "table_id"
    t.bigint "side_table_id"
    t.bigint "lamp_id"
    t.bigint "plant_id"
    t.bigint "floor_id"
    t.bigint "wall_id"
    t.index ["body_id"], name: "index_users_on_body_id"
    t.index ["couch_id"], name: "index_users_on_couch_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["face_id"], name: "index_users_on_face_id"
    t.index ["floor_id"], name: "index_users_on_floor_id"
    t.index ["head_id"], name: "index_users_on_head_id"
    t.index ["lamp_id"], name: "index_users_on_lamp_id"
    t.index ["neck_id"], name: "index_users_on_neck_id"
    t.index ["plant_id"], name: "index_users_on_plant_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["side_table_id"], name: "index_users_on_side_table_id"
    t.index ["table_id"], name: "index_users_on_table_id"
    t.index ["wall_id"], name: "index_users_on_wall_id"
  end

  add_foreign_key "favorites", "items"
  add_foreign_key "favorites", "users"
  add_foreign_key "items", "users"
end
