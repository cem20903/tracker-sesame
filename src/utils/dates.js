
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

function addZeroToTime (time) {
  return time < 10
  ? `0${time}`
  :  `${time}`
}

function formatTime ({ hours, minutes, seconds}) {

  const hoursFormated = addZeroToTime(hours)
  const minutesFormated = addZeroToTime(minutes)
  const secondsFormated = addZeroToTime(seconds)
  
  return `${hoursFormated}:${minutesFormated}:${secondsFormated}`
}

export { calculateDifferenteBetweenTwoDates, formatTime }
