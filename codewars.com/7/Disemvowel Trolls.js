// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// Spirit of the question way

const disemvowel = (str) => {
  let res = ``
  str.split(``).forEach((letter) => {
    const LETTER = letter.toUpperCase()
    if (
      LETTER !== `A` &&
      LETTER !== `E` &&
      LETTER !== `I` &&
      LETTER !== `O` &&
      LETTER !== `U`
    ) {
      res += letter
    }
  })
  return res
}

// best practices way

const disemvowelAlt = (str) => str.replace(/[aeiou]/gi, ``)
