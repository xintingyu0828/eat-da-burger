// Import Node Dependencies
var connection = require('./connection.js');


// Connect to MySQL database
connection.connect(function(err) {
  if (err) {
    console.error('error connecting' );
    return;
  };
  console.log('connected as id ');
});

// I still have no logic to make the ORM and i am just trying to put what I have here so far




// Export the ORM object in module.exports.
module.exports = orm;