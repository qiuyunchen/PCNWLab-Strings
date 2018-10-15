/*
 *  README!!!
 *  For the problems below, use only string methods / conditionals, etc
 *  it may be tempting to use concepts like looping but do not attempt! 
 */
 
 
/* 1
    @func makeEven
    @param {string} str
    @returns {string}
    @desc - if the input string is odd number of characters, 
            add a "#" to make it even number of characters
            otherwise return string
    @example - makeEven('taq');  // 'taq#'
    @example - makeEven('john'); // 'john'
*/
const makeEven = str => (str.length % 2 === 1) ? str + "#" : str;

//test

console.log('----------------------');
console.log(makeEven("taq"), "taq#");
console.log(makeEven("john"), "john");
console.log(makeEven("kitty"), "kitty#");
console.log(makeEven("hell"), "hell");
console.log('----------------------');
/* 2
    @func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
    @example - getLastChar('taq'); // 'q'
*/
const getLastChar = str => str[str.length-1];

//test
console.log(getLastChar('taq'), 'q');
console.log(getLastChar('qiu'), 'u');
console.log(getLastChar('woohoo'), 'o');
console.log('----------------------');
/* 3
    @func get3rdChar
    @param {string} str
    @returns {string}
    @desc - return the third character in string
    @example - get3rdChar('taq'); // 'q'
    @example - get3rdChar('mo'); // 'not enough characters!'
*/

const get3rdChar = str => {
    if (str.length < 3) return 'not enough characters!';
    return str[2];
}

//test
console.log(get3rdChar('taq'), 'q');
console.log(get3rdChar('maria'), 'r');
console.log(get3rdChar('mo'), 'not enough characters!');
console.log('----------------------');
/* 4
    @func get3rdCharFromEnd
    @param {string} str
    @returns {string}
    @desc - return the third character _FROM THE END_ in string
    @example - get3rdCharFromEnd('taq'); // 't'
    @example - get3rdCharFromEnd('mo'); // 'not enough characters!'
    @example - get3rdCharFromEnd('taq karim'); // 'r'
*/

const get3rdCharFromEnd = str => (str.length > 2) ? str[str.length-3] : 'not enough characters!';

//test
console.log(get3rdCharFromEnd('taq'), 't');
console.log(get3rdCharFromEnd('mo'), 'not enough characters!');
console.log(get3rdCharFromEnd('taq karim'), 'r');
console.log('----------------------');
/* 5
    @func startsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string STARTS with vowel, return true
    @example - startsWithVowel('taq'); // false
    @example - startsWithVowel('Dfghjkl'); // false
    @example - startsWithVowel('andy'); // true
    @example - startsWithVowel('Andy'); // true
*/

const startsWithVowel = str => {
    str = str.toLowerCase();
    if ( str[0] === "a" ||
    str[0] === "e" ||
    str[0] === "i" ||
    str[0] === "o" ||
    str[0] === "u" ){
        return true;
    }
    return false;
}

//test
console.log(startsWithVowel('taq'), false);
console.log(startsWithVowel('Dfghjkl'), false);
console.log(startsWithVowel('andy'), true);
console.log(startsWithVowel('Andy'), true);
console.log(startsWithVowel('hey'), false);
console.log('----------------------');

/* 6
    @func endsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string ENDS with vowel, return true
    @example - endsWithVowel('taq'); // false
    @example - endsWithVowel('Dfghjkl'); // false
    @example - endsWithVowel('andi'); // true
    @example - endsWithVowel('AndI'); // true
*/

const endsWithVowel = str => {
    str = str.toLowerCase();
    if (str[str.length-1] === 'a' ||
    str[str.length-1] === 'e' ||
    str[str.length-1] === 'i' ||
    str[str.length-1] === 'o' ||
    str[str.length-1] === 'u' ){
        return true;
    }
    return false;
} 

//test
console.log(endsWithVowel('taq'), false);
console.log(endsWithVowel('Dfghjkl'), false);
console.log(endsWithVowel('andi'), true);
console.log(endsWithVowel('AndI'), true);
console.log(endsWithVowel('Maria'), true);

/* 7
    @func hasVowels
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one vowel, return true
    @example - hasVowels('taq'); // true
    @example - hasVowels('TAQ'); // true
    @example - hasVowels('dfghjkl'); // false
    @example - hasVowels('taq karim'); // true
*/

const hasVowels = str => { 
    if (str === undefined) return "undefined";
    if (str.length === 1) return startsWithVowel(str);
    if (startsWithVowel(str) === true) return true;
    str = str.slice(1);
    return hasVowels(str);
}

//test
console.log('----------------------');
console.log(hasVowels(), 'undefined');
console.log(hasVowels('a'), true);
console.log(hasVowels('b'), false);
console.log(hasVowels('BC'), false);
console.log(hasVowels('Qiu'), true);
console.log(hasVowels('taq'), true);
console.log(hasVowels('TAQ'), true);
console.log(hasVowels('dfghjkl'), false);
console.log(hasVowels('taq karim'), true);
console.log('----------------------');

/* 8
    @func hasUpperCase
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one uppercase letter, return true
    @example - hasUpperCase('tAq'); // true
    @example - hasUpperCase('TAQ'); // true
    @example - hasUpperCase('tag'); // false
    @example - hasUpperCase('taq karim'); // false
*/

// I glimpsed at Robert's solution for this one...
// Damn it, why didn't I think of this?!!!
// I was dumbly trying to compare each string letter to each upper case letter -_-

const hasUpperCase = str => {
    if (str === undefined) return "undefined";
    return str !== str.toLowerCase() ? true : false;
}

//test
console.log(hasUpperCase(), "undefined");
console.log(hasUpperCase('tAq'), true);
console.log(hasUpperCase('Q'), true);
console.log(hasUpperCase('tag'), false);
console.log(hasUpperCase('taq karim'), false);
console.log('----------------------');

/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - hasUpperCase('taq karim'); // false
*/

const isPalindromic = str => {
    let head = 0;
    let tail = str.length - 1;
    if (str === undefined) return 'undefined';
    if (head === tail) return true; 
    if (str[head] === str[tail] ){
        str = str.slice(1, tail);
        return isPalindromic(str);
    }
    return false;
}

//test
console.log('---------------isPalindromic test---------------');
console.log(isPalindromic('racecar'), true);
console.log(isPalindromic('racecars'), false);
console.log(isPalindromic('bats see bees stab'), false);
console.log(isPalindromic('batsseebeesstab'), true);
console.log(isPalindromic('taq karim'), false);

/* 10
    @func getInitials
    @param {string} str
    @returns {string}
    @desc - given a name (ie: "taq karim"), return the initials (ie: "tk")
            assume there will always be at least one space between first name/last name
            assume only first and last names are provided
    @example - getInitials('taq karim'); // "tk"
    @example - getInitials('mo    mosayed'); // "mm"
    @example - getInitials('John       Smith'); // "js"
    @example - getInitials('sue RonaN'); // "sr"
*/

/* 11
    @func isPerfectStr
    @param {string} str
    @returns {boolean}
    @desc - a "perfect" string (not real, I just made this up) is defined to be a string such that:
            1. has more than three characters
            2. the three middle characters are arranged such that first character is vowel,
                second character is consonant and last character is another vowel
            3. the three middle characters are palindromic
    @example - isPerfectStr('ab'); // false
    @example - isPerfectStr('aba'); // true
    @example - isPerfectStr('asdfaeKeccc'); // false
    @example - isPerfectStr('asdfaeKeccccc'); // true
*/

/* 12
    @func strMasher
    @param {string} str1
    @param {string} str2
    @returns {string}
    @desc - given two strings, str1 and str2, return a new string
            with str2 mashed into the middle of str1
    @example - strMasher('help', 'me'); // "hemelp"
    @example - capitalLast('hello', 'wrold'); // "helwroldlo"
*/

