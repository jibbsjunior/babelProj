// const moment = require("moment");

// const day = moment().format("dddd");

// console.log(day);

// const fake = require("faker");

// console.log((fake));

// const cat = require("cat-me");

// console.log(cat());

// const jokes = require("knock-knock-jokes");

// console.log(jokes());

var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log((randomName));



