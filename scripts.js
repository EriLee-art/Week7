//  1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

console.log(`1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.`);

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log("Ages", ages);

/*
    a. Programmatically subtract the value of the first element in the array from the value in 
        the last element of the array.
        
        * Do not use numbers to reference the last element, find it programmatically.
        * ages[7] - ages[0] is not allowed!
*/

console.log(`a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.

            * Do not use numbers to reference the last element, find it programmatically.
            * ages[7] - ages[0] is not allowed!`)

let subtractAges = ages[ages.length - 1] - ages[0];

console.log(subtractAges);

/*
    b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for 
            arrays of different lengths).
*/

console.log(`b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).`);

ages.push(53);

subtractAges = ages[ages.length - 1] - ages[0];

console.log(subtractAges);


//  c. Use a loop to iterate through the array and calculate the average age.


console.log(`c. Use a loop to iterate through the array and calculate the average age.`);

let sumOfAge = 0;

for (let i = 0; i < ages.length; i++) {
    sumOfAge += ages[i];
    console.log(`Index:`, i, `Sum of Ages:`, sumOfAge);
}

let averageAge = sumOfAge / ages.length;

console.log(`Average Age:`, averageAge);


/* 
    2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 
        'Sally', 'Buck', 'Bob'.
*/

console.log(`2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.`);

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

console.log(names);

// a. Use a loop to iterate through the array and calculate the average number of letters per name.

console.log(`a. Use a loop to iterate through the array and calculate the average number of letters per name.`);

let totalCharas = 0;

for (let i = 0; i < names.length; i++) {
    totalCharas += names[i].length;
    console.log(`Index:`, i, `Characters:`, totalCharas);
}

let averageLettersPerName = totalCharas / names.length;

console.log(averageLettersPerName);

/* 
    b. Use a loop to iterate through the array again and concatenate all the names together, 
        separated by spaces.
*/

console.log(`b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`);

let concatNames = "";

for (let i = 0; i < names.length; i++) {
    concatNames = concatNames.concat(`${names[i]} `);
}

console.log(concatNames);

// 3. How do you access the last element of any array?

console.log(`3. How do you access the last element of any array?`);

console.log(`Using the array variable, variable[variable.length - 1]`);

// 4. How do you access the first element of any array?

console.log(`4. How do you access the first element of any array?`);

console.log(`variable[0], due to 0 being first`);

/**
 * 5. Create a new array called nameLengths. Write a loop to iterate over the previously created 
 *      names array and add the length of each name to the nameLengths array.
 * 
 * For example: let names = ["Kelly", "Sam", "Kate"];    // starting with this array
 *              let nameLengths = [5, 3, 4];             // create a new array
 * 
 */

console.log(`5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    
    For example: let names = ["Kelly", "Sam", "Kate"];    // starting with this array
                 let nameLengths = [5, 3, 4];             // create a new array`);

const nameLengths = []

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

console.log(nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements 
//      in the array.

console.log(`6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`);

let sumOfElements = 0;

for (let i = 0; i < nameLengths.length; i++) {
    sumOfElements += nameLengths[i];
    console.log("Elements:", sumOfElements, "Name Lengths:", nameLengths, "Index:", i);
}

console.log(sumOfElements);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word 
//      concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would 
//      expect the function to return 'HelloHelloHello').

console.log(`7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`);

const concatWords = (word, n) => {
    let output = word.repeat(n);
    return output;
}

console.log(concatWords("Hello!!", 3));

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
//      The full name should be the first and the last name separated by a space.

console.log(`8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`);

const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}

console.log(fullName(`Eric`, `Lee`));

// 9. Write a function that takes an array of numbers and returns true if the sum of all the 
//      numbers in the array is greater than 100.

console.log(`9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`);

const isGreaterThan100 = (array) => {

    let sumOfArray = 0

    for (let i = 0; i < array.length; i++) {
        sumOfArray += array[i];
    }

    if (sumOfArray > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(isGreaterThan100([90, 11]));

// 10. Write a function that takes an array of numbers and returns the average of all the elements 
//      in the array.

console.log(`10. Write a function that takes an array of numbers and returns the average of all the elements in the array.`);

const averageOfElements = (array) => {

    sumOfElements =  0;

    for (let i = 0; i < array.length; i++) {
        sumOfElements += array[i];
        console.log(`Index`, i, `Sum of Elements`, sumOfElements, `Numbers`, array);
    }
    return sumOfElements / array.length;
}

console.log(averageOfElements([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 11. Write a function that takes two arrays of numbers and returns true if the average of the 
//      elements in the first array is greater than the average of the elements in the second array.

console.log(`11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`)

const isAGreaterThanB = (array1, array2) => {
    sumOfArray1 =  0;
    sumOfArray2 = 0;

    for (let i = 0; i < array1.length; i++) {
        sumOfArray1 += array1[i];
    }

    for (let i = 0; i < array2.length; i++) {
        sumOfArray2 += array2[i];
    }

    let averageOfArray1 = sumOfArray1 / array1.length
    let averageOfArray2 = sumOfArray2 / array2.length

    if (averageOfArray1 > averageOfArray2) {
        return true;
    } else {
        return false;
    }
}

console.log(isAGreaterThanB([5, 6, 10], [9, 1, 10]));

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
//      moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater 
//      than 10.50.

console.log(`12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`);

const willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(true, 10.51));

// 13. Create a function of your own that solves a problem. In comments, write what the 
//      function does and why you created it.

console.log(`13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`);

// There is a stray cat with nowhere to go, but I'm unsure whether my house is capable of 
//      housing a pet. Therefore, this function is here to help determine whether I should 
//      or shouldn't take care of the cat.

const isPetCapable = (isChipped, isWoodFloor, income, expenses) => {

    let months = 12;

    let fundsAvailable = 0;

    for (let i = 0; i < months; i++) {
        fundsAvailable = fundsAvailable + income - expenses
    }

    let averageFundsAvailable = fundsAvailable / months;

    if (isChipped === true) {
        return "Contact the original owner!"
    } else if (isWoodFloor === true && averageFundsAvailable > 4000) {
        return "Adopt the Stray Cat!"
    } else {
        return "Take it to an animal shelter!"
    }
}

console.log(isPetCapable(false, true, 6000, 2000));