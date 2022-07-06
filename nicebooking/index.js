    const mysql = require('mysql2');
    module.exports =
         mysql.createConnection({
                host: '127.0.0.1',
                user: 'wp_tralveler_user',
                database: 'wp_tralveler_db',
                port: 8889
            });
