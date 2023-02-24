
function calculateDifferenteBetweenTwoDates (dateIn, dateOut) {

  const hoursIn = dateIn.getHours()
  const minutesIn = dateIn.getMinutes()
  const secondsIn = dateIn.getSeconds()

  const hoursOut = dateOut.getHours()
  const minutesOut = dateOut.getMinutes()
  const secondsOut = dateOut.getSeconds()

  let differenceHours = hoursOut - hoursIn
  let differenceMinutes = minutesOut - minutesIn
  let differenceSeconds = secondsOut - secondsIn
    
  return { hours: differenceHours, minutes: differenceMinutes, seconds: differenceSeconds }
}

function formatEachTime (time) {
  return time < 10
  ? `0${time}`
  :  `${time}`
}

function formatTime ({ hours, minutes, seconds}) {

  const hoursFormated = formatEachTime(hours)
  const minutesFormated = formatEachTime(minutes)
  const secondsFormated = formatEachTime(seconds)
  
  return `${hoursFormated}:${minutesFormated}:${secondsFormated}`
}

export { calculateDifferenteBetweenTwoDates, formatTime }
