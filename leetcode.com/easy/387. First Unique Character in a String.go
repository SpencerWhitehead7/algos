// Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

package algos

func firstUniqChar(s string) int {
	counts := make(map[rune]int)

	for _, c := range s {
		counts[c] = (counts[c]) + 1
	}

	for i, c := range s {
		if counts[c] == 1 {
			return i
		}
	}

	return -1
}
