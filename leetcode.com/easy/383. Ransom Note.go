// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

package algos

func canConstruct(ransomNote string, magazine string) bool {
	availableLetters := make(map[rune]int)
	for _, s := range magazine {
		availableLetters[s]++
	}

	for _, s := range ransomNote {
		if availableLetters[s] == 0 {
			return false
		}
		availableLetters[s]--
	}

	return true
}
