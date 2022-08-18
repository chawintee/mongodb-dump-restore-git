const { exec } = require('child_process');
const dotenv = require('dotenv');
dotenv.config();

const MONGOURI = process.env.BACKUP_URI

const DIRECTORY = "backup3"

//mongodump --uri=uri_name --db database_name --collection collection_name --out ./backupDirectory

//ทุก Database
//mongodump --uri="mongodb://userbk:passbk@localhost:30000/?authSource=admin" --forceTableScan   --out ./backup1
//uri=`mongodb://${userRoot}:${passwordRoot}@localhost:30000/?authSource=admin` => ทุก database ใน instant นี้

//เฉพาะ Database ที่เราอยากได้
//mongodump --uri="mongodb://userbk:passbk@localhost:30000/Music?authSource=admin&authMechanism=SCRAM-SHA-1" --forceTableScan  --out ./backup2
//uri=`mongodb://${userRoot}:${passwordRoot}@${host}:${port}/${Database}?authSource=admin&authMechanism=SCRAM-SHA-1"` => เฉพาะ Database ที่เราใส่ไป ใน instant นั้น

const backupScript = `mongodump --uri=${MONGOURI} --out ./${DIRECTORY}`

const mongoProcess = exec(`${backupScript}`)

mongoProcess.stdout.on('data', (data) => {
    console.log('stdout', data);
})

mongoProcess.stderr.on('data', (data) => {
    console.log('stderr', data);
})

mongoProcess.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
})