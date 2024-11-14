const prompt = require('prompt-sync')();
// const username = prompt('What is your name?')
// console.log(`Your name is ${username}`);
const welcome = Number(prompt(`
    Welcome to the CRM

What would you like to do?

  1. Create a customer
  2. View all customers
  3. Update a customer
  4. Delete a customer
  5. quit

Number of action to run? 
`));
switch (welcome) { //Asked chat for a way to choose numbers in prompt sync
    case 1:
        console.log('Creating a customer');
        break;
    case 2:
        console.log('View all customers');
        break;
    case 3:
        console.log('Update a customer');
        break;
    case 4:
        console.log('Delete a customer');
        break;
    case 5:
        console.log('Have a good day!');
        break;
}

// const todoData = {
//     name: 'Nate',
//     age: 30,
// }



const dotenv = require('dotenv');
dotenv.config()
const mongoose = require('mongoose');
const Customer = require('./models/customer.js')
// console.log(process.env.MONGODB_URI);

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI)
    // console.log('Conencted to MongoDB');
    
    
}
connect()