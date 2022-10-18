// Given an integer n, return the number of prime numbers that are strictly less than n.

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0

// Constraints:

// 0 <= n <= 5 * 106

package algos

func countPrimesBasic(n int) int {
	count := 0
	pps := make([]int, n)
	for i := 2; i < n; i++ {
		if pps[i] == 0 {
			count++
			marker := i + i
			for marker < n {
				pps[marker] = 1
				marker += i
			}
		}
	}

	return count
}

func countPrimesSweep(n int) int {
	if n <= 2 {
		return 0
	}

	pps := make([]int, n)
	for i := 3; i*i < n; i += 2 {
		if pps[i] == 0 {
			for marker := i * i; marker < n; marker += 2 * i {
				pps[marker] = 1
			}
		}
	}

	count := 1
	for i := 3; i < n; i += 2 {
		if pps[i] == 0 {
			count++
		}
	}

	return count
}

func countPrimes(n int) int {
	if n <= 2 {
		return 0
	}

	count := 1
	pps := make([]int, n)
	for i := 3; i < n; i += 2 {
		if pps[i] == 0 {
			count++
			for marker := i * i; marker < n; marker += 2 * i {
				pps[marker] = 1
			}
		}
	}

	return count
}
