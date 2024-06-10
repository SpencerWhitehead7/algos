// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
// Example 2:

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
// Example 3:

// Input: numCourses = 1, prerequisites = []
// Output: [0]

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= numCourses * (numCourses - 1)
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// ai != bi
// All the pairs [ai, bi] are distinct.

package algos

func findOrder(numCourses int, prerequisites [][]int) []int {
	prereqsToCourses := make([][]int, numCourses)
	coursesToPrereqs := make([][]int, numCourses)
	for _, req := range prerequisites {
		prereqsToCourses[req[1]] = append(prereqsToCourses[req[1]], req[0])
		coursesToPrereqs[req[0]] = append(coursesToPrereqs[req[0]], req[1])
	}

	isCourseTaken := make([]bool, numCourses)
	stack := make([]int, 0, numCourses)
	courseOrder := make([]int, 0, numCourses)
	course := 0
	for i := range numCourses {
		if len(coursesToPrereqs[i]) == 0 {
			isCourseTaken[i] = true
			courseOrder = append(courseOrder, i)
			stack = append(stack, i)
		}
	}

	for len(stack) > 0 {
		stack, course = stack[:len(stack)-1], stack[len(stack)-1]
		if !isCourseTaken[course] {
			isCourseTaken[course] = true
			courseOrder = append(courseOrder, course)
		}

		dependentCourses := prereqsToCourses[course]
		for _, dependent := range dependentCourses {
			isStillBlocked := false
			for _, prereq := range coursesToPrereqs[dependent] {
				if !isCourseTaken[prereq] {
					isStillBlocked = true
					break
				}
			}

			if !isStillBlocked {
				stack = append(stack, dependent)
			}
		}
	}

	if len(courseOrder) != numCourses {
		return []int{}
	}
	return courseOrder
}
