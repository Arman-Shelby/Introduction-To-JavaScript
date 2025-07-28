const salary = 21000;
const isBCS = true;
const height = 68;
hasCar= true;

// if(salary> 20000 && height>66 ){
//     console.log('Shu ..... Patro')
// }
// else{
//     console.log('Onno Patro Khuji ')
// }

// if(salary>25000 || height > 72 ){
//     console.log('Esho baba biya kobul')
// }
// else{
//     console.log('Vaag tuii Mokbul')
// }

//More conditions
if(salary>25000 || height > 72 || isBCS==true ){
    console.log('Esho baba biya kobul');
}
else{
    console.log('Vaag tuii Mokbul');
}

//---------------------------------

if(salary>25000 && height > 72 && isBCS==true ){
    console.log('Esho baba biya kobul');
}
else{
    console.log('Vaag tuii Mokbul');
}

//-----------------------COmplex-Condition

if((salary>25000 && hasCar==true) || isBCS==true){
    console.log('Tomar 14 gusti raaji')
}
else{
    console.log('vaag tui mokbul')
}


if((salary>25000 || hasCar==true) && isBCS==true){
    console.log('Tomar 14 gusti raaji')
}
else{
    console.log('vaag tui mokbul')
}