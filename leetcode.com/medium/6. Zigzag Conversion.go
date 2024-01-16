// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

package algos

import "strings"

func convert(s string, numRows int) string {
	segments := make([]string, numRows)

	isDown := true
	i := 0
	for i < len(s) {
		if isDown {
			for j := 0; j < numRows && i < len(s); j++ {
				segments[j] += string(s[i])
				i++
			}
		} else {
			for j := numRows - 2; j > 0 && i < len(s); j-- {
				segments[j] += string(s[i])
				i++
			}
		}
		isDown = !isDown
	}

	return strings.Join(segments, "")
}
