function tabuada() {
    var nu = document.getElementById('num')
    var tb = document.getElementById('tab')
    if (nu.value.length == 0){
        window.alert('preencha os dados')
    } else {
        var n = Number(nu.value)
        tb.innerHTML = ''
        for ( var c = 1; c <= 10; c ++){
            var item = document.createElement('option') 
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tb${c}`
            tb.appendChild(item)
        }
    }
}
    

/*var item = document.createElement('option')
            item.text =  `${n} X ${c} = ${n*c}`
            tb.appendChild(item)
            c++
*/
