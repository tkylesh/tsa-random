//randomize arrows when page is clicked
	//user Math.random()
	//then assign left if random >= number
	//or right if random is <= number


// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  var arbNum = Math.random() * (max - min) + min;
  console.log(arbNum);
  if (arbNum >= (max+min/2)){
  	document.getElementById('leftContainer').classList.add('show');
	  	if(document.getElementById('leftContainer').classList.contains('hide')){
	  	document.getElementById('leftContainer').classList.remove('hide');
	  	}
  	document.getElementById('rightContainer'.classList.add('hide');
  		if(document.getElementById('rightContainer').classList.contains('show')){
	  	document.getElementById('leftContainer').classList.remove('show');
	  	}

  }else if(arbNum < (max+min/2)){
  	document.getElementById('rightContainer').classList.toggle('show');
  	  	if(document.getElementById('leftContainer').classList.contains('hide')){
	  	document.getElementById('leftContainer').classList.remove('hide');
	  	}
  	document.getElementById('leftContainer').classList.toggle('hide');
  }else{
  	alert("There was an error");
  }
}