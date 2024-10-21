function days_of_a_year(year) {    
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 366 : 365;
}

console.log(days_of_a_year(2021)); 
console.log(days_of_a_year(2022)); 
  