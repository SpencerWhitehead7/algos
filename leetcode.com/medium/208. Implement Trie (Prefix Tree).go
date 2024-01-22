// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

// Constraints:

// 1 <= word.length, prefix.length <= 2000
// word and prefix consist only of lowercase English letters.
// At most 3 * 104 calls in total will be made to insert, search, and startsWith.

package algos

type Trie struct {
	isLastChar bool
	nextChars  map[byte]*Trie
}

func Constructor() Trie {
	return Trie{
		isLastChar: false,
		nextChars:  map[byte]*Trie{},
	}
}

func (this *Trie) Insert(word string) {
	if len(word) == 0 {
		this.isLastChar = true
		return
	}

	firstChar, restChars := word[0], word[1:]

	_, ok := this.nextChars[firstChar]
	if !ok {
		nextTrie := Constructor()
		this.nextChars[firstChar] = &nextTrie
	}

	nextTrie, _ := this.nextChars[firstChar]
	nextTrie.Insert(restChars)
}

func (this *Trie) Search(word string) bool {
	if len(word) == 0 {
		return this.isLastChar
	}

	firstChar, restChars := word[0], word[1:]

	nextTrie, ok := this.nextChars[firstChar]
	if !ok {
		return false
	}

	return nextTrie.Search(restChars)
}

func (this *Trie) StartsWith(prefix string) bool {
	if len(prefix) == 0 {
		return true
	}

	firstChar, restChars := prefix[0], prefix[1:]

	nextTrie, ok := this.nextChars[firstChar]
	if !ok {
		return false
	}

	return nextTrie.StartsWith(restChars)
}

/**
* Your Trie object will be instantiated and called as such:
* obj := Constructor();
* obj.Insert(word);
* param_2 := obj.Search(word);
* param_3 := obj.StartsWith(prefix);
 */

type TrieCaseOptimized struct {
	isLastChar bool
	nextChars  [26]*TrieCaseOptimized
}

func ConstructorCaseOptimized() TrieCaseOptimized {
	return TrieCaseOptimized{}
}

func (this *TrieCaseOptimized) Insert(word string) {
	currTrie := this

	for _, char := range word {
		charIdx := char - 'a'

		if currTrie.nextChars[charIdx] == nil {
			currTrie.nextChars[charIdx] = &TrieCaseOptimized{}
		}

		currTrie = currTrie.nextChars[charIdx]
	}

	currTrie.isLastChar = true
}

func (this *TrieCaseOptimized) Search(word string) bool {
	currTrie := this

	for _, char := range word {
		charIdx := char - 'a'

		if currTrie.nextChars[charIdx] == nil {
			return false
		}

		currTrie = currTrie.nextChars[charIdx]
	}

	return currTrie.isLastChar
}

func (this *TrieCaseOptimized) StartsWith(prefix string) bool {
	currTrie := this

	for _, char := range prefix {
		charIdx := char - 'a'

		if currTrie.nextChars[charIdx] == nil {
			return false
		}

		currTrie = currTrie.nextChars[charIdx]
	}

	return true
}

/**
* Your Trie object will be instantiated and called as such:
* obj := Constructor();
* obj.Insert(word);
* param_2 := obj.Search(word);
* param_3 := obj.StartsWith(prefix);
 */
