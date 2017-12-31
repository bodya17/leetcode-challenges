// https://leetcode.com/articles/generate-parentheses/

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// For example, given n = 3, a solution set is:

const R = require('ramda')

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

// n = 2
// [
//   '()()',
//   '(())'
// ]

// n = 4
// [
//   '()()()()',
//   '(((())))',
//   '()()(())',
//   '()(())()',
//   '(())()()',
//   '(()()())',
//   '(())(())',
//   '((()()))',
//   '((())())',
//   '(()(()))',
//   '()((()))',
//   '()((()))'
// ]

const left = str => `()${str}` 
const right = str => `${str}()` 
const center = str => `(${str})` 

function gen1(n) {
  var result = []
  function generate(n, soFar) {
    if (n > 1) {
      generate(n - 1, right(soFar))
      generate(n - 1, left(soFar))
      generate(n - 1, center(soFar))
    
    } else {
      result.push(soFar)
    }
  }
  generate(n, '()')
  return result
  // return [...new Set(result)]
}

console.log(gen1(5).length)
console.log(gen2(5).length)

n = 5

console.log(R.difference(gen2(n), gen1(n)))

// var withoutDup = [...new Set(result)]
// console.log(withoutDup.length)


// for (let i = 0; i < withoutDup.length; i++)
//   for (let j = i+1; j < withoutDup.length; j++) {
//     if (withoutDup[i] === withoutDup[j]) {
//       console.log(withoutDup[i], i, j)
//     }
//   }



function gen2(n) {
  const result = []

  function backtrack(s, left, right) {
    if (s.length === 2 * n)
      result.push(s)
    else {
      if (left < n)
        backtrack(s + '(', left + 1, right)
      if (right < left)
        backtrack(s + ')', left, right + 1)
    }
  }
  backtrack('', 0, 0)
  return result
}


function generateAll(n) {
  const result = []
  function gen(soFar) {
    if (soFar.length / 2 === n) {
      result.push(soFar)
    } else {
      gen(soFar + '(')
      gen(soFar + ')')
    }
  }
  gen('')
  return result
}

console.log(generateAll(3))



// let withoutDup = gen2(5)
// console.log(withoutDup)


// for (let i = 0; i < withoutDup.length; i++)
//   for (let j = i+1; j < withoutDup.length; j++) {
//     if (withoutDup[i] === withoutDup[j]) {
//       console.log(withoutDup[i], i, j)
//     }
//   }

