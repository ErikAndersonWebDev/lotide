# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @erikandersonwebdev/lotide`

**Require it:**

`const _ = require('erikandersonwebdev/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*'assertArraysEqual()' : Aserts that two arrays are equal.

*'assertEqual()' : Asserts that two values are equal.

*'assertObjectsEqual()' : Asserts that two objects are equal.

*'countLetters()' : Counts the number of letters in a string, skipping over spaces.

*'countOnly()' : Counts the number of desired items and returns an object of those items with their counts.

*'eqArrays()' : Compares two arrays to see if they are equal.

*'eqObjects()' : Compares two objects to see if they are equal.

*'findkey()' : Finds a specific key in an object.

*'findKeyByValue()' : Find a specific key in an object when given the value pair.

*'flatten()' : Flattens nested arrays to become a single array of values.

*'head()' : Return the first value of an array.

*'letterPositions()' : Returns a list of positions that letters appear in a string.

*'map()' : Returns a new array based on the results of mapping over an array with a callback function.

*'middle()' : Returns the middle values(s) of an array.

*'tail()' : Returns the last value of an array.

*'takeUntil()' : Returns part of an array, starting from the beginning, and goes until the callback returns a truthy value.

*'without()' : Returns part of an array, leaving out the unwanted items.