function transform(myArray) {
  
  // squaring all the elements of the array 
  const squaredArray = myArray.map(num => num*num)

  // sorting the resulting array in ascending order
  squaredArray.sort((a,b)=>a-b)

  // returning the final array
  return squaredArray
  
}


// Optional Demo

/*
let trial = [10,-2,8,3,-5,1]
console.log(transform(trial))
*/  