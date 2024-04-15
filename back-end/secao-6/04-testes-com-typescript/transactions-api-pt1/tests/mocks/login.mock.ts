const validPassword = 'us3r1p4ssw0rd';
const noEmailLoginBody = { email: '', password: validPassword };

const validEmail = 'user1@banco.com';
const noPasswordLoginBody = { email: validEmail, password: '' };

const invalidEmail = 'not_found@email.com'
const nonExistentEmailBody = { email: invalidEmail, password: validEmail };

const userWithWrongPasswordBody = { email: validEmail, password: 'fkasdofasd' };

const hashedPassword = '$2a$10$ffgDuAb2nJJWYln7wMTPYup6MA53zkGy4xbkIGMvI4M3P5yN4pL0a';
const existingUser = { 
  id: 7,
  email: validEmail,
  password: hashedPassword,
  name: 'Existing User' 
};

const validLoginBody = { email: validEmail, password: validPassword };

export default {
  noEmailLoginBody,
  noPasswordLoginBody,
  nonExistentEmailBody,
  userWithWrongPasswordBody,
  existingUser,
  validLoginBody,
};
