import { PedidoService } from "./services/PedidoService";
import { ImpostoEletronico } from "./impostos/ImpostoEletronico";
import { PagamentoPix } from "./pagamentos/PagamentoPix";
import { ConfirmacaoEmail } from "./services/ConfirmacaoEmail";

const imposto = new ImpostoEletronico();
const pagamento = new PagamentoPix();
const email = new ConfirmacaoEmail();

const pedido = new PedidoService(imposto, pagamento, email);

pedido.processarPedido(100, 2, "cliente@email.com");