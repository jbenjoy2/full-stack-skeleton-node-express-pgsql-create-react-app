// shared config file

const PORT = +process.env.PORT || 3001;

const getDatabaseURI = (dbName) => {
  return process.env.NODE_ENV === "test"
    ? `${dbName}_test`
    : process.env.DATABASE_URL || `${dbName}`;
};
module.exports = {
  getDatabaseURI,
  PORT,
};
