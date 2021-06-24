// First homework
var ball = 60
if(ball >= 95){
    console.log('A+');
}else if(ball < 95 && ball >= 90){
    console.log('A');
}else if(ball < 90 && ball >= 85){
    console.log('B+');
}else if(ball < 85 && ball >= 80){
    console.log('B');
}else if(ball < 80 && ball >= 75){
    console.log('C+');
}else if(ball < 75 && ball >= 70){
    console.log('C');
}else if(ball < 70 && ball >= 65){
    console.log('D');
}else if(ball < 65 && ball >= 60){
    console.log('F');
}else{
    console.log('damingni ol')
}

// Second 
var son = '3@999'
if((son.includes('@')) || (son.includes('$'))(son.includes('#'))){
    console.log('Strong password');
}
else if(son.length>4 && son.length<8){
    console.log('Password is good!');
}else{
    console.log('Wrong Password!')
}



