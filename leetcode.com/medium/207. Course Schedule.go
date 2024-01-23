// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

package algos

func canFinish(numCourses int, prerequisites [][]int) bool {
	dependencies := make([][]int, numCourses)
	for i := range dependencies {
		dependencies[i] = []int{}
	}
	for _, req := range prerequisites {
		dependent, dependency := req[0], req[1]
		dependencies[dependent] = append(dependencies[dependent], dependency)
	}

	visited := make([]int, numCourses)
	for i := 0; i < numCourses; i++ {
		if hasCycle(dependencies, visited, i) {
			return false
		}
	}

	return true
}

func hasCycle(dependencies [][]int, visited []int, courseNum int) bool {
	if visited[courseNum] == 1 {
		return true
	}
	if visited[courseNum] == -1 {
		return false
	}

	visited[courseNum] = 1
	for _, neighbor := range dependencies[courseNum] {
		if hasCycle(dependencies, visited, neighbor) {
			return true
		}
	}

	visited[courseNum] = -1
	return false
}
