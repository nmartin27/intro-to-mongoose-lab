const prompt = require('prompt-sync')();
// const username = prompt('What is your name?')
const welcome = prompt('Welcome to the CRM')
// console.log(`Your name is ${username}`);

const dotenv = require('dotenv');
dotenv.config()
const mongoose = require('mongoose');
// console.log(process.env.MONGODB_URI);
