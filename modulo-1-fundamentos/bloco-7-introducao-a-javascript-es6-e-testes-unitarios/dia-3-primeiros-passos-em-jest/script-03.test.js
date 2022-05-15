const myFizzBuzz = require('./script-03');

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se\
 o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, \
 retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja \
 divisível por 3 ou 5 e retorna false caso num não seja um número', () =>{
  it('Verifica uma chamada com um número divisível por 3 e 5 e verifica se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })
  it('Verifica uma chamada com um número divisível por 3 e verifica se o retorno é o esperado', () => {
    expect(myFizzBuzz(9)).toBe('fizz')
  })
  it('Verifica uma chamada com um número divisível por 5 e verifica se o retorno é o esperado', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
  })
  it('Verifica uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('a')).toBeFalsy()
  })
})
