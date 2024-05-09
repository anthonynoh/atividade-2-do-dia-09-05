function compararDatas() {
    var data1 = new Date(document.getElementById("data1comp").value);
    var data2 = new Date(document.getElementById("data2comp").value);

    if (data1 > data2) {
        document.getElementById("resultado").innerHTML = "A primeira data é maior.";
    } else if (data1 < data2) {
        document.getElementById("resultado").innerHTML = "A segunda data é maior.";
    } else {
        document.getElementById("resultado").innerHTML = "As datas são iguais.";
    }
}

function dataatual() {
    
    var now = new Date();
   
    var formatarData = now.getHours() + ":" + now.getMinutes() + " - " + now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();

    document.getElementById("resultado").textContent = formatarData;
}

function calcularIntervalo() {
    var data1 = new Date(document.getElementById("data1comp").value + "T00:00:00");
    var data2 = new Date(document.getElementById("data2comp").value + "T00:00:00");

    if (data1 > data2) {
        var temp = data1;
        data1 = data2;
        data2 = temp;
    }

    var intervaloMs = Math.abs(data2 - data1);
    var intervaloDias = intervaloMs / (1000 * 60 * 60 * 24);

    document.getElementById("resultado").innerText = "O intervalo entre as datas é de: " + intervaloDias + " dias.";
}