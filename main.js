function relogiofuncionando()
{
    let displayFuncionando = document.querySelector('.display')
    let tempoNow = new Date()
    let horario = corrigindoHorario(tempoNow.getHours()) + ':' + corrigindoHorario(tempoNow.getMinutes()) + ':' + corrigindoHorario(tempoNow.getSeconds()) 
    displayFuncionando.textContent = horario
}

function calendario(){
    var now = new Date()
    var dname = now.getDay(),
    mes = now.getMonth(),
    dnum = now.getDate(),
    ano = now.getFullYear()
    var mesesAno = ["Janeiro", "Fevereiro", "Março", "abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    var diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
    var ids = ["dias","mes","daynum","ano"]
    var values = [diasSemana[dname], mesesAno[mes], dnum, ano]
    for(var i = 0; i< ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i]

}

function corrigindoHorario(numero){
    if(numero < 10){
        numero = '0' + numero
    }
    return numero
}

calendario()
relogiofuncionando()
setInterval(relogiofuncionando, 1000)