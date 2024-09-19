//strings (methods)
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const product01 = 'Monitor de HD';
const email = 'correo@correo.com'


// .length shows us how many characters there are || extention
console.log(tweet.length);
console.log(product01);


// indexOf => shows us the "position" of the text that we are looking for || position "12"
console.log(tweet.indexOf('JavaScript'));
console.log(product01.indexOf('Tablet'));//when there isn't shows us -1
console.log(email.indexOf('@'));//6

//Includes > shows us true or false  of the text that we are looking for
console.log(tweet.includes('JavaScript'));// true
console.log(product01.includes('Tablet'));//when there isn't shows us false
