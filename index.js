'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'World Facts';

/**
 * Array containing world facts.
 */
var FACTS = [
    "Tropical Islands are the most popular vacation destinations.",
    "Vacations can help improve your problem-solving skills.",
    "Taking a vacation can lower your risk of heart disease.",
    "Honolulu is the only place in the U.S. that has a royal palace.",
    "France covers the most time zones. There are 12 time zones in France.",
    "Highest point of Maldives is 5 meters above sea level.",
    "Libya is 99% desert.",
    "Singapore is the largest country with no farms.",
    "Papua New Ginea has the largest number of spoken languages.",
    "Bali has the most number of temples in Indonesia.",
    "Guam has roads made of coral",
    "Canada has the most lakes in the world.",
    "The salt flats in Bolivia become a natural mirror during monsoon",
    "The Bahamas is one of the most popular destinations for U.S. residents to visit in the Caribbean.",
    "Champagne is less than 100 miles away from Paris.",
    "Times Square is the most visited tourist attraction in the world.",
    "Mexico City is sinking at an average rate of 10cm a year, 10 times faster than Venice.",
    "London’s Metropolitan Railway was the world’s first subway.",
    "Hawaii is the most popular post wedding vacation destination in the United States.",
    "The crabs in Fiji can climb trees.",
    "Cuba is the only Caribbean island with a railway.",
    "Less than 1 percent of the Caribbean islands are inhabited.",
    "The Shortest place name is ‘Å’ it is located in both Sweden and Norway.",
    "Of the 25 highest peaks of the world, 19 are in the Himalayas.",
    "The Trans-Siberian railway crosses exactly 3901 bridges.",
    "Soft, lightweight, absorbent, and quick drying fabric is the best for tropical climates.",
    "Nauru is the only state in the world that has no official capital.",
    "It is best to carry a sarong when visiting temples in Bali.",
    "Several buildings in Manhattan have their own zip code.",
    "There are no rivers In Saudi Arabia.",
    "Lebanon is the only state in the Middle East in which there is no desert.",
    "Unlike most African nations, Ethiopia has been never a European colony.",
    "France, Italy and Chile have formally recognized the existence of UFOs.",
    "Best time to go on Caribbean cruise is January.",
    "March is an ideal month to be in Hawaii.",
    "April is the best time to hike Peru's sacred valley.",
    "More than half of the coastline of the entire United States is in Alaska.",
    "The Great Barrier Reef is experiencing coral bleaching due to rising sea temperatures."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random Vacation fact from the vacation facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a vacation fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
