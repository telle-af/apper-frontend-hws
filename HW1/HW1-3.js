function reverse(str) {

    // this will contain the reversed version of the string
    let result = "";

    // going through each character from the end to start
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    // returns the reversed version
    return result;
}

// Optional Demo

/*
const sample = reverse('Vielen Dank!')
console.log(sample)

console.log(reverse('africa'))
*/