# For whatever reason, leetcode only had this one in python, so I learned some python

# # We are playing the Guess Game. The game is as follows:

# I pick a number from 1 to n. You have to guess which number I picked.

# Every time you guess wrong, I'll tell you whether the number is higher or lower.

# You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

# -1 : My number is lower
#  1 : My number is higher
#  0 : Congrats! You got it!
# Example :

# Input: n = 10, pick = 6
# Output: 6

# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num):

class Solution(object):
    def guessNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        start = 1
        end = n
        while(True):
          # leetcode preimported/defined math and guess
          middle = math.floor((start + end)/2)
          api_res = guess(middle)
          if(api_res == 0):
            return int(middle)
          if(api_res == 1):
            start = middle + 1
          if(api_res == -1):
            end = middle - 1
            