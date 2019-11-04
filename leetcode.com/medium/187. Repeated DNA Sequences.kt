// All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

// Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

// Example:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

// Output: ["AAAAACCCCC", "CCCCCAAAAA"]

class Solution {
  fun findRepeatedDnaSequences(s: String): List<String> {
    val res = mutableSetOf<String>()
    val substrs = mutableSetOf<String>()
    for(i in 0..s.length - 10){
      val substr = s.slice(i..i + 9)
      if(substrs.contains(substr)){
        res.add(substr)
      }else{
        substrs.add(substr)
      }
    }
    return res.toList()
  }
}