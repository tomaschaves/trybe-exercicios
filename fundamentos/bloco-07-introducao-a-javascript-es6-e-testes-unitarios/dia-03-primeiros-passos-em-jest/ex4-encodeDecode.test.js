const { encode, decode } = require('./ex4-encodeDecode');

describe ('testa se encode e decode são funções', () =>{
  it('deve retornar verdadeiro se encode é uma função', () =>{
    expect(typeof encode).toBe('function');
  });
  it('deve retornar verdadeiro se decode é uma função', () =>{
    expect(typeof decode).toBe('function');
  });
})

describe ('testa se a função encode codifica as vogais a, e, i, o, u em 1, 2, 3, 4 e 5, respectivamente', () =>{
  it('deve retornar "h2ll4, w4rld!"', () => {
    expect(encode('hello, world!')).toEqual('h2ll4, w4rld!');
  });
})

describe ('testa se a função decode codifica os números 1, 2, 3, 4 e 5 nas vogais a, e, i, o, u, respectivamente', () =>{
  it('deve retornar "hello, world!"', () => {
    expect(decode('h2ll4, w4rld!')).toEqual('hello, world!');
  });
})

describe ('testa se as demais letras/números não são convertidos para cada caso', () =>{
  it('deve retornar "spy x f1m3ly"', () => {
    expect(encode('spy x family')).toEqual('spy x f1m3ly');
  });
  it('deve retornar "spy x family"', () => {
    expect(decode('spy x f1m3ly')).toEqual('spy x family');
  });
})

describe ('testa se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () =>{
  it('deve retornar 12', () => {
    expect(encode('spy x family').length).toEqual(12);
  });
  it('deve retornar 22', () => {
    expect(decode('este é apenas um teste').length).toEqual(22);
  });
})