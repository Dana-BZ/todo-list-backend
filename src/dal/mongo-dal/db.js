const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGO_CONNECTION_STRING;
const dbName = process.env.MONGO_DATABASE_NAME;

// main db connection
const client = new MongoClient(url);

client.connect();

const getDb = () => {
    const db = client.db(dbName);
    return db;
};

module.exports = getDb;