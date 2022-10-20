const myFizzBuzz = require('./ex3-myFizzBuzz');

describe ('testa a função myFizzBuzz', () =>{
  it('deve retornar "fizzbuzz"', () =>{
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('deve retornar "fizz"', () =>{
    expect(myFizzBuzz(12)).toBe('fizz');
  });
  it('deve retornar "buzz"', () =>{
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('deve retornar o próprio número', () =>{
    expect(myFizzBuzz(17)).toBe(17);
  });
  it('deve retornar "false"', () =>{
    expect(myFizzBuzz('olá')).toBe(false);
  });  
})

// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado  o próprio número
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado  false