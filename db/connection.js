const admin = require("firebase-admin");

process.env.FIREBASE_AUTH_EMULATOR_HOST = "localhost:33007";
process.env['FIREBASE_AUTH_EMULATOR_HOST'] = 'localhost:33007';

let db = admin.initializeApp({
    projectId: 'tndfc-app'  
});

module.exports = db;
