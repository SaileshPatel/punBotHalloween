var keys = require("keys.js");

var TwitterBot = require("node-twitterbot").TwitterBot;

// Include your access information below
var Bot = new TwitterBot({
    "consumer_secret": keys.consumerSecret,
    "consumer_key": keys.consumerKey,
    "access_token": keys.accessToken,
    "access_token_secret": keys.accessSecret
  });

var witches = "Q: Why don't witches like to ride their brooms when they're angry? \nA: They're afraid of flying off the handle."
var dayscare = "Q: Where do baby ghosts go during the day? \nA: Dayscare centers."
var frankenstein = "Q: Who did Frankenstein take to the prom? \nA: His ghoul friend."
var bone = "Q: What do skeletons say before they begin dining? \nA: Bone appetite!"
var skeleton = "Q: Who won the skeleton beauty contest? \nA: No body."
var romeo = "Q: What's a monster's favorite play? \nA: Romeo and Ghouliet."
var dracula = "Q: How can you tell when you're in bed with Count Dracula? \nA: He has a big D on his pajamas."

var jokes = [witches, dayscare, frankenstein, bone, skeleton, romeo, dracula];

var random = jokes[Math.floor(Math.random()*jokes.length)];

// Create an action called 'tweet' associated with some function
Bot.addAction("tweet", function(twitter, action, tweet) {
  // Within the action 'tweet', tell the Bot to create a tweet
  Bot.tweet(random);
});

Bot.now("tweet"); 
