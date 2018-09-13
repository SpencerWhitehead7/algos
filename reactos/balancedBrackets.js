// Prompt
// Write a function that determines whether an input string has balanced brackets.

// You are given an input string consisting of brackets—square [ ], round ( ), and curly { }. The input string can include other text. Write a function that returns either true if the brackets in the input string are balanced or false if they are not. Balanced means that any opening bracket of a particular type must also have a closing bracket of the same type.

// An empty input string or a string without brackets can also be considered "balanced".

const bracketPattern = /[[\](){}]/g
const bracketPairs = {
  '[' : `]`,
  '{' : `}`,
  '(' : `)`,
}

const hasBalancedBrackets = str => {
  const bracketStack = []
  str = str.match(bracketPattern)
  for(let i = 0; i < str.length; i++){
    if(str[i] in bracketPairs){
      bracketStack.unshift(str[i])
    }else if(bracketPairs[bracketStack[0]] === str[i]){
      bracketStack.shift()
    }else{
      return false
    }
  }
  return !bracketStack.length
}

// Examples
console.log(hasBalancedBrackets(`[][(){}`)) // false
console.log(hasBalancedBrackets(`({)}`)) // false
console.log(hasBalancedBrackets(`({[]}))`)) // false
console.log(hasBalancedBrackets(`({[]})`)) // true
console.log(hasBalancedBrackets(`text ( is allowed ){rwwrwrrww [] ()}`)) // true
