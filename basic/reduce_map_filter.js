
const books=[
    {
        title: "Book one",
        edition:"2001",
        author:"Ahmer",
        subject:"Computer"
    },
    {
        title: "Book two",
        edition:"2002",
        author:"wasif",
        subject:"History"
    },
    {
        title: "Book Three ",
        edition:"2003",
        author:"Umar",
        subject:"Science"
    },
    {
        title: "Book four",
        edition:"2004",
        author:"wasif",
        subject:"Computer"
    },
]

    // const filter1= books.filter((item)=> item.subject==="Computer" && item.edition>2001)
    // console.log(filter1);

    const myArr=[]
    books.forEach((item)=>{
        
if(item.subject=="Computer"){
    // if i log this myArr then it stores true false
    //and we initialize before loop to use it after loop 
    //to get values
    myArr.push(item);
}
       
    })
    // console.log(myArr);


    //we add 10  at every number

    const myNum=[1,2,3,4,5,6,7,8,9,10]
//add 10 in this array by using for-each

    // myNum.forEach((item)=>console.log(item +10))

//Same this by using Map
    //Map return Array
            //  const newNum=myNum.map((item)=>{return item +10 })
    // console.log(newNum);

//Chainig suppose we apply .map().map().filter()

const newMap=myNum.map((e)=>e*10).map((e)=>e +1).filter((e)=>e>=21)  
// console.log(newMap);


//Reduce method
//it uses for shopping Cart

// const currentValue=[1,2,3,4,5,6]
// const initialValue=0;
//   const finalValue=currentValue.reduce((accumulator,currentValue)=>{
//     console.log(`Accumulator: ${accumulator}  currVal:  ${currentValue}`)
//     return accumulator+currentValue;

//   },
//   initialValue
//   )
//   console.log(finalValue);



//shopping cart calculation
const shoppingCart=[
    {
        course:"Python",
        price:241

    },
    {
        course:"Java",
        price:1341

    },
    {
        course:"JavaScript",
        price:1000

    },
    {
        course:"Php",
        price: 900

    },
]
  
const totalPrice=shoppingCart.reduce((accumulator,shoppingCart)=>accumulator+shoppingCart.price,0)
console.log(totalPrice);