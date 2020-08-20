export function calculateAge(date) {
  const inputDate = new Date(date)
  const now =  new Date(Date.now())

  let timeDifference = Math.abs(inputDate.getTime() - now.getTime());
  let years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365)); 

  return years;
}

export function calculateCompanyTime(date) {
  const inputDate = new Date(date)
  const now =  new Date(Date.now())

  let timeDifference = Math.abs(inputDate.getTime() - now.getTime());
  let months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30)); 

  return months;
}