'use strict';

/* LAB 1: A Trip to Woodland Park Zoo

 Welcome to Lab 1 =)

 Be sure to read all the comments!

 All of the instructions are inline with the assignment below. Look for the
 word TODO in comments.  Each TODO will have a description of what is
 required.

 To run this file, type the following (in the terminal):

    node lab1.js

 and then press enter/return.

 Instructions for turning this lab in are in the assignment description in
 Canvas.

 I'm happy to answer any questions on Slack.

*/

/* ----------------- Helper ------------------------------------------------
 We've implemented a function that will help you sanity-check your code.
*/

function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure:' + failureMessage);
  }
}

/*
 An assertion is something we expect to be true about the state of the
 program at the point where the assertion is made.

 Remember, state is all the variables that we've declared and their current
 values.

 Here are some examples for how to use the assert method:
*/
//assert(1 === 1, '1 equals 1 - this assert will pass.');
//assert(1 === 2, 'this is an example of a failing assertion. 1 does not equal 2.');
/* ===========================================================================
------------------Assertions (8 points total)---------------------------------
==============================================================================
 TODO: Invoke assert twice (4 points each).
 (In other words, create two assertions like the ones
 above.)
 Use any boolean expressions that you like, but preferably
 zoo-themed.  Make one pass and one fail. In the failure message, describe why
 it failed.
*/
var numTigerLegs = 4;
var numElephentLegs = 2;
assert(numTigerLegs === 4, 'tiger has 4 legs');
assert(numElephentLegs === 4, 'elephant has 4 legs');
//your code goes here
/* ========================================================================
----------------- Meerkats (20 points total)-------------------------------
===========================================================================
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research).  We're going to translate two sentences into meerkat speech.
*/
var sentence1 = 'More food please.';
var sentence2 = 'Come over here so you can scratch my belly.';
/*
 Your goal is to replace the words in the above sentences with 'chirp' The
 assertions at the end of this section should pass when you're done.
 HINT: the 'split' method on String will be useful.
*/

// TODO: part #1: use a for loop to replace the words in sentence 1 with
// 'chirp' (10 points)

// your code goes here
var splitSentence1 = sentence1.split(/[ .]/);
for (var i = 0; i < splitSentence1.length - 1; i++) {
  sentence1 = sentence1.replace(splitSentence1[i], 'chirp');
}

// TODO: part #2: use a while or do-while loop to replace the words in sentence 2
// with 'chirp' (10 points)

// your code goes here
var splitSentence2 = sentence2.split(/[ .]/);

var i = 0;
while (i < splitSentence2.length - 1) {
  sentence2 = sentence2.replace(splitSentence2[i], 'chirp');
  i++;
}

// Leave these assertions as-is! If they pass, your code works.
assert(sentence1 === 'chirp chirp chirp.', 'sentence 1 should have 3 chirps');
assert(sentence2 === 'chirp chirp chirp chirp chirp chirp chirp chirp chirp.', 'sentence 2 should have 9 chirps');

/* ========================================================================
----------------- Favorite Animals (12 points)-----------------------------
===========================================================================
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next.
 Hint: read the Math.random description on MDN.
*/
// TODO: 12 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

// your code goes here
var favoriteAnimals = ['elephant', 'penguin', 'eagle', 'camel'];
var nextAnimal = favoriteAnimals[Math.floor(Math.random() * favoriteAnimals.length)];
assert(nextAnimal, 'assign something to nextAnimal');

/* ===================================================================
----------------- Hungry Lion (20 points) ----------------------------
======================================================================
 As long as the lion is well-fed, he doesn't take too much heed of the
 humans that pass through. Unfortunately, the new caretaker is a little
 absent minded.

 The lion needs 4 meals per day on average to stay happy.
 You're going to figure out how many days it took before the lion decided to supplement his
 diet with the caretaker.
*/
// number of times the new caretaker fed the lion. one array entry per day
/*
 TODO: 20 points
 Cycle through the days in mealsPerDay. At each day, print out the average
 number of meals/day the lion got since the new caretaker started.
 tooHungryDay should receive the number of days before the lion started
 pondering protein supplements (the first day the average dips below 4
 meals)
*/
var tooHungryDay = 0;
var mealsPerDay = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1];

for (var i = 0; i < mealsPerDay.length; i++) {

  var sum = 0;
  for (var c = 0; c <= i; c++) {
    sum = sum + mealsPerDay[c];
  }
  var avg = (sum) / (i + 1);
  if (avg < 4) {
    tooHungryDay = i;
    break;
  }
}
console.log(tooHungryDay);

assert(tooHungryDay, 'remember to assign the answer to tooHungryDay');
assert(tooHungryDay < 10, 'the lion is too hungry before the end of the array');
/* ==================================================================
----------------- Code Style (10 points) ----------------------------
=====================================================================
 TODO: 10 points (5 points each for passing jshint and jscs)
 Now, we're going to use two tools: jshint and jscs, to check our code for
 best-practices and style consistency.

 If you haven't already, run this command in the terminal (inside of this
 directory): npm install

 Now, type
  grunt
   and it will run both jshint and jscs on your code.

 Error and warning descriptions will be printed in the terminal.
 To get full points, correct all of the errors/warnings.
*/
