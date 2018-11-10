// Note: This is a companion problem to the System Design problem: Design TinyURL.
// TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

// Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = longUrl => {
  const hash = Buffer.from(longUrl).toString(`base64`)
  return `https://www.tinyUrl.com/${hash}`
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = shortUrl => {
  const hash = shortUrl.split(`.com/`).pop()
  return Buffer.from(hash, `base64`).toString(`ascii`)
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
