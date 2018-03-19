'use strict';
const google = require('googleapis');
const nconf = require('nconf');
const readline = require('readline');
const plus = google.plus('v1');
const path = require('path');
const OAuth2Client = google.auth.OAuth2;

nconf.argv().env().file(path.join(__dirname, '/auth.json'));
const keys = nconf.get('web');
console.log(keys);
// Client ID and client secret are available at
// https://code.google.com/apis/console
const CLIENT_ID = '990776390180-nc395n9bsfffo8cslpq6kojgl8acd1ap.apps.googleusercontent.com';//keys.client_id;
const CLIENT_SECRET = '4leo6PeOSpLXmHyXCqse2peQ';//keys.client_secret;
const REDIRECT_URL = 'http://localhost:3000';//keys.redirect_uris[0];

console.log(CLIENT_ID);

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);


 oauth2Client.getToken('4/AACV70C9-WUezZXwLa3a24PG8d-bmq-onPlRK6m1CEdlSD0Zsv0E5BG_A8qC3QGaCPgoWsWhTZzFLke2JxUkzcA', (err, tokens) => {
      if (err) {
        console.log("mahesh",err);
      }
      console.log("mahesh",tokens);
      // set tokens to the client
      // TODO: tokens should be set by OAuth2 client.
      //oauth2Client.setCredentials(tokens);      
  });


 // Retrieve tokens via token exchange explained above or set them:
oauth2Client.setCredentials({
  refresh_token: '1/Do22UX2-lg10pgKc5fmkfgRE9wH-JxZ8kkBbAxE05As'
  // Optional, provide an expiry_date (milliseconds since the Unix Epoch)
  // expiry_date: (new Date()).getTime() + (1000 * 60 * 60 * 24 * 7)
});

oauth2Client.refreshAccessToken(function(err, tokens) {
  // your access_token is now refreshed and stored in oauth2Client
  // store these new tokens in a safe place (e.g. database)
  console.log(tokens);
});