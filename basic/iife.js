//Imediately invoked function expression
//Reason: Sometime we have a seprate file in which we write a DB connection
//that way we want to connect that file imidiately when run the app/web

//Important 2nd Reason we don't want the global polution because child can take someting 
//from thier parents thats way we use IIFE
//terminated with ;



// syntex : ()()   first 1 is the definition 2nd is the execution constructor

(function first(){
    //Named IIFE
    console.log(`DB Connected`);
})();


//it works as a functions (argument /parameter)
(
    (name)=>{
        console.log(`${name}`);
    }
)('ahmer');