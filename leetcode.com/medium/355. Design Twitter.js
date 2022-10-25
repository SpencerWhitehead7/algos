// Design a simplified version of Twitter where users can post tweets, follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed. Your design should support the following methods:

// postTweet(userId, tweetId): Compose a new tweet.
// getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
// follow(followerId, followeeId): Follower follows a followee.
// unfollow(followerId, followeeId): Follower unfollows a followee.
// Example:

// Twitter twitter = new Twitter();

// // User 1 posts a new tweet (id = 5).
// twitter.postTweet(1, 5);

// // User 1's news feed should return a list with 1 tweet id -> [5].
// twitter.getNewsFeed(1);

// // User 1 follows user 2.
// twitter.follow(1, 2);

// // User 2 posts a new tweet (id = 6).
// twitter.postTweet(2, 6);

// // User 1's news feed should return a list with 2 tweet ids -> [6, 5].
// // Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
// twitter.getNewsFeed(1);

// // User 1 unfollows user 2.
// twitter.unfollow(1, 2);

// // User 1's news feed should return a list with 1 tweet id -> [5],
// // since user 1 is no longer following user 2.
// twitter.getNewsFeed(1);

/**
 * Initialize your data structure here.
 */
const Twitter = function () {
  this.users = {}
  this.tweets = []
}

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.addUserIfNotListed(userId)
  this.tweets.push({
    userId,
    tweetId,
  })
}

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const user = this.addUserIfNotListed(userId)
  const newsFeedTweets = []
  for (
    let i = this.tweets.length - 1;
    i >= 0 && newsFeedTweets.length < 10;
    i--
  ) {
    if (user.has(this.tweets[i].userId))
      newsFeedTweets.push(this.tweets[i].tweetId)
  }
  return newsFeedTweets
}

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  this.addUserIfNotListed(followerId)
  this.addUserIfNotListed(followeeId)
  this.users[followerId].add(followeeId)
}

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (followerId === followeeId) return
  this.addUserIfNotListed(followerId)
  this.addUserIfNotListed(followeeId)
  this.users[followerId].delete(followeeId)
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

Twitter.prototype.addUserIfNotListed = function (userId) {
  if (!this.users[userId]) this.users[userId] = new Set([userId])
  return this.users[userId]
}
