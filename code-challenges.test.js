// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// create a describe it test that will take in a parameter for a string and expects the output to be the string coded

describe("code", () => {
    it("takes in a string and returns a coded message", () => {
        const secretCodeWord1 = "Lackadaisical"
        const secretCodeWord2 = "Gobbledygook"
        const secretCodeWord3 = "Eccentric"
        expect(code(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(code(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(code(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// I failed
// ⁡⁢⁣⁢FAIL⁡  ./code-challenges.test.js
// code
//   ✕ takes in a string and returns a coded message (1 ms)

// ⁡⁢⁣⁢● code ⁡› takes in a string and returns a coded message

//   ReferenceError: code is not defined


// b) Create the function that makes the test pass.
// input:"Lackadaisical"
        //"Gobbledygook"
        //"Eccentric"
    // create a function called code
    // the code will take a string in the parameter 
    // create a variable that will replace ALL(each letter as their own) the letters we want to change to the corresponding number(remember caps are their own entity)
    //create a for loop to iterate through the string with the new variable created.
// output:"L4ck4d41s1c4l"
        // "G0bbl3dyg00k"
        // "3cc3ntr1c"

    //    const code = (crypt) => {
    //     let str = crypt.replace("a", "4").replace("e", "3").replace("i", "1").replace("o", "0");{
    //         return str
    //     }
    //    }


    // const code = (crypt) => {
    //    const secret = crypt.map((value) => {
    //         if(value === "a"){
    //             value = 4
    //         }elseif(value === "e");{         <----failed attempt
    //             value = 3
    //         }elseif(value === "i");{
    //             value = 1
    //         }elseif(value === "o");{
    //             value = 0
    //         }
    //         return secret
    //     }) 
    // }

        const code = (crypt) => {
            let str = crypt.replaceAll("a", "4").replaceAll("e", "3").replaceAll("E", "3").replaceAll("i", "1").replaceAll("o", "0")
            for(let i = 0; i <= str.length; i++){
                return str 
            } 
        }

    //     I passed
    //     ⁡⁣⁢⁢PASS⁡  ./code-challenges.test.js
    //     code
    //       ⁡⁢⁢⁢✓ takes in a string and returns a coded message (2 ms)⁡
    //   Test Suites: 1 passed, 1 total
    //   Tests:       1 passed, 1 total
    //   Snapshots:   0 total
    //   Time:        0.263 s, estimated 1 s


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

        // create a describe it test that will take in an array and letter and expect the output to be only the values with that letter in them

        describe("arr", () => {
            it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
                const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
                const letterA = "a"
                const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
                const letterE = "e"
                expect(arr(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
                expect(arr(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
            })
        })

    // I failed
    // ⁡⁢⁣⁢FAIL⁡  ./code-challenges.test.js
    // code
    //   ✓ takes in a string and returns a coded message (3 ms)
    // arr
    //   ✕ takes in an array of words and a single letter and returns all the words that contain that particular letter
  
    // ● arr › takes in an array of words and a single letter and returns all the words that contain that particular letter
  
    //   ReferenceError: arr is not defined
        

// const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


// b) Create the function that makes the test pass.
    // input:["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        // ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        // create a function called arr
        // the function will take in an array for the parameter as well as a string of a letter
        // create a variable with an empty array
        // create a for loop to iterate throught the array
        // if the string includes the varible of we will push it into the empty array
        // output:["Apple", "Banana", "Orange"]
//                 ["Cherry", "Blueberry", "Peach"]

        // const arr = (array, letter) => {
        //     let newArr = []
        //     for(let i =0; i <= array.length; i++){
        //         if(array.includes(letter)){
        //             newArr.push(array)
        //         }
        //     }   return newArr
        // }

        // const arr = (array, letter) => {
        //     let newArr = []
        //     let mapped = array.map(value =>{
        //      if(value.includes(letter)){
        //         newArr.push(mapped)
        //      }}
            
        //       ) 
        //             return newArr
        // }
        

        const arr = (array, letter) => {
            let newArr = array.filter(value => {
                if(value.toLowerCase().includes(letter)){
                    return value
                }
            })
            return newArr
        }



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

        // create a describe it test that takes in an array and have the expect equal that array

            describe("fh", () => {
                it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
                    const hand1 = [5, 5, 5, 3, 3]
                    const hand2 = [5, 5, 3, 3, 4]
                    const hand3 = [5, 5, 5, 5, 4]
                    expect(fh(hand1)).toEqual(true)
                    expect(fh(hand2)).toEqual(false)
                    expect(fh(hand3)).toEqual(false)
                })
            })

        // I failed   
        // ⁡⁢⁣⁢FAIL⁡  ./code-challenges.test.js
        // code
        //   ✓ takes in a string and returns a coded message (2 ms)
        // arr
        //   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter (6 ms)
        // fh
        //   ✕ takes in an array of 5 numbers and determines whether or not the array is a full house (3 ms)
      
        // ⁡⁢⁣⁢● ⁡fh › takes in an array of 5 numbers and determines whether or not the array is a full house
      
        //   ReferenceError: fh is not defined

// const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// Expected output: false


// b) Create the function that makes the test pass.

            // create a function called fh
            // create a variable that sorts the array
            // create a for loop that iterates through the array.
            // if the array at index zero is same as array index 1 ⁡⁢⁢⁣AND array indx 2 is the same as index 3 and then 3 to 4
            // new variable is true
            // otherwise false
            ⁡

            const fh = (win) => {
                let ray = win.sort()
                for (let i =0; i < ray.length; i++){
                    if(ray[0] === ray[1] && ray[2] === ray[3] && ray[3] === ray[4]){
                        ray = true
                    }else{
                        ray = false
                    }
                } return ray
            }

        //     I passed
        //     ⁡⁣⁢⁣PASS ⁡ ./code-challenges.test.js
        //     code
        //       ✓ takes in a string and returns a coded message (8 ms)
        //     arr
        //       ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter
        //     fh
        //       ✓ takes in an array of 5 numbers and determines whether or not the array is a full house (1 ms)
          
        //   Test Suites: 1 passed, 1 total
        //   Tests:       3 passed, 3 total
        //   Snapshots:   0 total
        //   Time:        0.473 s, estimated 1 s
        //   Ran all test suites.