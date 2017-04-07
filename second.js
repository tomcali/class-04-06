// In this activity, we are going to create a constructor function 
// called “Programmer”which can be used to create objects containing 
// information on various programmers.

// Your “Programmer” constructor should be able to take in the following information...

// The programmer’s name
// Their position/job title
// How old they are
// Favorite programming language
// Now create a method for the constructor that would print all of the information contained within an object to the console.

// Finally, create a “Programmer” object and call the method to print its contents

var inquirer = require('inquirer');

function Programmer(name, position, age) {
  this.name = name;
  this.position = position;
  this.age = age;
}

Programmer.prototype.printAll = function() {
  console.log(this.name);
  console.log(this.position);
  console.log(this.age);
}

inquirer.prompt ([
  {
  	name: 'name',
  	message: 'what is your name?'
  },{
  	name: 'position',
  	message: 'what is your current position?'
  },{
  	name: 'age',
  	message: 'what is your age?'
  },{
  	name: 'language',
  	message: 'what is your favorite programming language?'
  }
]).then(function(answers){
    console.log('got this far'); // this is what you have to do work
});