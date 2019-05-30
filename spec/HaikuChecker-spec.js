import { isValidString, haikuChecker, isValidArray, vowelCounter, checkForE, checkForDips, checkForLE, countSyllables, lineCounter } from "../src/haiku";

describe ( 'haiku', function() {

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
    let single = "i"

    expect(vowelCounter(inputString)).toEqual(1);
  });

  it('will check if a word ends in e', function(){
    let string = "smile";

    expect(checkForE(string)).toBe(true);
  });

  // it ('will check if two vowels are next to each other', function(){
  //   let string = "book";

  //   expect(checkforDoubleVowel(string)).toBe(true);
  // });

   it ('will check a dipthong exists in the word', function(){
     
     let string ="foil";

   expect(checkForDips(string)).toBe(true);
  });

  it('will check for le', function(){
    let input = "able";
    let input2 = "two";

    expect(checkForLE(input)).toBe(true);
    expect(checkForLE(input2)).toBe(false);
  });

  it ('will count syllables of words', function(){
    let word1 = "foil";
    let word2 = "smile";
    let word3 = "book";
    let word4 = "able";
    let word5 = "dictionary";
    let word6 = "three";

    expect(countSyllables(word1)).toEqual(1);
    expect(countSyllables(word2)).toEqual(2);
    expect(countSyllables(word3)).toEqual(1);
    expect(countSyllables(word4)).toEqual(2);
    expect(countSyllables(word5)).toEqual(4);
    expect(countSyllables(word6)).toEqual(1);
  });

  it('will count the syllables in a line', function(){
    let line = "The word is pal";
    let line2 = "Five Seven Five";
    let line3 = "One Two Three";
    let line4 = "I have one animal that is a dog";
    expect(lineCounter(line)).toEqual(4);
    expect(lineCounter(line2)).toEqual(4);
    expect(lineCounter(line3)).toEqual(3);
    expect(lineCounter(line4)).toEqual(10);
  });

  it('will check the syllables in the first line', function(){
    let haiku = ["one two three four five", "one two three four five six six", "one two three four five"];
    let haiku2 = ["one two three five", "one two three five six six", "one two three four five"];
    expect(haikuChecker(haiku)).toEqual(true);
    expect(haikuChecker(haiku2)).toEqual(false);
  });

});

