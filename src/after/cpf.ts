function allCharactersAreTheSame(string: string) {
  return string.split("").every(character => character === string[0])
}

function hasLengthRange(string: string, min: number, max: number) {
  return string.length >= min && string.length <= max
}

function normalizeCPF(cpf: string) {
  if (typeof cpf === 'string') {
    return cpf
      .replace('.','')
      .replace('.','')
      .replace('-','')
      .replace(" ","");  
  }
}

function getCPFValidationDigits(cpf: string) {
  let firstSumOfDigits = 0;
  let secondSumOfDigits = 0;
  for (let cpfIndex = 1; cpfIndex < cpf.length - 1; cpfIndex += 1) {  
    let digit = parseInt(cpf[cpfIndex - 1]);
    firstSumOfDigits = firstSumOfDigits + ( 11 - cpfIndex ) * digit;
    secondSumOfDigits = secondSumOfDigits + ( 12 - cpfIndex ) * digit;  
  };
  const firstDigit = (firstSumOfDigits % 11) < 2 ? 0 : 11 - (firstSumOfDigits % 11);
  return {
    firstDigit,
    secondDigit: ((secondSumOfDigits + 2 * firstDigit) % 11) < 2 ? 0 : 11 - ((secondSumOfDigits + 2 * firstDigit) % 11),
  }
}

export function validateCPF(value: string) {
  const cpf = normalizeCPF(value)
	if (!cpf || allCharactersAreTheSame(cpf) || !hasLengthRange(cpf, 11, 14)) return false;
  let { firstDigit, secondDigit } = getCPFValidationDigits(cpf)
  const receivedValidationDigits = cpf.slice(-2);
  const verifiedValidationDigits = `${firstDigit}${secondDigit}`;  
  return verifiedValidationDigits === receivedValidationDigits;
}
