function position(letter){
  index = letter.charCodeAt(0) - "a".charCodeAt(0) +1; 
  return `Position of alphabet: ${index}`;
}
