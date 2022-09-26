import Cpf from "../src/Cpf"

test('Deve ser possível inserir um CPF com ou sem separadores', () => {
  expect(new Cpf('14084290122').validate()).toBe(true)
  expect(new Cpf('140.842.901-22').validate()).toBe(true)
})

test('Deve retornar false se passado um valor inválido', () => {
  expect(new Cpf('140.842.901-02').validate()).toBe(false)
  expect(new Cpf('140.842.901-20').validate()).toBe(false)
  expect(() => new Cpf('')).toThrow(/^CPF é necessário$/)
})

test('Deve retornar false se todos os caracteres forem iguais', () => {
  expect(() => new Cpf('11111111111')).toThrow(/^Os números do CPF precisam ser diferentes$/)
  expect(() => new Cpf('222.222.222-22')).toThrow(/^Os números do CPF precisam ser diferentes$/)
})

test('Deve retornar true se o CPF for válido, mesmo com dígitos verificadores 0', () => {
  expect(new Cpf('52367420300').validate()).toBe(true)
})

test('Deve retornar false caso o valor passado tenha mais do que 14 caracteres', () => {
  expect(new Cpf('140.842.901-222').validate()).toBe(false)
  expect(() => new Cpf('1400.8422.9011-222')).toThrow(/^O CPF precisa ter no mínimo 11 caracteres e no máximo 14 caracteres\.$/)
})

test('Deve retornar false caso o valor passado tenha menos do que 11 caracteres', () => {
  expect(() => new Cpf('140.842901')).toThrow(/^O CPF precisa ter no mínimo 11 caracteres e no máximo 14 caracteres\.$/)
})
