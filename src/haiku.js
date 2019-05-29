export function isValidString(input){
  if(typeof input === "string" && input !== ""){
    return true;
  }else{
    return false;
  }
}

export function isValidArray(inputArray) {
  let flag = true;
  for(let i = 0; i < inputArray.length; i++){
    if(!isValidString(inputArray[i])){
      flag = false;
    }
  }
  if(inputArray.length !== 3){
    flag = false;
  }
  return flag;
}

//split the string into an array
//compare vowel array and string array
export function vowelCounter(input){
  let vowelArray = ['a','e','i','o','u'];
  let splitString = input.split('');
  let counter = 0;
  
  for(let i = 0; i < vowelArray.length; i++ ){
    for(let j = 0; j < splitString.length; j++){
      if(vowelArray[i] == splitString[j]){
        counter++;
      }
    }
  }
  return counter;
}

export function haikuChecker(){
}

