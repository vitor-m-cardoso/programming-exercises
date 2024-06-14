import Quadra from './Quadra';
import IAgenda from './interfaces/IAgenda';
import IFutebol from './interfaces/IFutebol';

class QuadraFutebol extends Quadra<IFutebol> {
  reservar(): IAgenda<IFutebol> {
    return {
      protocolo: 'q39tgorea9',
      data: new Date(),
      regras: { chuteira: 'cravo' }
    }
  }
}

export default QuadraFutebol;