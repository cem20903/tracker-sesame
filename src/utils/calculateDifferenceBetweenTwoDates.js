
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

  differenceHours = differenceHours < 10
  ? `0${differenceHours}`
  :  `${differenceHours}`

  differenceMinutes = differenceMinutes < 10
  ? `0${differenceMinutes}`
  : `${differenceMinutes}`

  differenceSeconds = differenceSeconds < 10
  ? `0${differenceSeconds}`
  : `${differenceSeconds}`
  
    
  return { hours: differenceHours, minutes: differenceMinutes, seconds: differenceSeconds }
}


export default calculateDifferenteBetweenTwoDates
