const myRemove = require('./ex2-arr.js')

describe ('testa a função myRemove', () =>{
  it('deve retornar uma cópia do array sem o 3', () =>{
    expect(myRemove([1, 2, 3, 4, 5], 3)).toStrictEqual([1, 2, 4, 5]);
  });
  it('não deve retornar o array original', () => {
    expect(myRemove([1, 2, 3, 4, 5], 3)).not.toStrictEqual([1, 2, 3, 4, 5]);
  })
  it('deve retornar o array sem o 5', () => {
    expect(myRemove([1, 2, 3, 4, 5], 5)).toStrictEqual([1, 2, 3, 4]);
  })
})