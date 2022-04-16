//function that return boom! there is a number
// Seven in an array.

let array = [5, 97, 8, 11]

let sevenBoom = (arrayArgument) => {

   let seven = "absent"

   for(let i = 0; i < arrayArgument.length; i++){
       let arrayElem = arrayArgument[i].toString().split('')
       
       for(let j = 0; j < arrayElem.length; j++){

            if(arrayElem[j] == 7){
                seven = "present"
            }

        }

        if(seven == "present"){
            break
        }
       
    }
    return seven == "present"? "Boom!": "None of the items contains no. 7 within them"
}

