"use strict";

// 1---------------------------------

/*Implement the function unique_in_order which takes as argument a sequence and returns a list
 of items without any elements with the same value next to each other and preserving the original
 order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]
*/
var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  if (typeof iterable === "string") {
    iterable = iterable.split("");
  }
  let newArr = iterable.reduce(function (acc, item, i) {
    if (item != iterable[i + 1]) {
      acc.push(item);
    }
    return acc;
  }, []);
  return newArr;
};
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder([1, 2, 2, 3, 3, 5, 6, 7, 8, 8, 8, 2, 2, 3, 3, 3, 5, 5, 5, 6]));



var uniqueInOrder1 = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1])
}
console.log(uniqueInOrder1("AAAABBBCCDAABBB"));



var uniqueInOrder3 = function (iterable) {
  return Array.from(iterable).reduce((res, cur, index) => {
    if (res[res.length - 1] !== cur) {
      res.push(cur);
    }
    return res;
  }, [])
}
console.log(uniqueInOrder3("AAAABBBCCDAABBB"));
console.log(uniqueInOrder3([1, 2, 2, 3, 3, 5, 6, 7, 8, 8, 8, 2, 2, 3, 3, 3, 5, 5, 5, 6]));

// 2---------------------------------------

/*Create a function named divisors / Divisors that takes an integer n > 1 and returns an array
 with all of the integer's divisors(except for 1 and the number itself), from smallest to largest.
  If the number is prime return the string '(integer) is prime' (null in C#)
   (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/

function divisors(integer) {
  let arr = [];
  for (let i = 2; i < integer; i++) {
    if (!(integer % i)) {
      arr.push(i);
    }
  }
  if (arr.length) {
    return arr;
  } else return integer + ' is prime';
};
console.log(divisors(12));



function divisors1(integer) {
  let divisors = [...Array(integer).keys()].slice(2, integer).filter(div => integer % div == 0);
  return divisors.length > 0 ? divisors : integer + ' is prime';
};
console.log(divisors1(12));

// 3--------------------------------
/*
Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

Input
The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Output
Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

Examples
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND

*/


function songDecoder(song) {
  let arr = song.split('WUB').reduce(function (acc, item) {
    if (item) {
      acc.push(item);
    }
    return acc;
  }, []);
  return arr.join(' ');
}
console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));



function songDecoder1(song) {
  return song.split('WUB').filter(Boolean).join(' ');
}
console.log(songDecoder1("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));

// 4---------------------------------------
/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of ch

*/

// 5
/*
Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

*/

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2);
};
console.log(binaryArrayToNumber([1, 0, 1, 1]));

// 6

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]

*/

function array_diff(a, b) {
  let arr = [];
  for (let key in a) {
    if (!(b.includes(a[key]))) {
      arr.push(a[key]);
    }
  }
  return arr;
}
console.log(array_diff([1, 2, 2, 2, 3], [2]));


function array_diff1(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) == -1;
  });
}
console.log(array_diff1([1, 2, 2, 2, 3], [2]));

function array_diff2(a, b) {
  return a.filter(e => !b.includes(e));
}
console.log(array_diff2([1, 2, 2, 2, 3], [2]));

// 7
/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

*/

function findMissingLetter(array) {
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let arr = str.split("");
  for (const key of array) {
    arr = arr.slice(arr.indexOf(key), arr.indexOf(array[array.length - 1]) + 1);
    const result = arr.filter(item => {
      return !array.includes(item);
    });
    return result.join(", ");
  }
}

console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
console.log(findMissingLetter(['a', 'b', 'd', 'f']));

// 8

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  // TODO: Program me
  return arr.filter((item) => item !== 0).concat(arr.filter((item) => item === 0))
}

// 9
// Title Case
/*
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

function titleCase(title, minorWords) {
  if (!title) {
    return title;
  }
  if (!minorWords) {
    return title.split(' ').map(item => {
      return item = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    }).join(' ');
  } else {
    title = title.toLowerCase().split(' ');
    minorWords = minorWords.toLowerCase().split(' ');
    return title.map((item, index) => {
      if (index === 0 || !minorWords.includes(item)) {
        return item = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
      }
      return item;
    }).join(' ');
  }

}

console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase('', 'The In'));
console.log(titleCase('a clash of KINGS'));

// 10
/*
Move the first letter of each word to the end of it, then add "ay"
to the end of the word.Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !'); // elloHay orldway !
*/

function pigIt(str) {
  //Code here
  return str.split(' ').map(item => {
    if (!item.match(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")) {
      return item = `${item.slice(1)}${item[0]}ay`;
    }
    return item;
  }).join(' ');

}

// function pigIt(str) {
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !'); // elloHay orldway !