mark = 50;
//Passed Or Failed
if(mark>=33 && mark<100){
    console.log('Passed');
}
else if(mark<0 || mark>100){
    console.log('Cannot validate');
}
else{
    console.log('Failed');
}

//Grade
if(mark>100 || mark<=0){
 console.log('Please Input a Valid Mark');
}
else if(mark>=80){
    console.log('A+')
}
else if(mark>=70 && mark<80){
    console.log(' A');
}
else if(mark>=60 && mark<70){
    console.log('A-');
}
else if (mark>=50 && mark<60){
    console.log('B');
}
else if (mark>= 40 && mark<50){
    console.log('B-');
}
else if(mark>=33 && mark<40){
    console.log('C');
}
else{
    console.log('Better Luck Next time')
}
