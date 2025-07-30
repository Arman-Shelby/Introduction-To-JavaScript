//ternary --> three parts
//     ?    :     ;
//condition  ?  do something when condition matches : do something when dosen't matches.

const age = 20;

//Normal If/Else

// if(age>=18){
//     console.log('You can Vote');
// }
// else{
//     console.log('Jao Ghumao')
// }


//Simple Ternary

// age >=18 ? console.log('Vote dio') : console.log('Jao bacha ghumao')



let price= 1200;
const isLeader = true;

// if(isLeader === true){
//     price= 0;
// }
// else{
//     price = price+100;
// }
// console.log(price);

// price = isLeader===true? price=0 : price+100; 
// console.log(price)


//Optional semi advance Ternary

price = isLeader === true? price>1000? price=price/2 : price = 0 : price = price+100;
console.log(price);