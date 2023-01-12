
// s = "1"

// for (i = 1; i<=1; i++){
//     s = s + ""
// }

//   console.log(s)
 


// let n = 5;

//  for (i = 1; i <= 5; i++) {
//      row = "" ;
//     for (j = 1; j <= n; j++) {
//        row += " " + j;
//    }
//    console.log(row);
// }


//  n=5
// for (count = 1; count <= 5; count++) {

//     console.log(count,count,count,count,count)
// }

// n = 7
// for ( count=1; count<=7; count++){
//     console.log(count,count,count,count,count,count,count)
// }

// for (let i = 1; i<=5; i++ ) {
//     if(i%2==0){
//  console.log(i,i,i,i,i)
//    }
//     else{
//         console.log(i,i,i,i,i)
// }
// }
//  const n = 7
// for (let i = 1; i<=7; i++ ) {
//     if(i%2==0){
//  console.log(i,i,i,i,i,i,i)
//    }
//     else{
//         console.log(i,i,i,i,i,i,i)
// }
// }
 
// const n=9
// for(a =1; a<=n; a++){
//  output=" "
//  for( b=1; b<=n; b++ ){
//   output=output+a+" "
//   }
//   console.log(output)
// }


// const n=5
// for( let x =1; x<=n; x++){
//  output=" "
//  for( let y=1; y <=x; y++ ){
//   output +=y + " "
//   }
//   console.log(output)
// }
let rows = 5;


let pattern = "";


for (let n = 1; n <= rows; n++) {
   
   for (let num = 1; num <= n; num++) {
      pattern += num;
   }

   
   pattern += "\n";
}
console.log(pattern);












