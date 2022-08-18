const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://userbk:passbk@localhost:30000/admin';
const client = new MongoClient(url);


async function createDB() {
    // console.log("create db", client);
    const responseCreateCollectionArtist = await client.db('Music').collection('Artist').insertMany([{adele:0}, {anne:1}])
    const responseCreateCollectionAlbum = await client.db('Music').collection('Album').insertMany([{adele:19}, {adele:25}, {adele:30}])
    console.log({responseCreateCollectionArtist,responseCreateCollectionAlbum});
    return "create done!!!"
}


createDB()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
