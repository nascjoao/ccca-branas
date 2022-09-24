import { validate } from "../src/before/cpf"

test('Deve ser possível inserir um CPF com ou sem separadores', () => {
  expect(validate('14084290122')).toBe(true)
  expect(validate('140.842.901-22')).toBe(true)
})

test('Deve retornar false se passado um valor inválido', () => {
  expect(validate('140.842.901-02')).toBe(false)
  expect(validate('140.842.901-20')).toBe(false)
  expect(validate('')).toBe(false)
  expect(validate(null)).toBe(false)
})

test('Deve retornar false se todos os caracteres forem iguais', () => {
  expect(validate('11111111111')).toBe(false)
  expect(validate('222.222.222-22')).toBe(false)
})

test('Deve retornar true se o CPF for válido, mesmo com dígitos verificadores 0', () => {
  expect(validate('52367420300')).toBe(true)
})

test('Deve retornar false caso o valor passado tenha mais do que 14 caracteres', () => {
  expect(validate('140.842.901---22')).toBe(false)
})

test('Deve retornar false caso o valor passado tenha menos do que 11 caracteres', () => {
  expect(validate('140.842901')).toBe(false)
})
