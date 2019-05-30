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
//string is a single word
export function vowelCounter(input){
  let vowelArray = ['a','e','i','o','u','y','A','E','I','O','U','Y'];
  let splitString = input.split('');
  let counter = 0;
  
  for(let i = 0; i < vowelArray.length; i++ ){
    for(let j = 0; j < splitString.length; j++){
      if(vowelArray[i] == splitString[j]){
        counter++;
      }
    }
  }
  if(counter == 0){
    counter++;
  }
  return counter;
}

//check for words that end with an 'e'
export function checkForE(input){
  var checkE = /e$/;
  return checkE.test(input);
}

export function checkForY(input){
  var checkY = /^y/i;
  return checkY.test(input);
}


export function checkForDips(input){
  let dipArray = [/ow/, /ou/, /ie/, /oi/, /oo/, /ea/, /ee/, /ai/,/aa/, /uu/, /ii/, /oa/, /io/];
  let flag = false;
  dipArray.forEach(function(regex){
    if(regex.test(input)){
      flag = true;
    }
  });
  return flag;
}

export function checkForLE(input){
  var checkLE = /le$/;
  return checkLE.test(input);
}

//big function for haiku checker

export function haikuChecker(haiku){
  let lineOne = haiku[0];
  let lineTwo = haiku[1];
  let lineThree = haiku[2];
  if(lineCounter(lineOne) != 5){
    return false;
  }
  if(lineCounter(lineTwo) != 7){
    return false;
  }
  if(lineCounter(lineThree) != 5){
    return false;
  }
  return true;
}

export function countSyllables(word){
  let dipEE = /ee$/;
  let counter = vowelCounter(word);
  if(vowelCounter(word) != 1){
    if(checkForE(word) && !checkForLE(word)){
      counter--;
    }
  }
  if (checkForDips(word) && !dipEE.test(word)){
    counter--;
  }
  if(checkForY(word)){
    counter--;
  }
  return counter;
}

export function lineCounter(line){
  let counter = 0;
  let words = line.split(' ');
  words.forEach((word) => counter += countSyllables(word));
  return counter;
}