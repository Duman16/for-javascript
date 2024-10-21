let speaksEnglish = true;
let population = 11000000;
let isIsland = false; 

if (speaksEnglish && population < 50000000 && !isIsland) {
    console.log('You should live in Portugal :)');
  } else {
    console.log('Portugal does not meet your criteria :(');
  }

  
speaksEnglish = true;
population = 20000000;
isIsland = false; 


if (speaksEnglish && population < 50000000 && !isIsland) {
  console.log('You should live in Portugal :)');
} else {
  console.log('Portugal does not meet your criteria :(');
}




speaksEnglish = false;


if (speaksEnglish && population < 50000000 && !isIsland) {
  console.log('You should live in Portugal :)');
} else {
  console.log('Portugal does not meet your criteria :(');
}