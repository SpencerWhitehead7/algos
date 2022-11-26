// Given an array of strings words representing an English Dictionary, return the longest word in words that can be built one character at a time by other words in words.

// If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.

// Note that the word should be built from left to right with each additional character being added to the end of a previous word.

// Example 1:

// Input: words = ["w","wo","wor","worl","world"]
// Output: "world"
// Explanation: The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
// Example 2:

// Input: words = ["a","banana","app","appl","ap","apply","apple"]
// Output: "apple"
// Explanation: Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".

// Constraints:

// 1 <= words.length <= 1000
// 1 <= words[i].length <= 30
// words[i] consists of lowercase English letters.

/**
 * @param {string[]} words
 * @return {string}
 */
const longestWordTrie = (words) => {
  const insertWord = (trie, word, i) => {
    if (i === word.length - 1) {
      trie[word[word.length - 1]] = {}
      return true
    }
    if (trie[word[i]] === undefined) {
      return false
    }

    return insertWord(trie[word[i]], word, i + 1)
  }

  let longestWord = ""

  const trie = words
    .reduce((acc, word) => {
      acc[word.length - 1] ??= []
      acc[word.length - 1].push(word)
      return acc
    }, [])
    .flat()
    .reduce((acc, word) => {
      const wasInsertable = insertWord(acc, word, 0)
      if (wasInsertable) {
        console.log(word)
        if (word.length > longestWord.length) {
          longestWord = word
        } else if (word.length === longestWord.length && word < longestWord) {
          longestWord = word
        }
      }
      return acc
    }, {})

  console.log(trie)

  return longestWord
}

const longestWord = (words) => {
  let longestWords = new Set([""])

  const byCount = words.reduce((acc, word) => {
    acc[word.length - 1] ??= []
    acc[word.length - 1].push(word)
    return acc
  }, [])

  for (let i = 0; i < byCount.length; i++) {
    if (byCount[i] === undefined) break

    const nextLongestWords = byCount[i].reduce((acc, word) => {
      if (longestWords.has(word.slice(0, -1))) acc.add(word)
      return acc
    }, new Set())

    if (nextLongestWords.size === 0) {
      break
    } else {
      longestWords = nextLongestWords
    }
  }

  return [...longestWords].reduce((shortestLexographically, word) =>
    word < shortestLexographically ? word : shortestLexographically
  )
}

// you can use this instead of the nested for loops and chain it with the first reduce
// but I think it's an icky mix of functional method with decidedly non-functional functionality
// (a .reduce() that tracks and mutates an external value???)
// also it can't do the early return
// .reduce((acc, wordList) => {
//   const longestSurvivors = wordList.filter((w) => acc.has(w.slice(0, -1)))

//   if (longestSurvivors.length > 0) {
//     longestWord = longestSurvivors.reduce((longest, word) =>
//       word < longest ? word : longest
//     )
//   }

//   return new Set(longestSurvivors)
// }, new Set([longestWord]))
