var num = [9, 0, 7, 8, 7]

 for (var pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]} `)
 }


let pos = num.indexOf(9)
console.log(`o valor 7 esta na posição ${pos}`)


function parimp(n) {
    if (n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}
let res = parimp(1)
console.log(`${res}`)