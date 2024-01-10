//browser mai jo b Global Object hai wo WINDOWS objects hain

const user={
    username:'ahmer',
    price:1882,
    welcome : function getData(){
           console.log(`${this.username} is a user`);
        //this THIS keyword return all the va lue in this scope

        console.log(this);
    }
}
// user.welcome()

// console.log(this);


//this THIS will retun the empty list 
// console.log(this);



//Arrow Function

// const user1=()=>{
//     const website='youtube'
//     console.log(this);
// }

// user1()


//implicit return
const user1=()=>(console.log(this))
// user1()

function user2(){

    //cannot we THIS is function
    //it works in Objects
    const username2='ahmer2'
    console.log(this.username2);
}
// user2()