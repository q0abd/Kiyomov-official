str = 'pdp academy    '

a = str.repeat(10);
console.log(a);
let summa = 0

for(i=0; i<a.length ;i++){
    if(a.charAt(i)=='p'){
        summa++
    }
    
// str=str.replace('pdp', 'it');
}
console.log(summa);




str = 'pdp academy    '

a = str.repeat(10);
console.log(a);
let sum = 0

for(i=0; i<a.length ;i++){
    if(a.charAt(i)=='d'){
        sum++
    }
    
// str=str.replace('pdp', 'it');
}
console.log(sum);



let pharf = (sum+summa)/2     //O'rta arifmetic
    dharf = Math.sqrt(sum*summa)
console.log(pharf, dharf);

