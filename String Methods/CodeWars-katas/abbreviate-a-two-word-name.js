// 8 kyu - Abbreviate a Two Word Name
  
// Kata
/* Write a function to convert a name into initials.
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot seperating them.
I
t should look like this:
    
Sam Harris => S.H    
Patrick Feeney => P.F
  
*/

// Solution
function abbrevName(name) {

    const [firstName, lastName] = name.split(' ')
    const firstInitial = firstName.charAt(0).toUpperCase()
    const secondInitial = lastName.charAt(0).toUpperCase()
    return firstInitial + '.' + secondInitial

}