function contar() {
    var inf = document.getElementById('ini')
    var fi = document.getElementById('fim')
    var pas = document.getElementById('pass')
    var res = document.getElementById('feito')

    if (inf.value.length == 0 || fi.value.length == 0 || pas.value.length == 0){
        window.alert('preenvha os dados')
    } else {
        res.innerHTML = 'Contando:'
        var i = Number(inf.value)
        var f = Number(fi.value)
        var p = Number(pas.value)
       
        for(var c = i; c <= f; c += p){
            res.innerHTML += `${c} `
        }
        if(f < i)
        for(var c = i;c >= f; c-= p){
        res.innerHTML -= `${c} `
        }
    }
}