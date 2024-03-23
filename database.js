const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json')

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
let db, scoreCollection;

async function connectDB() {
    await client.connect();
    console.log("Connected successfully to MongoDB server");
    db = client.db('landminegame');
    scoreCollection = db.collection('scores');
}

function getScoresCollection() {
    return scoreCollection;
}

module.exports = { connectDB, getScoresCollection };