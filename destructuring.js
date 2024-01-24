/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let arr = [1, 2, 3];
let [a1, b1, c1] = arr;
//console.log(a,b,c);

// Destructuring objects
let obj = {
    a: 1,
    b: 2,
    c: 3,
};
let {a,c,b} = obj;
//console.log(c);

let jobs = {
    mike: 'designer',
    jill: 'astrophysicist',
    alicia: 'pianist'
};
let {mike, jill: person2, alicia: person3} = jobs;
//console.log(mike, person2, person3);


// Destructuring subsets
let languages = ['english', 'french', 'polish', 'arabic'];
let [john, alice] = languages;
let [,, mary, Jones] = languages;
//console.log(john, alice);
//console.log(mary, Jones);

let languagesOrder = {
    firstLanguage: 'English',
    secondLanguage: 'French',
    thirdLanguage: 'Polish',
    fourthLanguage: 'Arabic'
};
let {firstLanguage: John, fourthLanguage: jones} = languagesOrder;
//console.log(John, jones);


// Using rest parameter syntax
let fruits = ['banana','orange', 'berries', 'kiwi'];
let [myFavourite, secondFavourite, ...rest] = fruits;
//console.log(myFavourite, secondFavourite, rest);

let favouriteFoods = {
    john: 'apple',
    mary: 'banana',
    peter: 'aubergine',
    mike: 'saussage'
};
let {john: Johnny, peter, ...others} = favouriteFoods;
console.log(Johnny, peter, others);