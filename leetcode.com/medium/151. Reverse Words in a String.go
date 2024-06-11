// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// Constraints:

// 1 <= s.length <= 104
// s contains English letters (upper-case and lower-case), digits, and spaces ' '.
// There is at least one word in s.

// Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?

package algos

import (
	"slices"
	"strings"
)

func reverseWords(s string) string {
	words := strings.Split(strings.Trim(s, " "), " ")
	reversedWords := words[len(words)-1]

	for i := len(words) - 2; i >= 0; i -= 1 {
		word := words[i]
		if word != "" {
			reversedWords += " " + word
		}
	}

	return reversedWords
}

// this is pointless because go doesn't have mutable strings, mimic it with an array
// really impressively ugly and edgecase-y
func reverseWordsMutable(s string) string {
	chars := strings.Split(s, "")
	slices.Reverse(chars)

	l := 0
	r := 0
	i := 0
	for i < len(chars) {
		for i < len(chars) && chars[i] == " " {
			i += 1
		}
		if i == len(chars) {
			break
		}

		for i < len(chars) && chars[i] != " " {
			chars[r] = chars[i]
			r += 1
			i += 1
		}

		for lRev, rRev := l, r-1; lRev < rRev; lRev, rRev = lRev+1, rRev-1 {
			chars[lRev], chars[rRev] = chars[rRev], chars[lRev]
		}

		if r < len(chars) {
			chars[r] = " "
			r += 1
			l = r
			i++
		}
	}

	if chars[r-1] == " " {
		return strings.Join(chars[:r-1], "")
	}
	return strings.Join(chars, "")
}
