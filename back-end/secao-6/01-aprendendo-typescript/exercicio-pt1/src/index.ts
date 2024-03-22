import * as Functions from './functions';
import users from './data';

const usersList = `Lista de usuários do Github ${Functions.getUserNames(users).join(', ')}`
const repos20 = `Usuários com ao menos 20 repositórios: ${Functions.getUsersByRepoQuantity(users, 20).join(', ')}`;

const account = 'Capi Etheriel';
const mostActive = `${account} é a pessoa mais ativa da lista? R: ${Functions.isMostActiveUser(account, users)}.`

console.log(mostActive);
