// 8 kyu - String Repeat
// Kata Link: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

// KATA
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

// Solution
function repeatStr(n, s) {
    return s.repeat(n);
}