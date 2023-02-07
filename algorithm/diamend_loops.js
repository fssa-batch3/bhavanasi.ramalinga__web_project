// let n = 4;
// let string = "";
// for (let i = 1; i <= n; i++) {
// for (let j = 1; j <= n - i; j++) {
//   string += " ";
// }
// for (let k = 1; k <= i; k++) {
//   string += i + " ";
// }
// string += "\n";
// }
// for (let i = n - 1; i >= 1; i--) {
// for (let j = 1; j <= n - i; j++) {
//   string += " ";
// }
// for (let k = 1; k <= i; k++) {
//   string += i + " ";
// }
// string += "\n";
// }
// console.log(string);





// n = 5;
// string=" ";
// for (let i = 1; i<=n; i++ ){
//     string += " "+i;

// }
// console.log(string);


// n = 5;
// string="";
// for ( let i=5; i>=1; i--){
//     string +=" "+i;

// }
// console.log(string);

 
// n=7;
// string="";
// for ( let i=1; n>=i; i=i+2 ){
//     string+=" "+i;
// }
// console.log(string)


// n = 5;
// string=" ";
// for (let i = 1; i<=n; i++ ){
//     string += " "+i;

// }
// for( let i=n-1; i>=1;i--){
//     string +=" "+i;
// }
// console.log(string);






let n = 5;
// Repeat n times
for(let i = 1; i <= n ; i++) {
//	//spaces + sequence of numbers
	console.log( getSpaces((n - i + 1)) + getNumSequence(i));
}
 
//console.log( getSpaces(3) + getNumSequence(1));


//console.log( getSpaces(2) + getNumSequence(2));

//console.log( getSpaces(1) + getNumSequence(3));

function getSpaces(n) {
	let str = "";
	for(let i = 1; i <= n ; i++) {
		str = str + " ";
	}
	return str;
}


function getNumSequence(n) {
	
	let numseq_str = "";
	for(let i = 1; i <= n; i++) {
		numseq_str = numseq_str + i + " ";

	}
	return numseq_str;
}
		
//Reverse half diamond
	//Repeat 2 times
		// spaces + sequence in reverse of numbers