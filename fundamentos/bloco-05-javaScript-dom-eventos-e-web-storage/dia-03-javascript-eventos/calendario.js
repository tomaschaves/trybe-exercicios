function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  
  function createDays(){
    let daysList = document.querySelector('#days');

    for(let index = 0; index < decemberDaysList.length; index += 1){
        let day = decemberDaysList[index];
        let dayLi = document.createElement('li');
        dayLi.innerHTML = day;
        
        if (day === 24 || day === 31){
            dayLi.className = 'day holiday';
            daysList.appendChild(dayLi);
        } else if (day === 4 || day === 11 || day === 18){
            dayLi.className = 'day friday';
            daysList.appendChild(dayLi);
        } else if (day === 25){
            dayLi.className = 'day holiday friday';
            daysList.appendChild(dayLi);
        } else {
            dayLi.className = 'day';
            daysList.appendChild(dayLi);
        }
    }
}
createDays();

function createFeriados(buttonName){
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    newButton.id = 'btn-holiday';

    newButton.innerHTML = buttonName;

    buttonContainer.appendChild(newButton);
}

createFeriados('Feriados');



// Parte 3

// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".

// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.

function backgroundHoliday(){
    let colorHoliday = document.querySelectorAll('.holiday');
    let buttonHoliday = document.querySelector('#btn-holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let newColor = 'green';
    
    buttonHoliday.addEventListener('click', function(){
        for (let index = 0; index < colorHoliday.length; index += 1){
            if (colorHoliday[index].style.backgroundColor === newColor){
                colorHoliday[index].style.backgroundColor = '';
            } else {
                colorHoliday[index].style.backgroundColor = newColor;
            }
        }
    });
}

backgroundHoliday();


// Parte 4

// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function createSexta(buttonSexta){
    let buttonContainer = document.querySelector('.buttons-container');
    let newButtonSexta = document.createElement('button');
    newButtonSexta.id = 'btn-friday';

    newButtonSexta.innerHTML = buttonSexta;

    buttonContainer.appendChild(newButtonSexta);
}

createSexta('Sexta-feira');


// Parte 5

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.


function backgroundSexta(fridaysArray){
    let colorFriday = document.querySelectorAll('.friday');
    let buttonFriday = document.querySelector('#btn-friday');
    let text = "SEXTOU!";
    
    buttonFriday.addEventListener('click', function(){
        for (let index = 0; index < colorFriday.length; index += 1){
            if (colorFriday[index].innerHTML !== text){
                colorFriday[index].innerHTML = text;
            } else {
                colorFriday[index].innerHTML = fridaysArray[index];
            }
        }
    });
}

let diasFriday = [ 4, 11, 18, 25];
backgroundSexta(diasFriday);

// Parte 6

// Implemente duas funções que criem um efeito de “zoom”.
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// Dica - Propriedade: event.target.


function zoomIn(){
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '50px';
        event.target.style.fontweight = '600';
    })
}
zoomIn();


function zoomOut(){
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', function(event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontweight = '200';
    })
}

zoomOut();

// Parte 7

// Implemente uma função que adicione uma tarefa personalizada ao calendário.
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".




// Parte 8

// Implemente uma função que adicione uma legenda com cor para a tarefa.
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"
// Parte 9

// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
// Parte 10

// Implemente uma função que atribua a cor da tarefa ao dia do calendário.
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)
// Bônus

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”.
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”.
// Ao pressionar a tecla “enter” o evento também deverá ser disparado.
// Dica - Propriedade: key.