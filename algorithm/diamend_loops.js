let n = 4;
let string = "";
for (let i = 1; i <= n; i++) {
for (let j = 1; j <= n - i; j++) {
  string += " ";
}
for (let k = 1; k <= i; k++) {
  string += i + " ";
}
string += "\n";
}
for (let i = n - 1; i >= 1; i--) {
for (let j = 1; j <= n - i; j++) {
  string += " ";
}
for (let k = 1; k <= i; k++) {
  string += i + " ";
}
string += "\n";
}
console.log(string);





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



