import { CalculoImposto } from "../impostos/CalculoImposto";
import { ProcessadorPagamento } from "../pagamentos/ProcessadorPagamento";
import { ConfirmacaoEmail } from "./ConfirmacaoEmail";

export class PedidoService {
  constructor(
    private imposto: CalculoImposto,
    private pagamento: ProcessadorPagamento,
    private email: ConfirmacaoEmail
  ) {}

  processarPedido(preco: number, quantidade: number, emailCliente: string) {
    const total = this.imposto.calcular(preco, quantidade);
    this.pagamento.processar(total);
    this.email.enviar(emailCliente, total);
  }
}