import { User } from './Types/User';

export const getUserNames = (userList: User[]): string[] => {
  return userList.map((user: User) => user.name);
};

export const getUsersByRepoQuantity = (users: User[], repos: number): string[] => {
  return users.filter((user) => user.repositories >= repos).map((user) => user.name);
};

export const isMostActiveUser = (name: string, users: User[]): string => {
  const mostActiveUser = users.reduce((prev, curr) => {
    return (prev.repositories > curr.repositories ? prev : curr)
  });
  const isMostActive = mostActiveUser.name === name;
  return (isMostActive ? 'Sim' : 'Não');
};
