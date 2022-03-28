function isPalindrome(str) {
    
    //converting to all lowercase characters
    const lowerCaseString = str.toLowerCase();

    // quantifying string length
    const len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if the character is the same as its appropriate counterpart from the other half
        if (lowerCaseString[i] !== lowerCaseString[len - 1 - i]) {
            return 'false';
        }
    }
    
    return 'true';

}

// Optional Demo


/*
console.log(isPalindrome("civic"))
console.log(isPalindrome("NotAPalindromeLOL"))
console.log(isPalindrome("Hannah"))
*/