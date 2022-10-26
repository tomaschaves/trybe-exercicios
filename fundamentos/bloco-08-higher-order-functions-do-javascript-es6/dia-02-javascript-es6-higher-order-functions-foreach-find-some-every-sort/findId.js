const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findObjectMusic(id) {
  return musicas.find((musica) => musica.id === id);    //{ id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' }
};

function findIdMusic(id) {
  return musicas.find((musica) => musica.id === id).id; //31031687
};

function findTitleMusic(id) {
  return musicas.find((musica) => musica.id === id).title; //Chaconne, Partita No. 2 BWV 1004
};

console.log(findObjectMusic('31031687'));
console.log(findIdMusic('31031687'));
console.log(findTitleMusic('31031687'));