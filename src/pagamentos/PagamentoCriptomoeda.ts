import { ProcessadorPagamento } from "./ProcessadorPagamento";

export class PagamentoCriptomoeda implements ProcessadorPagamento {
  processar(valor: number): void {
    console.log("Pagamento em criptomoeda:", valor);
  }
}