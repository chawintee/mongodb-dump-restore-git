const { exec } = require('child_process');
const dotenv = require('dotenv');
dotenv.config();

const MONGOURI = process.env.RESTORE_URI

const DATABASE = process.env.DATABASE
const RESTORE_DIRECTORY_PATH = "./backup3/Music"
// const COLLECTION = "Album"
const COLLECTION = "Artist"

//mongodump --uri=uri_name --db database_name --collection collection_name --out ./backupDirectory
//ทุก Database
//mongorestore --nsInclude="Music"."Album" --uri="mongodb://userre:passre@localhost:30001/?authSource=admin" --drop ./backup3/Music/Album.bson
const restoreScript = `mongorestore --nsInclude=${DATABASE}.${COLLECTION} --uri=${MONGOURI} --drop ${RESTORE_DIRECTORY_PATH}/${COLLECTION}.bson`

const mongoProcess = exec(`${restoreScript}`)

mongoProcess.stdout.on('data', (data) => {
    console.log('stdout', data);
})

mongoProcess.stderr.on('data', (data) => {
    console.log('stderr', data);
})

mongoProcess.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
})