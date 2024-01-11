const arr1=["ahmer","wasif","rashid","umer"]


//for-each not only get elements but it also get index and array
arr1.forEach((element,ind,arr) => {
//   console.log(element ,ind ,arr );
});


//data from backend are in the for of array which contain objects
//for-each is a easy technique to find or get it
const objArray=[
{
    languageName: "javaScript",
    price: 162,
    instructor:"ahmer",

},
{
    languageName: "java",
    price: 222,
    instructor:"Hitesh",

},
{
    languageName: "cpp",
    price: 622,
    instructor:"umer",

},
]

objArray.forEach(element => {
    console.log(element.instructor);
});