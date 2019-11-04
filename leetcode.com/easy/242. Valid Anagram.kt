// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

class Solution {
  fun isAnagram(s: String, t: String): Boolean {
      val letters = mutableMapOf<Char, Int>()
      for(letter in s){
        letters[letter] = letters.getOrDefault(letter, 0) + 1
      }
      for(letter in t){
        letters[letter] = letters.getOrDefault(letter, 0) - 1
      }
      return letters.values.all{it == 0}
  }
}
