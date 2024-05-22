function verificar() {
    var data = new Date
    var nasc = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > nasc){
        alert('verifique os dados e tenta da certo')
    } else {
        var fsex = document.getElementsByName('gen')
        var idade = nasc - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10){
           //crianca//
           img.setAttribute ('src', 'cr7_tres_meses.webp')
            }else if (idade < 21){
                //jovem//
           img.setAttribute ('src', 'cristiano_ronaldo_crian__a-474x474.webp')
            }else if (idade < 50){
                //adulta//
            img.setAttribute ('src', '101294946-topshot-portugals-forward-07-cristiano-ronaldo-celebrates-scoring-his-teams-second-go.webp')
            }else  {
                //idoso//
                img.setAttribute ('src', 'cristiano40.webp')
            }
     
         }if (fsex[1].checked){
         genero = 'mulher'
        if (idade >= 0 && idade < 10){
           //crianca//
           img.setAttribute('src', '153816474.webp')
        }else if (idade < 21){
            //jovem//
            img.setAttribute('src', 'lana crianca.jpeg')
        } else if (idade < 50){
            //adulta//
            img.setAttribute('src', 'lanaadulta.jpg')
        }else{
            //idoso//
            img.setAttribute('src', 'velha.jpeg')
        }
    }
        res.innerHTML = '<p>'
        res.style.textAlign = 'center'
        res.style.marginTop = '15px'
        res.style.paddingBottom = '15px'
        res.innerHTML = `detectamos ${genero} com ${idade}`
        res.appendChild(img)

    }
}
