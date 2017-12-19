// https://leetcode.com/articles/generate-parentheses/

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

// n = 2
// [
//   '()()',
//   '(())'
// ]

// n = 4
[
  '()()()()',
  '(((())))',
  '()()(())',
  '()(())()',
  '(())()()',
  '(()()())',
  '(())(())',
  '((()()))',
  '((())())',
  '(()(()))',
  '()((()))',
  '()((()))'
]

var result = []
function generateAllParen(n) {
   if (n === 0) return ''
   result.push('(' +  generateAllParen(n-1))
   result.push(')' +  generateAllParen(n-1))
}

console.log(result)


function genParen(n) {
  if (n == 0) return ''
  return [`(${genParen(n-1)})`, `()${genParen(n-1)}`]
  // return `(${genParen(n-1)})`
  // return genParen(n - 1,)
}

console.log(genParen(2))