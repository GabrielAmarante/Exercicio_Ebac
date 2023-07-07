function validarFormulario(event) {
    event.preventDefault(); // Evita o envio do formulário

    var inputA = document.getElementById('inputA');
    var inputB = document.getElementById('inputB');

    var numeroA = parseInt(inputA.value);
    var numeroB = parseInt(inputB.value);

    if (numeroB > numeroA) {
      // Número B é maior que número A, formulário é válido
    alert('Formulário válido! Número B é maior que número A.');
    } else {
      // Número B não é maior que número A, formulário é inválido
    alert('Número B deve ser maior que número A!');
    }
}
var formulario = document.getElementById('fomulario');
formulario.addEventListener('submit', validarFormulario);