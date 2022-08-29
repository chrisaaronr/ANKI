// 8kyu - Convert a String to an Array
// Link: https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript

// Kata
// Write a function to split a string and convert it into an array of words.

// Example
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// Solution
function stringToArray(string) {
    return string.split(' ');
};