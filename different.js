//odd numbers 
// for (let i = 0; i<20 ; i++){
//         if(i%2 ===1){
//         console.log(i);
//     }
// }

//!=(Note equels to )
// for (let i = 0; i<20 ; i++){
//         if(i%2 !==0){
//         console.log(i);
//     }
// }

//i equels to i plus 2
// for (let i = 0; i<20 ; i+=2){
//     //     if(i%2 !==0){
//     //     console.log(i);
//     // }
//     console.log(i);

// }

//Give me the list of numbers between 1 to thirty devisible by 5

// for(let i = 1; i<=300;  i++){
//     if(i%5===0){
//         console.log(i);
//     }
// }
//divisible by 3 or 5
// for(let i = 1; i<=100;  i++){
//     if(i%3===0 || i%5===0){
//         console.log(i);
//     }
// }

// for(let i = 1; i<=100;  i++){
//     if(i%3===0 && i%5===0){
//         console.log(i);
//     }
// }
// Give me the number from 1 to 30 that are devisible by three
let sum = 0;
for(let i = 1; i<=30; i++ ){
    if(i%3===0){
        console.log(i);
        sum = sum+ i ;

        console.log('Sum of the numbers: ', sum);
    }

}
console.log('Sum of the numbers: ', sum);