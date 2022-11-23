//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberweis:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

favFood = (function (person3) {
    for (let i = 0; i < Object.keys(person3).length; i++) {
        console.log(`Favorite ${Object.keys(person3)[i]}:`)
        if (Array.isArray(Object.values(person3)[i])) {
            Object.values(person3)[i].forEach( 
                name => {
                    if (typeof(name) === 'object') {
                        for (let i = 0; i < Object.keys(name).length; i++) {
                            console.log(`\t${Object.keys(name)[i]}:`)
                            console.log(`\t\t${Object.values(name)[i]}`)
                        }
                    } else {
                        console.log(`\t${name}`)
                    }
                })
        } else {
            console.log(`\t${Object.values(person3)[i]}`)
        }
    }
})

favFood(person3)



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Use an arrow to create the printInfo method
    printInfo = () => {
        return `Name: ${this.name} \nAge: ${this.age}`
    }

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    addAge = (num = 1) => {
        return this.age = this.age + num
    }
}

let person1 = new Person('Ryan', 31)
console.log(person1.printInfo())

person1.addAge()
console.log(person1.printInfo())

person1.addAge()
console.log(person1.printInfo())

person1.addAge()
console.log(person1.printInfo())

person1.addAge(3)
console.log(person1.printInfo())


let person2 = new Person('Steve', 100)
console.log(person2.printInfo())



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const stringLength = (my_string) => {
    return new Promise((resolve, reject) => {
        if (my_string.length > 10) {
            resolve("Big Word")
        } else {
            reject("Small Number")
        }
    })
}

stringLength('my sentence')
    .then((message) => {
        console.log(message)
    })
    .catch((message) => {
        console.log(message)
    })



/*****************************************************
 *
 *  My CodeWars problems in JavaScript
 *
 ****************************************************/


// #1 (redo of Python original solution)
// Link to CodeWars problem: 
console.log(`https://www.codewars.com/kata/541c8630095125aba6000c00`)

/*****************************************************
* My original solution in Python:
******************************************************
def digital_root(n):
    r = 0
    if n < 10:
        return n
    else:
        for i in str(n):
            r += int(i)
        return digital_root(r)

/*****************************************************
* My redo solution in JavaScript:
*****************************************************/
function digitalRoot(n) {
    let n_string = String(n);
    let r = 0;
    if (n < 10) {
        return n
    } else {
        for (i = 0; i < n_string.length; i++) {
            r += parseInt(n_string[i])
        }
    }
    return digitalRoot(r)
}

let num = 16;
// let num = 942;
// let num = 132189;
// let num = 493193;

console.log(digitalRoot(num))


// #2 (original solution in JavaScript)
// Link to CodeWars problem: 
console.log(`https://www.codewars.com/kata/52fba66badcd10859f00097e`)

/*****************************************************
* My original solution in JavaScript:
*****************************************************/
function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let str_new = ''
    
    for (i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            str_new += str[i];
        }
    }
    
    return str_new;
}

let str = "This website is for losers LOL!"
// let str = "No offense but,\nYour writing is among the worst I've ever read"
// let str = "What are you, a communist?"

console.log(disemvowel(str))
