/* eslint-env browser, jquery */

{
  const words = [`Word`, `OTHERword`]
  $(document).ready(() => {
    let targetWord
    let wordAttempt
    let incorrectGuesses
    let guessesRemaining
    let wins = 0
    let losses = 0

    const restart = () => {
      targetWord = words[Math.floor(Math.random() * words.length)]
      wordAttempt = new Array(targetWord.length).fill(`_`)
      incorrectGuesses = []
      guessesRemaining = 12
      $(`#guessedWord`).text(`Guessed Word: ${wordAttempt.join(` `)}`)
      $(`#incorrectGuesses`).text(`Incorrect Guesses: ${incorrectGuesses.join(`, `)}`)
      $(`#guessesRemaining`).text(`Guesses Remaining: ${guessesRemaining}`)
      $(`#wins`).text(`Wins: ${wins}`)
      $(`#losses`).text(`Losses: ${losses}`)
    }

    const correctGuess = guess => {
      for (let i = 0; i < targetWord.length; i++) {
        if (guess === targetWord[i].toLowerCase()) {
          wordAttempt[i] = targetWord[i]
          $(`#guessedWord`).text(`Guessed Word: ${wordAttempt.join(` `)}`)
        }
      }
      if (wordAttempt.join(``) === targetWord) {
        wins++
        restart()
      }
    }

    const incorrectGuess = guess => {
      if (!incorrectGuesses.includes(guess)) {
        incorrectGuesses.push(guess)
        guessesRemaining--
        $(`#incorrectGuesses`).text(`Incorrect Guesses: ${incorrectGuesses.join(`, `)}`)
        $(`#guessesRemaining`).text(`Guesses Remaining: ${guessesRemaining}`)
        if (guessesRemaining <= 0) {
          losses++
          restart()
        }
      }
    }

    $(document).keyup(event => {
      const guess = event.key.toLowerCase()
      if (guess.charCodeAt(0) >= 97 && guess.charCodeAt(0) <= 122) {
        if (targetWord.toLowerCase().includes(guess)) {
          correctGuess(guess)
        } else {
          incorrectGuess(guess)
        }
      }
    })

    restart()
  })
}
