function btn1() {
    document.getElementById('inputArea').style.display = 'block';
    document.getElementById('inputArea1').style.display = 'none';
    document.getElementById('ad').value = ""
    document.getElementById('su').value = ""
}
function btn2() {
    document.getElementById('inputArea1').style.display = 'block';
    document.getElementById('inputArea').style.display = 'none';
    document.getElementById('ad').value = ""
    document.getElementById('su').value = ""
}
let din = 0.00
const saldo = document.getElementById("saldo")
const add = document.getElementById("add")
const sub = document.getElementById("sub")
add.addEventListener("click",function() {
    let ad = Number(document.getElementById('ad').value)
    din+=ad
    atela()
})
sub.addEventListener("click", function() {
    let su = Number(document.getElementById('su').value);
    if (din < su) { 
        document.getElementById('telo').innerText = "Não foi possivel completar a transação , saldo insuficiente"
    } else {
        din -= su;
        atela();
        document.getElementById('su').value = "";
        mensagem.textContent = ""; 
    }
})
function atela() {
    saldo.textContent = `R$ ${din.toFixed(2)}`
}
function cm() {
    document.getElementById('inputArea1').style.display = 'none';
    document.getElementById('inputArea').style.display = 'none';
    
}
function dp () {
    document.getElementById('inputArea1').style.display = 'none';
    document.getElementById('inputArea').style.display = 'none';
    
}
