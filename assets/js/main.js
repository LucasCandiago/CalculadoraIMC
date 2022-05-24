const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
   e.preventDefault();
   const inputPeso = e.target.querySelector('#peso');
   const peso = parseFloat(inputPeso.value)
   
   
   const inputAlt = e.target.querySelector('#altura');
   const altura = parseFloat(inputAlt.value);

   const result = peso / (altura**2);
   const imc = result.toFixed(2)
   let situation;

   if (imc < 18.5) {
        situation = 'Abaixo do peso';
   } else if (imc >= 18.5 && imc <= 24.9) {
        situation = 'Normal';
   } else if (imc >= 25 && imc <= 29.9) {
        situation = 'Sobrepeso';
   } else if (imc >= 30 && imc <= 34.9) {
        situation = 'Obesidade Grau 1';
   }else if (imc >= 35 && imc <= 39.9) {
        situation = 'Obesidade Grau 2';
   }else {
        situation = 'Obesidade Grau 3';
   }

   if (!peso || peso === NaN) {
       setResultado("Peso inválido", 'error')
   } else if (!altura || altura === NaN) {
       setResultado("Altura inválida", 'error')
   } else {
       setResultado(`Seu IMC é de ${imc}. (${situation})`, 'p-result')
   }
})

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, className) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP()
    p.classList.add(className);
    p.innerHTML = msg;
    resultado.appendChild(p)
}