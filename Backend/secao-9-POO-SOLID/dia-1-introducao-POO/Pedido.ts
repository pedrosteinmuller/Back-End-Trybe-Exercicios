import Cliente from './Cliente';
import ItemPedido from './ItemPedido';

export default class Order {
  private _cliente: Cliente;
  private _items: ItemPedido[] = []; // aqui atribuo valor default como um array vazio
  private _metodoPagamento: string;
  private _desconto = 0;

  constructor(
    client: Cliente, 
    items: ItemPedido[], 
    metodoPagamento: string, 
    desconto: number,
  ) {
    this._cliente = client;
    this.items = items;
    this._metodoPagamento = metodoPagamento;
    this.desconto = desconto;
  }

  get client(): Cliente {
    return this._cliente;
  }

  set client(value: Cliente) {
    this._cliente = value;
  }

  get items(): ItemPedido[] {
    return this._items;
  }

  set items(value: ItemPedido[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }

    this._items = value;
  }

  get metodoPagamento(): string {
    return this._metodoPagamento;
  }

  set metodoPagamento(value: string) {
    this._metodoPagamento = value;
  }

  get desconto(): number {
    return this._desconto;
  }

  set desconto(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }

    this._desconto = value;
  }
}