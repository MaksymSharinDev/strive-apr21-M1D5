/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//Template:
/*
;(function(){
  printEx("")
  const functionName = () => null 
  console.log(`${}`)
})()
*/


//Utility functions:
const printEx = (id) => console.log(`\n\nExercise ${id}: \n`)
const randMinMax = function(min,max){ return Math.floor(Math.random() * ((max+1) - min)) + min; }


//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

;(function(){
  printEx("A")
  let test = "iAmString"
  console.log(`test type: ${ typeof test } test value ${ test }`)
})()

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

;(function(){
  printEx("B")
  let sum = 10*20
  const functionName = () => null 
  console.log(`sum type: ${ typeof sum } sum value: ${ sum }`)
})()

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

;(function(){
  printEx("C")
  let random = randMinMax( 0, 20 );

  let _console = {...console}

  console.log = function(...args) {
    let msg = {...args}[0];
    random = randMinMax( 0, 20 )
    _console.log(...args);
  }
  
  for( let i in [...Array(5).keys()] )console.log(`Execution n.${Number(i)+1} of "random" : ${random}`)
  console.log = _console.log

})()

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
;let me = (function(){
  printEx("D")
  let me = {
    name : "Maksym", surname : "Sharin", age : "20"
  }
  console.log(`Me Object: \n ${JSON.stringify(me)}`)
  return me;
})()

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
;(function(me){
  
  printEx("E")
  delete me.age 
  console.log(`Me Object after age remove : \n ${JSON.stringify(me)}`)
})(me)


/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
;(function(me){
  printEx("F")
  me['skills'] = "C,Java,PHP,Python,jsES6,React,Node,RobotFramework,HTML".split(",")
  const functionName = () => null 
  
  console.log(`Me Object after adding skills property: \n ${JSON.stringify(me)}`)
})(me)

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
;(function(me){
  printEx("G")
  me.skills.pop();
  console.log(`Me Object after last skill remove : \n ${JSON.stringify(me)}`)
})(me)

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
;let dice = (function(){
  printEx("1")
  const dice = () => randMinMax(1,6)
  for( let i in [...Array(10).keys()] ) console.log(`*throws dice* result1: ${dice()} result2: ${dice()} result3: ${dice()}`)
  return dice
})()

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
;(function(){
  printEx("2")
  let [N1,N2] = [ 
    { gen : function () { this.value=randMinMax(0,100) ; return this.value } , value : null} , 
    { gen : function () { this.value=randMinMax(0,100) ; return this.value } , value : null} ] 
  const whoIsBigger = (n1,n2) => n1>n2 ? n1 : n2
  for( let i in [...Array(5).keys()] )
  console.log(`test of whoIsBigger with ${N1.gen()} and ${N2.gen()} ---> ${whoIsBigger(N1.value,N2.value)}`)
})()
/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
;(function(){
  printEx("3")
  const splitMe = (str) => str.split(" ")
  console.log(`testing "i am a string" : ${splitMe("i am a string")}`)
})()

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
;(function(){
  printEx("4")
  const deleteOne = (str,flag) => flag ? str.slice(1 , str.length ) : str.slice( 0, str.length -1 )
  console.log(`deleteOne() test with "beat the rage" and true : ${deleteOne("beat the rage",true)}`)
  console.log(`deleteOne() test with "beat the rage" and false: ${deleteOne("beat the rage",false)}`)
})()

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

;(function(){
  printEx("5")
  const onlyLetters = (str) => str.replace(/\d/g," " )
  console.log(`test onlyLetters with "I lead 300 spartans": ${onlyLetters("I lead 300 spartans")}`)
})()

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

;(function(){
  printEx("6")
  let emailRegex = 
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  // source : https://emailregex.com/
  const isThisAnEmail = (str) => str.match( emailRegex ) !== null  
  console.log(`test isThisAnEmail with "notAnEmail#domainnet"          : ${isThisAnEmail("notAnEmail#domainnet")}`)
  console.log(`test isThisAnEmail with "stillnotAnEmail#domain.net"    : ${isThisAnEmail("stillnotAnEmail#domain.net")}`)
  console.log(`test isThisAnEmail with "validname@validdom.yes"        : ${isThisAnEmail("validname@validdom.noooooo")}`)
  console.log(`test isThisAnEmail with "maksym.sharin.work@gmail.com"  : ${isThisAnEmail("maksym.sharin.work@gmail.com")}`)
})()

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
;(function(){
  printEx("7")
  const whatDayIsIt = () => new Date().toLocaleDateString("en-GB")
  console.log(">whatDayIsIt???")
  console.log(`>${whatDayIsIt()} `)
  console.log(">THX")
})()

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
;(function(dice){
  printEx("8")
  let obj = {sum: 0 , values: [] }
  const rollTheDices = (n) =>  { 
  [...Array(n) ].forEach( (el,i,a) => {
    val = dice() 
    obj.values.push(val)
    obj.sum += val   
    } ); return obj }
  console.log(`test of rollTheDices( randMinMax(0,12) ) returned object:`+
  ` ${JSON.stringify(rollTheDices( randMinMax(0,12)))}`)
})(dice)

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
;(function(){
  printEx("9")
  const howManyDays = (aDate) => 
    Date.parse(aDate)  ? 
    Math.floor ( ( (new Date).getTime() - aDate.getTime() ) / ( 1000 * 60 * 60 * 24 ) )
    :"not a date"
  //console.log( , howManyDays( new Date(2021,02,28) ) ) 
  console.log(`test with new Date(2021,02,28) and today as: `+
  `${new Date().toLocaleDateString("en-GB")} \n`+
  `result: ${howManyDays( new Date(2021,02,28) )}\n`) 
  console.log(`test with "aString" string \n`+
  `result: ${howManyDays( "aString" )}\n`) 
})()
/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
;(function(){
  printEx("10")
  const isTodayMyBirthday = (str) => 
  str==="and when it is?" ? 
  new Date(2000,06 - 1, 28).toLocaleDateString("en-GB") : 
  new Date().toLocaleDateString("en-GB") === new Date(2000,6 - 1,28).toLocaleDateString("en-GB")
  console.log(`isTodayMyBirthday? : ${isTodayMyBirthday()}`)
  console.log(`and when it is?    : ${isTodayMyBirthday("and when it is?")}`)
})()


// JS Arrays // Objs

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
;(function(){
  printEx("11")
  const deleteProp = (obj , str ) => { delete obj[str]; return obj }  
  let anObj = {deleteMe : null}
  console.log(`example obj: ${JSON.stringify( anObj )} ->deleteProp-> ${ JSON.stringify( deleteProp(anObj,"deleteMe") )}`)
})()
/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

/* This movies array is used throughout the exercises. Please don't change it :)  */
// Bottom declaration. i can't change it but i can move ;) 
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]

;(function(moviesArray){
  printEx("12")
  const olderMovie = () => {
    let tmpObj
    let tmpYear = Number.MAX_SAFE_INTEGER
    moviesArray.forEach( ( el,i,a )=>{
      tmpYear = Number(el.Year) < tmpYear  ?  (() => {tmpObj = el ; return Number(el.Year)})()  : tmpYear
      console.log(Number(el.Year),tmpYear)
    } )
  return tmpObj
  }
  console.log(`the oldes movie obj is \n ${ JSON.stringify( olderMovie() ).replace(/,/g,",\n") }`)
})(movies)

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
;(function(moviesArray){
  printEx("13")
  const countMovies = () => moviesArray.length
  console.log(`How many movies in the array? ${countMovies()}`)
})(movies)
/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
;(function(moviesArray){
  printEx("14")
  const onlyTheTitles = () => moviesArray.map( obj => obj.Title.replace(":","") )
  console.log(`movie titles array:  \n${ JSON.stringify( onlyTheTitles() ).replace(/,/g,",\n")  }`)
})(movies)

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

;(function(moviesArray){
  printEx("15")
  const onlyInThisMillennium = () => moviesArray.filter( obj => Number(obj.Year) >= 2000 ) 
  console.log(`movie onlyInThisMillennium array:  \n${ JSON.stringify( onlyInThisMillennium() ).replace(/,/g,",\n")  }`)
})(movies)


/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
;(function(moviesArray){
  printEx("16")
  const getMovieById = (id) => {
    let movie = moviesArray.filter( obj =>  obj.imdbID === id )
    return movie.length !== 0 ? movie[0] : "no movie with that ID"
     
  }
  console.log(`movie with ID tt4154796:  \n ${ JSON.stringify( getMovieById("tt4154796") ) }`)
  console.log(`movie with ID dd4154796:  \n ${ getMovieById("dd4154796")  }`)
})(movies)

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/
;(function(moviesArray){
  printEx("17")
  const sumAllTheYears = () => 
  moviesArray
  .map( obj => Number(obj.Year) )
  .reduce( ( sum , date  ) => sum + date  )
  console.log(`sumAllTheYears output:  \n ${sumAllTheYears()}`)
})(movies)
/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/
;(function(moviesArray){
  printEx("18")
  const searchByTitle = (str) => 
  moviesArray
  .filter( (obj) => !!obj.Title.match(str) )
  
  console.log(`searchByTitle with Infinity output:     \n ${ JSON.stringify( searchByTitle("Infinity") ) }`)
  console.log(`searchByTitle with Infiniteeee output:  \n ${ JSON.stringify( searchByTitle("Infiniteeee") ) }`)
})(movies)
/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/
;(function(moviesArray){
  printEx("19")
  const searchAndDivide = (str) =>  { 
    return {
      match:  
      moviesArray.filter( (obj) => !!obj.Title.match(str) ), 
      unmatch:
      moviesArray.filter( (obj) => !obj.Title.match(str) ), 
    }
  } //obj
    console.log( `result for "Avengers" ${searchAndDivide("Avengers")}` )
})(movies)
/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
;(function(moviesArray){
  printEx("20")
  const removeIndex = (index) => { moviesArray.splice(index, 1); return moviesArray } 
  console.log( `delete of `+
  "The Lord of the Rings: The Fellowship of the Ring"+
  `" ${JSON.stringify( removeIndex(0) ).replace(/,/g,",\n") }` )
  
})(movies)


// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

;(function(){
  printEx("21")
  const halfTree = (n) => {
    let strAcc = ""
    for( let i in [...Array(n).keys()] ) {
      strAcc += "*"
      console.log( strAcc  )
    }
  }
  console.log(`test 3: \n`);
  halfTree(3)
  console.log(`test 5: \n`);
  halfTree(5)
})()
/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

