var minhaurl = window.location.href;
var codigo = minhaurl.split("?")[1].split("=")[1];

var url = "http://localhost:8080/contas/" +codigo;
alert(url);
var xhttp = new XMLHttpRequest(); 

xhttp.open("GET", url, true); 

xhttp.onreadystatechange = function(){
    if ( xhttp.readyState == 4 && xhttp.status == 200 ) {
        var respota = JSON.parse(xhttp.responseText);
        console.log(respota);

        	let conta = document.createElement("tr");

        	let numeroConta = document.createElement("td");
        	let agenciaConta = document.createElement("td");
        	let tipoConta = document.createElement("td");
        	let saldoConta = document.createElement("td");
        	let titularConta = document.createElement("td");
            let cpf = document.createElement("td");
            let telefone = document.createElement("td");
            let email = document.createElement("td");

        	conta.appendChild(numeroConta);
        	conta.appendChild(agenciaConta);
        	conta.appendChild(tipoConta);
        	conta.appendChild(saldoConta);
        	conta.appendChild(titularConta);
            conta.appendChild(cpf);
            conta.appendChild(telefone);
            conta.appendChild(email);


        	numeroConta.textContent = respota.numero;
        	agenciaConta.textContent = respota.agencia;
        	tipoConta.textContent = respota.tipo;
        	saldoConta.textContent = respota.saldo;
        	titularConta.textContent = respota.titular.nome;
            cpf.textContent = respota.titular.cpf;
            telefone.textContent = respota.titular.telefone;
            email.textContent = respota.titular.email;
        	document.getElementById('tablecad').appendChild(conta);
    }
}

xhttp.send();