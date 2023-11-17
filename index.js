const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// const lancamento = "2023 11 17 15:39:00"
const lancamento = (hoje - setTimeout)

function contadorRegreccivo() {

    const dataLanc = new Date(lancamento)
    const hoje = new Date();
    const segTotal = (dataLanc - hoje) / 1000;

    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    minutos.innerHTML = formataTempo(finalMinutos+' :');
    segundos.innerHTML = formataTempo(finalSegundos);

    if(finalMinutos < 1){
        document.getElementById("minutos").style = 'color : red'
        document.getElementById("segundos").style = 'color : red'
        if(finalSegundos < 20){
            
        }
    }
}

function formataTempo(tempo) {
    if (tempo < 10) {
        return `0${tempo}`;
    } else {
        return tempo ;
    }
    //return tempo <10? `0${tempo}` : tempo
}

contadorRegreccivo();

setInterval(contadorRegreccivo, 1000)