# .length -- Finding the length of the string

The most important string method and the most commonly used one.  Calling `.length` on a string will return the number of character(s) that the string contains.

```
const str = "this string has 29 characters";
console.log(str.length) // 29
```

# .trim() -- Removing white space
The `trim()` function removes white space from the beginning and end of a string.  Using this most often when processing the string of a user input field.


```
const str = '    the secret to life is 42    ';
console.log(str.trim()) // "the secret to life is 42"
```

# .includes() — Determine if string contains substring
The `includes()` function determines if a substring is contained in a larger string and returns `true` or `false`. This has many applications, but one common use-case is for string matching for searching/parsing.

```
const author = 'George Orwell';
const userSearchTerm1 = 'George';
const userSearchterm2 = 'Douglas';

console.log(author.includes(userSearchTerm1)); // true
console.log(author.includes(userSearchTerm2)); // false
```

# .indexOf() -- Finding the index of a substring
Before `includes()` was introduced to the JavaScript spec, `indexOf()` was the primary way you would check if a substring existed in a string. It is likely you will still see code that uses `indexOf`, so understanding how it works is important. The function returns the index of the substring within the string. If the substring is not contained in the original string, it will return -1.

```
const author = 'George Orwell';
const userSearchTerm1 = 'George';
const userSearchterm2 = 'Douglas';

console.log(author.indexOf(userSearchTerm1)); // 7
console.log(author.indexOf(userSearchTerm2)); // -1
```

The common pattern for `indexOf()` which mimics the behavior of `includes()` by checking if the index is greater than -1:
```
const author = 'George Orwell';
const userSearchTerm1 = 'Orwell';
const stringIncludesSubstring = author.indexOf(userSearchTerm) > -1; // true

if (stringIncludesSubstring) {
    console.log("We found a matching author");
}
```

# .toUpperCase() - Capitalizes entire string
The `toUpperCase()` function returns a string with all upper case letters.

```
const str = 'we are some small letters that want to be big';
console.log(str.toUpperCase()); // "WE ARE SOME SMALL LETTERS THAT WANT TO BE BIG"
```

# .toLowerCase() -- Lower cases entire string
The `toLowercase()` fuction returns a string with all lower case letters.

```
const str = 'this has BIG LETTERS. They want to all be small';
console.log(str.toLowerCase()); // "this has big letters.  they want to all be small"
```

# .replace() -- Replaces strings with new values
The `replace()` function is called on a string and will return a string with a `pattern` replaced by a replacement string. It takes either a regex or a string as the `pattern`. With a regex you can globally replace all matches (using the `g` option), but with a string it will only replace the first occurrence. In the example below, you will notice that `world` is replaced only once in the first call since it uses a string pattern.

```
const str = 'Hello world! My name is also world. How funny.;
const stringPattern = 'world';
const regexPattern = /world/gi;
const replacement = 'gitconnected';

console.log(str.replace(stringPattern, replacement));
// "Hello gitconnected!  My name is also world. How funny."

console.log(str.replace(regexPattern, replacement));
// "Hello gitconnected! My name is also gitconnected. How funny."
```
# .slice() -- Return a section of a string
The `slice()` method will extract a section of a string based on the index supplied and return it as a new string. This is useful when you know the structure of a string and want to retrieve a certain portion, or it can be used with the `indexOf` method where you can find the index of the first occurcenf a substring and use that as a reference point for slicing.

```
const str1 = 'User input: Hello there friends!';
console.log(str1.slice(12)); // "Hello there friends!"

const str2 = 'Random characters fjfjdkfsdf posted by-gitconnected';
const usernamePrefixIndex = str.indexOf('-') + 1; // Account for character itself with +1
const username = str2.slice(usernamePrefixIndex);
console.log(username); // "gitconnected"
```

`slice()` takes the beginning index as the first parameter and an optional ending index as the second parameter -- `str.slice(beginIndex[, endIndex])`.
If no ending index is supplied, it slices to the end of the string starting with your `beginIndex`.  if a negative `beginIndex` is used, it will slice backwards from the end of the string.

```
var str = 'the quick red fox jumped over the lazy dog\'s back.';

console.log(str.slice(30));
// "the lazy dog's back."

console log(str.slice(4, 17));
// "quick red fox"

console.log(str.slice(-5));
// "back."

console.log(str.slice(-11, -6));
// "dog's"
```

# .split() -- Converts string into an array of strings
The `split()` method takes a `separator` which you want to split apart the string on, and it returns an array of strings.  This is useful when you know your string uses a certain character to separate data, or if you want to operate on specific substrings individually.

```
const str = 'The quick brown fox jumped over the lazy dog.`'
const words = str.split(' ');
const wordCount = words.length;

console.log(words); // ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog."]
console.log(wordCount); // 9
```

# .repeat() -- Repeats a string a specified number of times
The `repeat()` function returns a string consisting of the elements of the object repeated the given number of times.

```
const str = "Hello World. ";
console.log(str.repeat(3)); // "Hello World. Hello World. Hello World. "
```

# .match() - Returns array of matching strings
The `match()` method retrieves the matches when matching a `string` against a `regular expression`. The example below searches our string for all capital letters. It returns an array of strings for the values that match the regex.

```
let paragraph = 'The quick brown fox jumped over the lazy dog. It barked.';
let regex = /[A-Z]/g;
let found = paragraph.match(regex);

console.log(found); // Array ["T", "I"]
```
# .charAt() - Returns the character at an index
The `charAt()` function returns the string character at a given index.

```
const str = "Hello World";
console.log(str.charAt(0)); // "H"
console.log(str.charAt(8)); // "r"
```

# .charCodeAt() -- Return the unicode at an index

The `charCodeAt()` method returns the unicode of the character at a specified index in a character.  This is an UTF-16 cone integer between 0 and 65535.

```
const str = "Hello World =)";
console.log(str.charCodeAt(0)); // 72
console.log(str.charCodeAt(8)); // 114
```
