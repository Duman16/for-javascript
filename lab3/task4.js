console.log(`${myCountry.country} has ${myCountry.population / 1000000} million ${myCountry.language}-speaking people,
    ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
    //шаблонная строка
    
    myCountry.population += 2000000;
    //точечная нотация
    console.log(myCountry.population);
    
    myCountry['population'] -= 2000000;
    //с помощью квадратных скобок уменьшаем
    console.log(myCountry.population);