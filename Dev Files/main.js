var name = "Marco";
var cookie_string = "name=" + name;
document.cookie = cookie_string;
document.getElementById('greeting').innerHTML="Hello, "+name;

console.log("cookie_string: " + cookie_string);
console.log("document.cookie: " + document.cookie);
