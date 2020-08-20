export function calculateTimeBetweenTwoDates(date, type) {
  const inputDate = new Date(date)
  const now =  new Date(Date.now())
  let timeDifference = Math.abs(inputDate.getTime() - now.getTime());
  let result;

  switch (type) {  
    case 'age':
      result = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365)); 
      break;
  
    case 'companyTime':
      result = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30)); 
      break;

    default:
      break;
  }

  return result;
}
