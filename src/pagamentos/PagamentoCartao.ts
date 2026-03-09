import { ProcessadorPagamento } from "./ProcessadorPagamento";

export class PagamentoCartao implements ProcessadorPagamento {
  processar(valor: number): void {
    console.log("Pagamento com cartão:", valor);
  }
}