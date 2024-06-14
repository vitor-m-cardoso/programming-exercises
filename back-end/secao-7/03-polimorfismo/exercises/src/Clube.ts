import Quadra from './Quadra';

export default class Clube<T> {
  private quadras: Quadra<T>[] = [];

  public adicionarQuadra(quadra: Quadra<T>): void {
    this.quadras.push(quadra);
  }

  public buscarQuadra(index: number): Quadra<T> {
    return this.quadras[index];
  }
};
