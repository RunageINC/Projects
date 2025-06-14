// import from '../../../../contracts/messages/order-created-message.ts';

export function dispatchOrderCreated() {
  channels.orders.sendToQueue("orders", Buffer.from("Hello World"));
}
