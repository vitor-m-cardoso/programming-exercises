import IAgenda from './interfaces/IAgenda';

export default abstract class Quadra<T> {
  abstract reservar(date: Date): IAgenda<T>;
};
