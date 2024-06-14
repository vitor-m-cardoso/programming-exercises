import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';

const clube = new Clube();
const quadraFutebol = new QuadraFutebol();

clube.adicionarQuadra(quadraFutebol);
quadraFutebol.reservar();
