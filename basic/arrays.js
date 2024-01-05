const myArr1=[5,3,2,1,4,8]
const myArr2=[0,2,3,1,5]
// console.log( myArr1);
// myArr1.push(9)
// myArr1.pop()


//This placed the value at 1st index
// myArr1.unshift(0)

//This remove the value at 1st indedx with no parameter
// myArr1.shift()


// console.log(myArr1.concat(myArr2));
// console.log(myArr1.includes(1));
// console.log(myArr1);
// console.log(myArr1.indexOf(8));
// console.log(myArr1.slice(1,4));

//Important it count last number && manipulate the Orignal string
// console.log(myArr1.splice(1,4));
// console.log(myArr1);


//join gives the value as a String
// const arr3= myArr1.join()
// console.log(typeof arr3);



// ---------------------Part 2---------------------------------------

const arrN1=['ahmer','Ahsan','Altaf']           
const arrN2=['waris','Haris','Zain']

// console.log(arrN1.concat(arrN2));

//Spread operator to used aray with other array
// let arrN3=[...arrN1,...arrN2]
// console.log(arrN3);


//This provide list within list
// arrN1.push(arrN2)
// console.log(arrN1);

const arrN4=['ahmer',['waris','rauf','amir'],'umair',['nouman',['arshad','usama']]]


//This is too much complicated to find nest array
// console.log(arrN4[3][1][0]);

//Alternative
//in flat you provide the depth of array
// let arrN5=arrN4.flat(2)
// console.log(arrN5);


//If you are scrapping the data then you can check thats an array or not
// console.log(Array.isArray('ahmer'));

//if you covert data to array then use "from"
// console.log(Array.from('ahmer'));

//if you convert Object to Array then you have to specify either key OR their value 
//Otherwise it give empty array[]

// console.log(Array.from({name:"ahmer"}));                                     

//covert the veriable to array
// let score1=100;
// let score2=200;
// let score3=300;
// let score4=400;

// console.log(Array.of(score1,score2,score3,score4));

// -------------Arrays Method() but not complet--------------------

const nArr1=["ahmer","ahsan","wasif","zaid"]
const nArr2=["umain","ahsan","rashid","zubair"]

// console.log(nArr1.concat(arrN2));
// console.log(nArr1 );

const numbers = [1, 2, 3, 4, 5];
// const foundNumber = numbers.find(num => num > 3);
// console.log(foundNumber);
 


