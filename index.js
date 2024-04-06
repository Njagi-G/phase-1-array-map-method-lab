const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*
//Use

//split() method to split a String object into an array of strings by separating the string into substrings.
const strOne = 'what does the this keyword mean?'.split(' ');
console.log(strOne);

//charAt() method to return the specified character from a string.
const strTwo = 'What is the Constructor OO pattern?'
console.log(strTwo.charAt(0));

//slice() method to extract a section of a string and returns a new string.
const strThree = 'implementing Blockchain Web API'
console.log(strThree.slice(12));

//join() method to join all elements of an array into a string.

*/

const titleCased = () => {

  return tutorials.map(title => {

    return title.split(' ').map(word => {

      return word.charAt(0).toUpperCase() + word.slice(1);
    }

  ).join(' ');
  },
  );
};

titleCased(tutorials);

console.log(titleCased(tutorials));


