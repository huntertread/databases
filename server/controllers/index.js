// controllers depend on models (models depend on the database)
// controller methods map directly to the model methods

var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) {
          console.log(err); // maybe do something different with this error?
        } else {
          res.json(results);
        }
      })
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      // params are passed into the SQL query in the models.js instances where a '?' appears
      var params = [ req.body[message_text], req.body[user_name], req.body[room_name] ];
      models.messages.post(params, function(err, results) {
        if (err) {
          console.log(err); // maybe do something different with this error?
        } else {
          res.json(results);
        }
      })
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) {
          console.log(err); // maybe do something different with this error?
        } else {
          res.json(results);
        }
      })
    },
    post: function (req, res) {
      // params are passed into the SQL query in the models.js instances where a '?' appears
      var params = [ req.body[user_name] ];
      models.users.post(params, function(err, results) {
        if (err) {
          console.log(err); // maybe do something different with this error?
        } else {
          res.json(results);
        }
      })
    }
  }
};

