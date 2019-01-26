function getRandomInt(min, max) {
	min = Math.ceil(min);
 	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var cookie_string = "name=";
id = []

for (i=0; i>10; i++){
	
	var num = getRandomInt(0, 9);
	num.toString();
	cookie_string = cookie_string +  num;
	console.log(num)

}

document.cookie = cookie_string;
document.getElementById('greeting').innerHTML="Hello, "+name;

console.log("cookie_string: " + cookie_string);
console.log("document.cookie: " + document.cookie);

