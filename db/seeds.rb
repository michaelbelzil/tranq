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
body1 = Item.create(category: "body", photo: "http://clipart-library.com/data_images/541439.png", user_id: "3")
body1.save
plant1 = Item.create(category: "plant", photo: "http://clipart-library.com/images/gie57jLeT.jpg" , user_id: "3")
plant1.save
plant2 = Item.create(cateogory: "plant", photo: "http://clipart-library.com/images/8izrpG9LT.png", user_id: "3")

couch1 = Item.create(category: "couch", photo: "http://pngimg.com/uploads/sofa/sofa_PNG6933.png", user_id: "1")
couch1.save
couch2 = Item.create(category: "couch", photo: "http://www.pngall.com/wp-content/uploads/2016/04/Couch-Download-PNG.png", user_id: "1")
couch2.save
table1 = Item.create(category: "table", photo: "http://pngimg.com/uploads/table/table_PNG6998.png", user_id: "1")
table1.save
table2 = Item.create(category: "table", photo: "http://www.pngall.com/wp-content/uploads/2016/04/Table-Download-PNG.png", user_id: "1")
table2.save
side_table1 = Item.create(category: "side_table", photo: "https://png.pngtree.com/element_pic/17/01/01/0c5d9c3a9b896566d78ba5362320977f.jpg", user_id: "1")
side_table1.save
side_table2 = Item.create(category: "side_table", photo: "http://mudanzascompartidas.info/wp-content/uploads/2015/12/paraguero.png", user_id: "1")
side_table2.save
lamp1 = Item.create(category: "lamp", photo: "https://vignette.wikia.nocookie.net/warehouse13/images/4/47/Leg_Lamp.PNG/revision/latest?cb=20131021194904", user_id: "1")
lamp1.save
lamp2 = Item.create(category: "lamp", photo: "https://images.vexels.com/media/users/3/127183/isolated/preview/3c38623c01ddc3ad951a134e46d15f6b-blue-flat-lamp-stand-by-vexels.png", user_id: "1")
lamp2.save
