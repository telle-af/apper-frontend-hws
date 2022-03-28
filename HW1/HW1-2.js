

class Stack {
    constructor() {
      this.stack = [];
    }
    
    // adds an item to the top of the stack, where "top of stack" == index 0
    push(item) {
      
        //checks if the input is a string before adding to the stack
        if (typeof item === 'string' || item instanceof String) {
            this.stack.unshift(item)
        } else {
            return 'Invalid input: not a string.'
        }
    }
    
    // removes the latest-added item i.e. the item with index 0
    pop() {
        
        // checkpoint if the stack is empty
        if (this.stack.length == 0) {
            return 'Stack is currently empty.'
        } else {
            this.stack.shift()
        }
    }
    
    check() {
        
        // returns the current state of the stack
        return this.stack.slice(0)
    }
  
    peek() {
        
        // returns the top-most item 
        return this.stack[0]
    }
      
}
    
// Optional Demo

/*
const sampleStack = new Stack()
sampleStack.push("Oats")
sampleStack.push("Milk")
console.log(sampleStack.check())
console.log(sampleStack.push(35))
sampleStack.push("Eggs")
sampleStack.pop()
console.log(sampleStack.peek())
sampleStack.push("Ham")
console.log(sampleStack.check())
sampleStack.pop()
sampleStack.pop()
console.log(sampleStack.check())
sampleStack.pop()
console.log(sampleStack.pop())
*/