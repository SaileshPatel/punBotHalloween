var TwitterBot = require("node-twitterbot").TwitterBot;

// Include your access information below
var Bot = new TwitterBot({
  "consumer_secret": "Mi5AsPenHJVLZ0bGckYjlvzLE07AZ9nLcKM6rni4JO44UjdVn9",
  "consumer_key": "TMKLbVlzS57xwNJnQSisfh4nQ",
  "access_token": "4082975487-ygJ5i8pFLdP3MbND651LQMvRcEatGyTEXNq41ZI",
  "access_token_secret": "AP0n4xk8UNJppIvn7cXiIwucC2EVCBRRKH1YCItREPrYR"
});


var witches = Bot.tweet("Why don't witches like to ride their brooms when they're angry? \n They're afraid of flying off the handle.");
var dayscare = Bot.tweet("Where do baby ghosts go during the day? \n Dayscare centers.");
var frankenstein = Bot.tweet("Who did Frankenstein take to the prom? \n His ghoul friend.");