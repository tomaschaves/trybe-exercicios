import './style.css';

const submitButton = document.querySelector('#search');

const table = (event) => {
  event.preventDefault();
  const table = document.querySelector('.values');
  table.classList.remove('hidden');
  const coin = document.querySelector('#coin').value;
  getCoin(coin);
  const title = document.querySelector('#title');
  title.innerHTML = `Valores referentes a 1 ${coin}`;
};

submitButton.addEventListener('click',table);

const createCoin = (element) => {
  const table = document.querySelector('#table-contents');
  // const item = document.createElement('td');
  // item.innerText = element;
  // table.appendChild(item);
  table.innerHTML='';
  // const array = Object.entries(element);
  // console.log(array);
}

const getCoin = (coin) => {
  fetch(`https://api.exchangerate.host/latest?base=${coin}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.rates);
    });
};


createCoin(coin);


// const validateCoin = () => {
//   fetch(`https://api.exchangerate.host/latest?base=${coin}`)
//     .then(response => response.json())
//     .then(data => {
//       // const names = data.keys;
//       console.log();
//     });
// }

// validateCoin();






// // BACKUP

// import './style.css';

// const submitButton = document.querySelector('#search');

// const table = (event) => {
//   event.preventDefault();
//   const table = document.querySelector('.values');
//   table.classList.remove('hidden');
//   const coin = document.querySelector('#coin').value;
//   getCoin(coin);
//   const title = document.querySelector('#title');
//   title.innerHTML = `Valores referentes a 1 ${coin}`;
// };

// submitButton.addEventListener('click',table);

// const createCoin = (element) => {
//   const table = document.querySelector('#table-contents');
//   const item = document.createElement('td');
//   item.innerText = element;
//   table.appendChild(item);
// }

// const getCoin = (coin) => {
//   fetch(`https://api.exchangerate.host/latest?base=${coin}`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.rates);
//     });
// };


// createCoin();


// // const validateCoin = () => {
// //   fetch(`https://api.exchangerate.host/latest?base=${coin}`)
// //     .then(response => response.json())
// //     .then(data => {
// //       // const names = data.keys;
// //       console.log();
// //     });
// // }

// // validateCoin();