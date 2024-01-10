//global and block scope

let a=10
let b=20
var c=30

if(true){
    var c=300

}

//this gives the block c value ratherthan global c value 
//due to var thats way we can't use it

// console.log(c);





//parent can't access the child properties but child can
function one(){
    const name='ahmer';
    function two(){
        const website='youtube'
        // console.log(name+website);
    }
    // two()

    //this gives an error
    // console.log(website);

}
// one()



//++++++++++++++++++++++Intersting++++++++++++++




// function add(num){
//     return num+1
// }
// console.log(add(5));

//these three function will not gives an error

// console.log(add(5));
// function add(num){
//     return num+1
// }

//this result variable also called an Expression
//also called hoisting

// const result=function add(num){
//     return num+1
// }
// console.log(result(5));


//Error:  Cannot access 'result' before initialization

// console.log(result(5));
// const result=function add(num){
//         return num+1
//     }