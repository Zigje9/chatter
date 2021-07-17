const userQuery = require('./user');
const logQuery = require('./log');
const privateQuery = require('./private');

const query = {
  ...userQuery,
  ...logQuery,
  ...privateQuery,
};

module.exports = query;
