let client = require('../dbConnection');

let collection = client.db().collection('Fandoms');

function postFandom(fandom, callback) {
    collection.insertOne(fandom,callback);
}

function getAllFandoms(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postFandom,getAllFandoms}