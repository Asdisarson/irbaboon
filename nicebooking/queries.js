var sql = require('./index.js');
var prefix = "wp";1
module.exports = {
    insertPosts: function (post) {
        var table = prefix + "_posts"
        var ID = post.id, post_author = 1, post_date = "", post_date_gmt = "", post_content = "", post_title = "",
            post_excerpt = "", post_status = ""
            , comment_status = "", ping_status = "", post_password = "", post_name = "", to_ping = "", pinged = "",
            post_modified_gmt = ""
            , post_content_filtered = "", post_parent = "", guid = "", menu_order = "", post_types = "",
            post_mime_type = "", comment_count = ""
        var sql = "INSERT INTO table (ID, post_author, post_date,post_date_gmt,post_content,post_title,post_excerpt,post_status,comment_status,ping_status,post_password,post_name,to_ping,pinged,post_modified_gmt,post_content_filtered,post_parent,guid,menu_order,post_types,post_mime_type,comment_count) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        sql.query(sql, [ID, post_author, post_date,post_date_gmt,post_content,post_title,post_excerpt,post_status,comment_status,ping_status,post_password,post_name,to_ping,pinged,post_modified_gmt,post_content_filtered,post_parent,guid,menu_order,post_types,post_mime_type,comment_count], function (err, result) {

        })
    },
    insertPostMeta: function (post) {
        var table = prefix + "_st_location_relationships"
        var meta_id = "", post_id = 1, meta_key = "", meta_value = ""
        var sql = "INSERT INTO table (id, post_id, meta_key, meta_value) VALUES (?,?,?,?)";
        sql.query(sql, [meta_id, post_id, meta_key, meta_value], function (err, result) {

        })
    },
    insertLocationNested: function (post) {
        var table = prefix + "_st_location_nested"
        var id = "", location_id = 1, location_country = "", parent_id = "", left_key = "", right_key = "",
            name = "", fullname = ""
            , language = "", status = ""
        var sql = "INSERT INTO table (id, location_id, location_country,parent_id,left_key,right_key,name,fullname,language,status) VALUES (?,?,?,?,?,?,?,?)";
        sql.query(sql, [id, location_id, location_country,parent_id,left_key,right_key,name,fullname,language,status], function (err, result) {

        })
    },
    insertLocationRelationships: function (post) {
        var table = prefix + "_st_location_relationships"
        var id = "", post_id = 1, location_from = "", location_to = "", post_type = "", location_type = ""
        var sql = "INSERT INTO table (id, post_id, location_from, location_to, post_type, location_type) VALUES (?,?,?,?,?,?)";
        sql.query(sql, [id, post_id, location_from, location_to, post_type, location_type], function (err, result) {

        })
    },
    insertHotel: function (post) {
        var table = prefix + "_st_hotel"
        var post_id = post.id, multi_location = 1, id_location = "", address = "", allow_full_day = "", rate_review = "",
            hotel_star = "", price_avg = ""
            , price_min = "", hotel_booking_period = "", map_lat = "", map_lng = "", is_sale_schedule = "", post_origin = "",
            is_featured = ""
        var sql = "INSERT INTO table (post_id, multi_location, id_location,address,allow_full_day,rate_review,hotel_star,price_avg,price_min,hotel_booking_period, map_lat,map_lng,is_sale_schedule,post_origin,is_featured) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        sql.query(sql, [post_id, multi_location, id_location,address,allow_full_day,rate_review,hotel_star,price_avg,price_min,hotel_booking_period, map_lat,map_lng,is_sale_schedule,post_origin,is_featured], function (err, result) {

        })
    },
    insertHotelRoom: function (post) {
        var table = prefix + "_hotel_room"
        var post_id = post.id, room_parent = "", multi_location = "", id_location = "", address = "", allow_full_day = "",
            price = "", number_room = ""
            , discount_rate = "", adult_number = "", child_number = "", status = "", adult_price = "", child_price = ""
        var sql = "INSERT INTO table (post_id, room_parent, multi_location,id_location,address,allow_full_day,price,number_room,discount_rate,adult_number,child_number,status,adult_price,child_price) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        sql.query(sql, [post_id, room_parent, multi_location,id_location,address,allow_full_day,price,number_room,discount_rate,adult_number,child_number,status,adult_price,child_price], function (err, result) {

        })
    }
}