var TwitterBot = require("node-twitterbot").TwitterBot;

// Include your access information below
var Bot = new TwitterBot({
  "consumer_secret": "consumer_secret",
    "consumer_key": "consumer_key",
    "access_token": "access_token",
    "access_token_secret": "access_token_secret"
  });


var witches = Bot.tweet("Why don't witches like to ride their brooms when they're angry? \n They're afraid of flying off the handle.");
var dayscare = Bot.tweet("Where do baby ghosts go during the day? \n Dayscare centers.");
var frankenstein = Bot.tweet("Who did Frankenstein take to the prom? \n His ghoul friend.");