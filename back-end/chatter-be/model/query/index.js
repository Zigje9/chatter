const userQuery = require('./user');
const logQuery = require('./log');

const query = {
  ...userQuery,
  ...logQuery,
};

module.exports = query;
