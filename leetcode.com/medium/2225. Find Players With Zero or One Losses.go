// You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

// Return a list answer of size 2 where:

// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.

// Note:

// You should only consider the players that have played at least one match.
// The testcases will be generated such that no two matches will have the same outcome.

// Example 1:

// Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
// Output: [[1,2,10],[4,5,7,8]]
// Explanation:
// Players 1, 2, and 10 have not lost any matches.
// Players 4, 5, 7, and 8 each have lost one match.
// Players 3, 6, and 9 each have lost two matches.
// Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].
// Example 2:

// Input: matches = [[2,3],[1,3],[5,4],[6,4]]
// Output: [[1,2,5,6],[]]
// Explanation:
// Players 1, 2, 5, and 6 have not lost any matches.
// Players 3 and 4 each have lost two matches.
// Thus, answer[0] = [1,2,5,6] and answer[1] = [].

// Constraints:

// 1 <= matches.length <= 105
// matches[i].length == 2
// 1 <= winneri, loseri <= 105
// winneri != loseri
// All matches[i] are unique.

package algos

import "slices"

func findWinners(matches [][]int) [][]int {
	lossesByPlayer := map[int]int{}

	for _, match := range matches {
		winner, loser := match[0], match[1]
		_, ok := lossesByPlayer[winner]
		if !ok {
			lossesByPlayer[winner] = 0
		}

		lossesByPlayer[loser]++
	}

	noLosses := []int{}
	oneLoss := []int{}
	for i := 1; i <= 100001; i++ {
		lossCount, ok := lossesByPlayer[i]
		if !ok {
			continue
		}

		if lossCount == 0 {
			noLosses = append(noLosses, i)
		}
		if lossCount == 1 {
			oneLoss = append(oneLoss, i)
		}
	}

	return [][]int{noLosses, oneLoss}
}

func findWinnersSort(matches [][]int) [][]int {
	lossesByPlayer := map[int]int{}

	for _, match := range matches {
		winner, loser := match[0], match[1]
		_, ok := lossesByPlayer[winner]
		if !ok {
			lossesByPlayer[winner] = 0
		}

		lossesByPlayer[loser]++
	}

	noLosses := []int{}
	oneLoss := []int{}
	for player, record := range lossesByPlayer {
		if record == 0 {
			noLosses = append(noLosses, player)
		}
		if record == 1 {
			oneLoss = append(oneLoss, player)
		}
	}
	slices.Sort(noLosses)
	slices.Sort(oneLoss)

	return [][]int{noLosses, oneLoss}
}

// this is kinda an interesting one because I think sorting ~should be slower (nlogn instead of n)
// but in practice the sorting one is much faster because of the shape of the test data
// the better big o time is overwhelmed by the huge fixed cost of the giant, always-worst-case for loop
// since in most of the test cases you end up sorting a small subset of the input
