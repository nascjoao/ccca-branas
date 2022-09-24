import { validateCPF } from "../src/after/cpf"

test('Deve ser possível inserir um CPF com ou sem separadores', () => {
  expect(validateCPF('14084290122')).toBe(true)
  expect(validateCPF('140.842.901-22')).toBe(true)
})

test('Deve retornar false se passado um valor inválido', () => {
  expect(validateCPF('140.842.901-02')).toBe(false)
  expect(validateCPF('140.842.901-20')).toBe(false)
  expect(validateCPF('')).toBe(false)
})

test('Deve retornar false se todos os caracteres forem iguais', () => {
  expect(validateCPF('11111111111')).toBe(false)
  expect(validateCPF('222.222.222-22')).toBe(false)
})

test('Deve retornar true se o CPF for válido, mesmo com dígitos verificadores 0', () => {
  expect(validateCPF('52367420300')).toBe(true)
})

test('Deve retornar false caso o valor passado tenha mais do que 14 caracteres', () => {
  expect(validateCPF('140.842.901-222')).toBe(false)
})

test('Deve retornar false caso o valor passado tenha menos do que 11 caracteres', () => {
  expect(validateCPF('140.842901')).toBe(false)
})
