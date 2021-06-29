// let account = ''
// let name =``
// if(account.length >= 4 && account.length <= 12 && name.length>=1 && account.includes('@')) {
//     console.log ('You got strong password');
// }

//     else if(account.length >= 4 && account.length <= 12 ){
//         console.log('You have password');
//     }
//     else{
//         console.log('Input your password')
//     }

// if(name.length>=1){
//     console.log(`Name is done! But password is'nt correctly`)
// }

// else{
//     console.log(`Input your name`)
// }

// let str1 = 'ABC'
// let str2 = 'BCA'
// console.log(a.localeCompare(b, 'en', {sensitivity: 'base'}))
// let ar1 = str1.split('').sort()
// let ar2 = str2.split('').sort()
// console.log(a1)
// function top(){
//     for(let i=0; i<ar1.length; i++){
//         for(let s=0; s<ar2.length; s++){
//             if(ar1[i]===ar2[i])return true;
//             else return false;
//         }
//     }
// }
// console.log(top())


let a = 'BCC'
let b = 'BAC'
let a1 = a.split('').sort()
let a2 = b.split('').sort()
function test(){
    for(let i=0; i<a1.length; i++){
        for(let j=0; j<a2.length; j++){
            if(a1[i]=== a2[i]) return true;
            else return false;
        }
    }
}
console.log(test())
// ABDULLOH
