export class ConfirmacaoEmail {
  enviar(email: string, valor: number) {
    console.log(`Email enviado para ${email} confirmando pedido de R$ ${valor}`);
  }
}