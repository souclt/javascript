var agr = new Date ()
var hr = agr.getHours()
console.log(`agr são ${hr} horas`)
if (hr <= 12){
    console.log('bom dia')
}
else if (hr > 19 ){
    console.log('boa noite')
}
else {
    console.log('boa trade')
}