export class ProducModel {
  id: number;
  name: string;
  price: string;
  image: string;
  constructor(model?: any) {
    model = model || {};
    this.id = model.id;
    this.name = model.name || '';
    this.price = model.price || '';
    this.image = model.image || '';
  }
}
