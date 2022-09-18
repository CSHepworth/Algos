/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

var str1 = "abcABC";
var expected1 = "abcABC";

var str2 = "helloo";
var expected2 = "helo";

var str3 = "";
var expected3 = "";

var str4 = "aa";
var expected4 = "a";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
    var newstr = ""
    for(var i = 0; i < str.length; i++) {
        if (str[i] != str[i + 1]) {
        newstr += str[i]
        }
    }
    console.log(newstr)
}

//stringDedupe(str2);

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

var str1 = "hello";
var expected1 = "olleh";

var str2 = "hello world";
var expected2 = "olleh dlrow";

var str3 = "abc def ghi";
var expected3 = "cba fed ihg";


/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    strarr = str.split(" ")
    for (var i = 0; i < strarr.length; i++) {
        strarr[i] = strarr[i].reverse();
    }
    strarr = strarr.join(" ");
    str = strarr;
    return str;
}
console.log(reverseWords(str2));
/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

var str1 = "This is a test";
var expected1 = "test a is This";

var str2 = "hello";
var expected2 = "hello";

var str3 = "   This  is a   test  ";
var expected3 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {}