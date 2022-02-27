for(var index = 1; index < 101; index++){
    if(index%3 == 0){
       if(index%5 == 0){
        console.log("FizzBuzz");
       }
       else{
        console.log("Fizz");
       }
    }
    else if(index%5 == 0){
        if(index%3 == 0){
            console.log("FizzBuzz");
           }
        else{
            console.log("Buzz");
           }
    }
    else{
        console.log(index);
    }
}