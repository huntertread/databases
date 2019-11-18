// controllers depend on models (models depend on the database)

var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      // fetch all messages
      // want to get the id, message text, user name, and roomname
      var queryStr = "SELECT messages.id, messages.room_name, messages.message_text, users.user_name FROM messages \
                      LEFT OUTER JOIN users ON (messages.user_name = users.id) \
                      ORDER by messages.id DESC;";
      db.query(queryStr, (err, results) => {
        callback(results);
      })
    },
    // a function which can be used to insert a message into the database
    post: function (params, callback) {
      // create a message (store a message in the db)
      var queryStr = "INSERT INTO messages(message_text, user_name, room_name) \
                      VALUES (?, (SELECT id FROM users WHERE user_name = ? limit 1), ?);";
      db.query(queryStr, params, (err, results) => {
        callback(results);
      })
    }
  },
  users: {
    // a function which produces all the users
    get: function (callback) {
      // fetch all users
      var queryStr = "SELECT * FROM users;";
      db.query(queryStr, (err, results) => {
        callback(results);
      })
    },
    // a function that can be used to insert a user into the databse
    post: function (params, callback) {
      // create a user (store a user in the db)
      var queryStr = "INSERT INTO users(username) VALUES (?);";
      db.query(queryStr, params, (err, results) => {
        callback(results);
      })
    }
  }
};

