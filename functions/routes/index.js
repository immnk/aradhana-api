const express = require('express');
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
const serviceAccount = require("../utils/aradhana-api-serviceAccount.json");
const router = express.Router();
const constants = require('../utils/constants');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://aradhana-api.firebaseio.com"
});

const db = admin.database();

router.get('/', (req, res, next) => {
  res.json({
    success: true,
    body: {
      message: "Welcome Mani",
      email: constants.ADMIN_EMAIL
    }
  });
});

router.get("/validate", (req, res, next) => {
  let passkey = req.query.passkey;
  if (!passkey) res.json(returnErrorObject("API error. Please send passkey"));
  return db.ref("/users").orderByChild("password").equalTo(passkey).limitToFirst(1).once("value", (snapshot) => {
    let password = snapshot.val();
    if (password) {
      res.json({
        success: true,
        body: password[0]
      });
    } else res.json(returnErrorObject("Pass key is not valid!"));
  });
});

router.get("/events", (req, res, next) => {
  const userPermission = req.query.permission;
  if (!userPermission) {
    res.json(returnErrorObject("Permission not defined"));
  } else {
    let currentDate = new Date().toUTCString();

    return db.ref('/events').orderByChild('eventDate').startAt(currentDate).once("value", (snapshot) => {
      let events = [];
      snapshot.forEach((child) => {
        let event = child.val();
        if (userPermission === "admin" || event.permission === "all")
          events.push(event);
      });

      res.json({
        success: true,
        body: events
      });
    });
  }
});

function returnErrorObject(errorMessage) {
  return {
    success: false,
    errorMessage: errorMessage
  }
}

module.exports = router;
