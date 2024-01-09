//global and block scope

let a=10
let b=20
var c=30

if(true){
    var c=300

}

//this gives the block c value ratherthan global c value 
//due to var thats way we can't use it

console.log(c);





//parent can't access the child properties but child can
function one(){
    const name='ahmer';
    function two(){
        const website='youtube'
        console.log(name+website);
    }
    // two()

    //this gives an error
    // console.log(website);

}
// one()