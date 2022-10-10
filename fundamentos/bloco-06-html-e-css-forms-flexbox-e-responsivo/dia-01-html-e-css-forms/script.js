// Crie um botão que limpe as informações contidas nos campos.

// (Bônus) Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: ‘Dados Inválidos’. Caso contrário, a mensagem ‘Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.’ deverá aparecer na tela.


function handleSubmit(event) {
    event.preventDefault();
  }

window.onload = function () {
    const submit = document.getElementById('submit');
    submit.addEventListener('click', handleSubmit);
};