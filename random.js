//randomize arrows when page is clicked
	//user Math.random()
	//then assign left if random >= number
	//or right if random is <= number


// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  var arbNum = Math.random() * (max - min) + min;
  console.log(arbNum);
  var condition = ((max+min)/2);
  if(arbNum >= condition){
  	document.getElementById('leftContainer').classList.toggle('show');
	  document.getElementById('leftContainer').classList.toggle('hide');
  }
  if(arbNum < condition){
  	     document.getElementById('rightContainer').classList.toggle('show');
  	  	  document.getElementById('rightContainer').classList.toggle('hide');
  }
}