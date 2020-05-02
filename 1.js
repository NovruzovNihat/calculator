function insertfaiz(){
    let x = document.getElementById("faiz").value;
    document.getElementById("yaz").innerHTML +="/100*";
}
function insert_men(){
    let x = document.getElementById("menfi").value;
    document.getElementById("yaz").innerHTML = "-" + document.getElementById("yaz").innerHTML;
}
function insertc(){
    document.getElementById("yaz").innerHTML = "";
    document.getElementById("son").innerHTML = ""; 
}
function insertbol(){
    let x = document.getElementById("bol").value;
    document.getElementById("yaz").innerHTML += x;
}
function insert1(){
    let x = document.getElementById("bir").value;
    document.getElementById("yaz").innerHTML += x;
}
function insert2(){
    let x = document.getElementById("iki").value;
    document.getElementById("yaz").innerHTML += x;
}
function insert3(){
    let x = document.getElementById("uc").value;
    document.getElementById("yaz").innerHTML += x;
}
function insert4(){
    let x = document.getElementById("dord").value;
    document.getElementById("yaz").innerHTML += x;
}
function insert5(){
    let x = document.getElementById("bes").value;
    document.getElementById("yaz").innerHTML += x;
}
function insert6(){
    let x = document.getElementById("alti").value;
    document.getElementById("yaz").innerHTML += x;
}
function insert7(){
    let x = document.getElementById("yeddi").value;
    document.getElementById("yaz").innerHTML += x;
}
function insert8(){
    let x = document.getElementById("sekkiz").value;
    document.getElementById("yaz").innerHTML += x;
}
function insert9(){
    let x = document.getElementById("doqquz").value;
    document.getElementById("yaz").innerHTML += x;
}
function insert0(){
    let x = document.getElementById("sifir").value;
    document.getElementById("yaz").innerHTML += x;
}
function insertvur(){
    let x = document.getElementById("vur").value;
    document.getElementById("yaz").innerHTML += x;
}
function insertcix(){
    let x = document.getElementById("cix").value;
    document.getElementById("yaz").innerHTML += x;
}
function insertcem(){
    let x = document.getElementById("cem").value;
    document.getElementById("yaz").innerHTML +=x;
}
function insertv(){
    let x = document.getElementById("vergul").value;
    document.getElementById("yaz").innerHTML += x;
}


function hesab(){
    let x = document.getElementById("netice").value;
    document.getElementById("son").innerHTML = eval(document.getElementById("yaz").innerHTML);
}

