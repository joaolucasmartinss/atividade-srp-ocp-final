import { ProcessadorPagamento } from "./ProcessadorPagamento";

export class PagamentoPix implements ProcessadorPagamento {
  processar(valor: number): void {
    console.log("Pagamento via PIX:", valor);
  }
}