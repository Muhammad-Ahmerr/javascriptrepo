//(For Of ) LOOP

// let myArr=[2,3,1,5,8]
// for (const num of myArr) {
//     console.log(num);
// }

// const map= new Map()
// map.set('name','ahmer')
// map.set('price',434)
// map.set('email','ahmeraltaf3@gmail.com')
// map.set('password','password123')

// for (const keys of map) {
//     // console.log(keys);
// }



// const map= new Map()
// map.set('name','ahmer')
// map.set('price',434)
// map.set('email','ahmeraltaf3@gmail.com')
// map.set('password','password123')

// for (const [keys,values] of map) {
//     // console.log(keys, 'is =',values);
// }


//With Break()

// const word="Hello World"
// for (const i of word) {
//     if(i==' ')
//     continue;
//     console.log(i);
// }



// ++++++++++++++++++++++++++++++++++++++++++=

//For-of loop is not be iteratable in Objects

// const myObj={
//     game: "NFS",
//     name: "ahmer"
// }

// for (const [key,value] of myObj) {
//     console.log(`${key} and ${value}`);
// }
const myObj={
    game: "NFS",
    name: "ahmer"
}


for (const key in myObj) {
// console.log(`${key} : has value ${myObj[key]}`);
}

let myArr=[2,3,1,5,8]

for (const index in myArr) {
   
        // console.log(myArr[index]);
    
}


const map= new Map()
map.set('name','ahmer')
map.set('price',434)
map.set('email','ahmeraltaf3@gmail.com')
map.set('password','password123')

// for (const key of map) {
//     console.log(`${key} a`);
// }