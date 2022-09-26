export default class Cpf {
  constructor (private cpf: string) {
    this.cpf = cpf.replace(/\.|\-|\s/g, '');
    if (!cpf) throw new Error('CPF é necessário');
    if (this.allCharactersAreTheSame()) throw new Error('Os números do CPF precisam ser diferentes');
    if (!this.hasLengthRange()) throw new Error('O CPF precisa ter no mínimo 11 caracteres e no máximo 14 caracteres.');
  }

  validate() {
    let { firstDigit, secondDigit } = this.getCPFValidationDigits()
    const receivedValidationDigits = this.cpf.slice(-2);
    const verifiedValidationDigits = `${firstDigit}${secondDigit}`;  
    return verifiedValidationDigits === receivedValidationDigits;
  }

  private allCharactersAreTheSame() {
    return this.cpf.split("").every(character => character === this.cpf[0])
  }

  private hasLengthRange() {
    return this.cpf.length >= 11 && this.cpf.length <= 14;
  }

  private getCPFValidationDigits() {
    let firstSumOfDigits = 0;
    let secondSumOfDigits = 0;
    for (let cpfIndex = 1; cpfIndex < this.cpf.length - 1; cpfIndex += 1) {  
      let digit = parseInt(this.cpf[cpfIndex - 1]);
      firstSumOfDigits = firstSumOfDigits + ( 11 - cpfIndex ) * digit;
      secondSumOfDigits = secondSumOfDigits + ( 12 - cpfIndex ) * digit;  
    };
    const firstDigit = (firstSumOfDigits % 11) < 2 ? 0 : 11 - (firstSumOfDigits % 11);
    secondSumOfDigits += 2 * firstDigit;
    const secondDigit = (secondSumOfDigits % 11) < 2 ? 0 : 11 - (secondSumOfDigits % 11);
    return {
      firstDigit,
      secondDigit,
    }
  }
}
