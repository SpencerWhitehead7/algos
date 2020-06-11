// Clock Minute Adder
// Interviewer Prompt
// Given:

// a time in string format HH:MM
// a number of minutes
// Return:

// The time given those minutes added to the base time
// Assumptions:

// You're working with a standard 12-hour clock
// Output needs to match input format HH:MM
// Example Output
addMinutes(`1:30`, 30)     // 2:00
addMinutes(`12:30`, 40)    // 1:10
addMinutes(`11:59`, 1)     // 12:00
addMinutes(`1:59`, 240)    // 5:59
addMinutes(`1:23`, 456789) // 6:32

const addMinutes = (time, minutes) => {
  const [hour, minute] = time.split(`:`).map(ele => Number(ele))

  const addedHours = Math.floor(minutes / 60)
  const addedMinutes = minutes % 60

  let newHour = (hour + addedHours - 1) % 12 + 1
  let newMinutes = minute + addedMinutes

  if (newMinutes >= 60) {
    newHour = newHour % 12 + 1
    newMinutes %= 60
  }

  return newMinutes < 10 ? `${newHour}:0${newMinutes}` : `${newHour}:${newMinutes}`
}
