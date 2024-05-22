/*var nu = document.getElementById('num')
var v = document.getElementById('vad')
var res = document.getElementById('resultado')
var valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
      return true
    }else {
        return false
    }

}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }

}

function adicionar() { 
    if (isNumero(nu.value) && !inLista(nu.value, valores)){
        valores.push(Number(nu.value))
        var val = document.createElement('option')
        val.text = `valor ${nu.value} adicionado`
        v.appendChild(val)
    
    } else {
        window.alert('preencha os dados corretamente ')
   
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
        window.alert('adicione um elemento')
    } else {
        var tot = valores.length
        var maior = valores [0]
        var menor = valores [0]
        var soma = 0
        var media = 0 
        for (var pos in valores) {
            soma += valores [pos]
            if (valores [pos] > maior)
                maior = valores [pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
    
        res.innerHTML = ''
        res.innerHTML += `<p>ao todo temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p>o maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>o menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>a soma de todos os numeros é ${soma}</p>`
        res.innerHTML += `<p>a media de todos esses numeros é ${media}`

} }
   
   


var n = [10, 192, 12]
for (var pos in n){
    console.log(`a posiçao do ${pos} esta em ${n[pos]}`)
} */

var amigo = {nome:'nicolas',
            idade:'16', 
            peso: 61, 
            engordar(p=0){
    console.log('engordou')
    this.peso += p}
}
{
    amigo.engordar(5)
    console.log(`${amigo.nome} pesa ${amigo.peso}`)
}