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

head1 = Item.create(category: "head", photo: "data:image/png;base64,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", user_id: "1")
head1.save
head2 = Item.create(category: "head", photo: "http://www.pngmart.com/files/6/Hat-PNG-Clipart-383x279.png", user_id: "1")
head2.save
face1 = Item.create(category: "face", photo: "http://pngimg.com/uploads/beard/beard_PNG55121.png", user_id: "1")
face1.save
face2 = Item.create(category: "face", photo: "https://vignette.wikia.nocookie.net/zelda/images/9/9e/Careta_de_la_Luna_MM.png/revision/latest?cb=20110220030102&path-prefix=es", user_id: "1")
face2.save
neck1 = Item.create(category: "neck", photo: "https://toppng.com/public/uploads/preview/red-scarf-11530963189hbg2ctif4k.png", user_id: "1")
neck1.save
neck2 = Item.create(category: "neck", photo: "https://vignette.wikia.nocookie.net/roblox/images/b/bb/Snowman_Scarf.png/revision/latest?cb=20170212230925", user_id: "1")
neck2.save
body1 = Item.create(category: "body", photo: "http://clipart-library.com/data_images/541439.png", user_id: "3")
body1 = Item.create(category: "body", photo: "https://ya-market.org/sites/default/files/storage_public/node/ogmk_product/ogmk_image/01t.SAM_7577-amaru-network-alpaca-undyed-poncho_0.png", user_id: "3")
body1.save
plant1 = Item.create(category: "plant", photo: "http://clipart-library.com/images/gie57jLeT.jpg" , user_id: "3")
plant1.save
plant2 = Item.create(category: "plant", photo: "http://clipart-library.com/images/8izrpG9LT.png", user_id: "3")
plant2.save
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
window1 = Item.create(category: "window", photo: "https://vignette.wikia.nocookie.net/warehouse13/images/4/47/Leg_Lamp.PNG/revision/latest?cb=20131021194904", user_id: "1")
window1.save
window2 = Item.create(category: "window", photo: "https://images.vexels.com/media/users/3/127183/isolated/preview/3c38623c01ddc3ad951a134e46d15f6b-blue-flat-lamp-stand-by-vexels.png", user_id: "1")
window2.save

categories = ["head", "face", "neck", "body", "plant", "couch", "table", "side_table", "window"]
categories.each do |category|
  blank = Item.create(category: category, owner: "public", photo: "data:image/png;base64,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", user_id: "1")
  blank.save
end

