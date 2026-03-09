import { CalculoImposto } from "./CalculoImposto";

export class ImpostoEletronico implements CalculoImposto {
  calcular(preco: number, quantidade: number): number {
    const total = preco * quantidade;
    return total + total * 0.15;
  }
}