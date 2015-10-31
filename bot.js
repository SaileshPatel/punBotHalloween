var TwitterBot = require("node-twitterbot").TwitterBot;

// Include your access information below
var Bot = new TwitterBot({
  "consumer_secret": "consumer_secret",
    "consumer_key": "consumer_key",
    "access_token": "access_token",
    "access_token_secret": "access_token_secret"
  });

var streamAction = new TwitterBotStreamAction(null, Bot)

var witches = "Q: Why don't witches like to ride their brooms when they're angry? \n A: They're afraid of flying off the handle."
var dayscare = "Q: Where do baby ghosts go during the day? \n A: Dayscare centers."
var frankenstein = "Q: Who did Frankenstein take to the prom? \n A: His ghoul friend."
var bone = "Q: What do skeletons say before they begin dining? \n A: Bone appetite!"
var skeleton = "Q: Who won the skeleton beauty contest? \n A: No body."
var romeo = "Q: What's a monster's favorite play? \n A: Romeo and Ghouliet."
var dracula = "Q: How can you tell when you're in bed with Count Dracula? \n A: He has a big D on his pajamas."

var jokes = [witches, dayscare, frankenstein, bone, skeleton, romeo, dracula];

var random = jokes[Math.floor(Math.random()*jokes.length)];

Bot.tweet(random); 