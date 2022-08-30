// 8 kyu - Is the string uppercase?

// Kata
//Create a method to see whether the string is ALL CAPS.

// Example
/*
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
*/

// SOLUTION
String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase()
  }
