
// an array against which we can compare characters
const vowelList = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function convertToVowels(str) {
    
    // this will contain the vowels of the given string
    let vowelString = "";
    
    // for loop goes through every single character
    for(let i = 0; i < vowelList.length; i++) {

        // checks if the character is a member of vowelList
        if(vowelList.includes(str[i])) {
            vowelString += str[i]
        }
    }


  return vowelString;

}

// Optional Demo

/*
console.log(convertToVowels('Hello World'))
console.log(convertToVowels('Synch'))
console.log(convertToVowels('Oktoberfest'))
*/