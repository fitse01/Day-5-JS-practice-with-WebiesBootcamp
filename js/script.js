console.log("helloo")

//2 First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

// Remove punctuation
let cleanedText = text.replace(punctuationRegex, '');
// Convert string to array of words
let words = cleanedText.split(' ');

console.log(words);
console.log(words.length);



//5 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

const webTechs = [ 'HTML','CSS','JavaScript','React','Redux','Node','MongoDB' ]
webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
webTechs.reverse() // after sorting we can reverse it
console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

for(i = 0 ; i< webTechs.length ; i++){
    if(webTechs[i] ==='Sass'){
        console.log('Sass is a CSS preprocess');
    }
    else{
        webTechs.push('Sass');
    }
}

// 6 Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
var fullStack = [];
fullStack.push(frontEnd , backEnd);
console.log(fullStack)



//exercice 3
//The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    // Sort the array and find the min and max age
    ages.sort();
    console.log(ages);
    var min = ages[0];
    var max = ages[ages.length - 1];
    console.log("min " +min +  "   "  +"max "+ max);
    // Find the median age(one middle item or two middle items divided by two)
    // const med = ages.length / 2;
    // let median = Math.floor[med];
    // if (median %2 == 0){
    //     console.log(ages[median] ,ages[median +1] );
    // }
    // else {
    //     console.log(ages[median]);
    // }
        let median;
        if (ages.length % 2 === 0) {
            const mid1 = ages.length / 2 - 1;
            const mid2 = ages.length / 2;
            median = (ages[mid1] + ages[mid2]) / 2;
            } 
            else {
            const mid = Math.floor(ages.length / 2);
            median = ages[mid];
            }

console.log("median: " + median);
    // Find the average age(all items divided by number of items)
    var sum = 0;
    let average ;
    for(i=0; i <=ages.length-1; i++){
        sum = sum + ages[i];
    }
    average= sum/ages.length;
    console.log(average);
    
    // Find the range of the ages(max minus min)
    var  range = max - min ;
    console.log(range);
    // Compare the value of (min - average) and (max - average), use abs() method
    var element1 = min - average;
    var element2 = max - average;
    const abs1 = Math.abs(element1);
    const abs2 = Math.abs(element2);
    if(abs2 >= abs1){
        console.log("(max - average) is greater than (min - average)")
    }


const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];
//1.Slice the first ten countries from the countries array

    const firstTenCountries = countries.slice(0, 10);
    console.log(firstTenCountries);
// 2, Find the middle country(ies) in the countries array
    const middleIndex = Math.floor(countries.length / 2);
    const middleCountry = countries[middleIndex];
    console.log(middleCountry);
//3 Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half
    const firstHalf = countries.slice(0, middleIndex);
    const secondHalf = countries.slice(middleIndex);

console.log(firstHalf);
console.log(secondHalf);