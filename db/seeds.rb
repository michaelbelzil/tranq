# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(email: "user@email.com", password: "hunter2")
user1.save
user2 = User.create(email: "email@email.com", password: "hunter2")
user2.save
god = User.create(email: "god@heaven.com", password: "hunter2")
god.save
hat1 = Item.create(category: "head", photo: "https://www.freepngimg.com/download/hat/4-hat-png-image.png", user_id: "1")
hat1.save
hat2 = Item.create(category: "head", photo: "http://clipart-library.com/images/8iGb5EB8T.png", user_id: "1")
hat2.save

