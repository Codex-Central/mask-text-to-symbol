import { TMaskTextToSymbol } from "../types/index.types";

/**
 * Takes a string as input and returns a new string with all characters replaced by an specified symbol.
 * @param {string} text - is a string that represents the original password.
 * @param {string} symbol - is a string that represents the symbol to be used to mask.
 * @returns An object with the original password and the masked password.
 */
const maskTextToSymbol = ({ text, symbol = "*" }: TMaskTextToSymbol) => {
  const masked = text.replace(/./g, symbol);
  return { masked, original: text };
};

export default maskTextToSymbol;
