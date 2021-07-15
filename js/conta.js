//Este codigo se refere a pagina que lista todas as contas 
var url = "http://localhost:8080/contas";
var xhttp = new XMLHttpRequest(); 

let tipoCt = ["Conta Poupança", "Conta Corrente"];

xhttp.open("GET", url, true); 

xhttp.onreadystatechange = function(){
    if ( xhttp.readyState == 4 && xhttp.status == 200 ) {
        var respota = JSON.parse(xhttp.responseText)
        for(var i = 0; i < respota.length; i++){
        	let conta = document.createElement("tr");

        	let numeroConta = document.createElement("td");
        	let agenciaConta = document.createElement("td");
        	let tipoConta = document.createElement("td");
        	let saldoConta = document.createElement("td");
        	let titularConta = document.createElement("td");

        	conta.appendChild(numeroConta);
        	conta.appendChild(agenciaConta);
        	conta.appendChild(tipoConta);
        	conta.appendChild(saldoConta);
        	conta.appendChild(titularConta);

        	numeroConta.textContent = respota[i].numero;
        	agenciaConta.textContent = respota[i].agencia;
        	tipoConta.textContent = tipoCt[respota[i].tipo];
        	saldoConta.textContent = respota[i].saldo;
        	titularConta.textContent = respota[i].titular.nome;
        	document.getElementById('tablecad').appendChild(conta);
        }
    }
}

xhttp.send();