// Pair Sum
// Interviewer Prompt
// Given an array of integers (array) and a number n, write an algorithm that determines whether or not there exists two elements in the array whose sum is n.



// Example Output
console.log(pairSumSort([1, 2, 3, 4, 5], 9), [4, 5]) // returns an array with the pair: [4, 5]
console.log(pairSumSort([1, 2, 3, 4, 5], 10), []) // returns an empty array: []

console.log(pairSumHash([1, 2, 3, 4, 5], 9), [4, 5]) // returns an array with the pair: [4, 5]
console.log(pairSumHash([1, 2, 3, 4, 5], 10), []) // returns an empty array: []
// class: center middle

// Interviewer Guide
// RE
// Coaching advice for the interviewer to make sure that their interviewee is asking the right questions

// Example:
// If your interviewee continues without asking questions, stop them and ask, "Do you have any questions about the result?" Your prompt should only specify that n is an integer, and array is an array of integers. Make sure that they're thinking about that.
// Answers to Common Questions
// Example:
// Can the input array be empty?
// Possibly
// Is the input array sorted?
// No, not at first
// Can n be positive or negative?
// n could be either positive or negative
// Does the order of the output array matter?
// No, but it should be stable (that is, you should always get the same result for the same input)
// What if there is more than one matching pair?
// Return the first one you find
