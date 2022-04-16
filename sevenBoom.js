//function that return boom! there is a number
// Seven in an array.

let array = [5, 0, 8, 11]

let sevenBoom = (arrayArgument) => {
   let seven = "absent"
   for(let i = 0; i < arrayArgument.length; i++){
       if(arrayArgument[i] == 7){
          seven = "present"
        }
   }
   if(seven == "present"){
       return "Boom!"
   }else{
       return  "None of the items contains no. 7 within them"
   }
}

module.exports = sevenBoom