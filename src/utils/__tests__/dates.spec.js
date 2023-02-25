
import { calculateDifferenteBetweenTwoDates, formatTime } from '../dates'

describe('Format time', () => {

  it('should return the correct format for a time', () => {
  
    const response = formatTime({ hours: 1, minutes: 20, seconds: 3 }) 
    expect(response).toEqual('01:20:03')
   
  })
})

describe('calculateDifferenteBetweenTwoDates', () => {
  it('should return the difference between 2 dates correctly', () => {
  
    const firstDate = new Date("2022-03-25T11:00:10")
    const secondDate = new Date("2022-03-25T12:00:00")
  
    const response = calculateDifferenteBetweenTwoDates(firstDate, secondDate) 
    expect(response).toEqual({ hours: 0, minutes: 0, seconds: 0})
  
    })
  })
 