//2 types of Objects

//Singleton which is created by constructor function
// Object.create

//Symbol for uniqueness

const symb=Symbol('my symbol')


//Object literals 

const user={
   namee:'Ahmar',
   "fullName":'Alatf',
   [ symb]:'symbol through object',
   age:18,
   location:'Multan',
   email: 'ahmeraltaf3@gmail.com',
   isLogedIn: false,
   lastLogedInDays:['Monday','wednesday']

}
//first way but we avoid because 
// console.log(user.age);

//Best way is to use templete literals
// console.log(`this is my name ${user['namee']}`);
// console.log(`this is my full name ${user['fullName']}`);
// console.log(`${ user[symb]}`);  



//Override the values

// user.fullName='Muhammd a'
// console.log(user.fullName);

//if you want that someone would not be changes the value of Object

// Object.freeze(user)
// user.email='ahsan@gmail.com'
// console.log(user.email);
// console.log(user);

// user.greeting= function(){
//     console.log('hello this is Greeting');
// }


//this returns the reffernce of function not executed && show this is anonymous function
// console.log(user.greeting);

// execute
// console.log(user.greeting());


//this refer the same Object to access their properties
 user.greetingTwo= function(){
    // console.log(`Two ${this.email}`);
 }

 user.greetingTwo()
//  console.log(user.greetingTwo());


//-----------------Object Two----------------------------//

//singleton Object

const userObject= new Object()

userObject.username='ahmer altaf'
userObject.email='ahmeraltaf1234@yahoo.com'
userObject.isLogedIn=true

// console.log(userObject);

const regularUser={
    firstUser:{
        firstName:'atif',
        lastName: 'Umer',
                firstUserEmail:{
                   email:'atif@yahoo.com'
                 }
    }
}

// ? is used when we used api if their reponse  
// console.log(regularUser.firstUser?.firstUserEmail.email);



// console.log(regularUser.firstUser.firstUserEmail.email);

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
// const newObject= {obj1, obj2}
// console.log(newObject);

//Object.assign({},) its an optional but it garantee to result in single object
//{} its target && obj1 , obj2 act as a source 

// const newObject= Object.assign({},obj1,obj2)


//but best way to as we use in array (Spread operator)
const newObject={...obj1,...obj2}
// console.log(newObject);

// console.log(userObject);

//Keys and values are accessed in an array
// console.log(Object.keys(userObject));
// console.log(Object.values(userObject));

//this return an array which seprate each entery in a seprat array
// console.log(Object.entries(userObject));

//to find this property in this object is exist or not 
// console.log(Object.hasOwnProperty('name'));


//if you get the data from database that is in form of array

const data=[
    {
        name:'wasif',
        email:'om@gmail.com'
    },
    {
        name:'wasif',
        email:'ya@gmail.com'
    },
    {
        name:'wasif',
        email:'asjg@gmail.com'
    }

]

// const getData=data[0].email
// console.log(getData);

// const getData=data.map(e=>e.email )
// console.log(getData);



// ---------------Object De-Structuring-------------------------

const course ={
courseInstructor:'Ahmar',
courseName: 'JavaScript',
price: 250,

}

const {courseInstructor :ci}=course
const {courseName : cn}=course
console.log(cn);