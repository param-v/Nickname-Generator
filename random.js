// Random Library JS

//Return a random decimal b/t low (inclusive) and high (exclusive)
function randomDec(low,high){
    return Math.random()*(high - low) + low;
  }
  
  //Return a random decimal b/t low (inclusive) and high (exclusive)
  function randomInt(low,high) {
    return Math.floor(randomDec(low,high));
  }
  