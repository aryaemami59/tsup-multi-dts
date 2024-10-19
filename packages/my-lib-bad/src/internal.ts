export const sharedSymbol = Symbol("shared");

export class SharedClass {
  symbol: typeof sharedSymbol = sharedSymbol;
}
