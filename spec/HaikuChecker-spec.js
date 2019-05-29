import { isValidString, isValidArray, vowelCounter } from "../src/haiku";

describe ( 'isValidString', function() {

  it ('should test whether there is string input', function(){
    let stringInput = "Hi, I/'m a string";
    let isValid = isValidString(stringInput);
    expect(isValid).toEqual(true);
  });

  it('will test input array for 3 valid strings', function() {
    let testArray = ["string 1", "string 2", "string 3"];
    expect(isValidArray(testArray)).toBe(true);
  });

  it('will return the number of vowels in a string', function(){
    let inputString = "string";

    expect(vowelCounter(inputString)).toEqual(1);
  });

  it('will check if a word ends in e', function(){
    let string = "smile";

    expect(checkForE(string)).toBe(true);
  });

  it ('will check if two vowels are next to each other', function(){
    let string = "book";

    expect(checkforDoubleVowel(string)).toBe(true);
  });

  it ('will check a dipthong exists in the word', function(){
    let string ="foil";

    expect(checkfordiphthongs(string)).toBe(true);
  });
});

