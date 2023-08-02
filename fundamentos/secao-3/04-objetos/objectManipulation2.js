const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// 1 - Desenvolva a função customerInfo() para que seu retorno seja:
// 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.

const customerInfo = (fullOrder) => {
  const {
    name, 
    phoneNumber, 
    order: { delivery: { deliveryPerson } },
    address: { street, number, apartment },
  } = fullOrder;

  return `Olá, ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${street}, Número: ${number}, AP: ${apartment}.`;
}

console.log(customerInfo(order));

// Desenvolva a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
  // Modifique o nome da pessoa compradora para Luiz Silva;
  // Modifique o valor total da compra para R$ 50,00.

const orderModifier = (fullOrder) => {
  fullOrder.name = 'Luiz Silva';
  fullOrder.payment = 50;
  const {
    name,
    order: { pizza, drinks: { coke } },
    payment
  } = fullOrder;
  const pizzaOrder = Object.keys(pizza);

  return `Olá, ${name}, o valor total de seu pedido de ${pizzaOrder[0]}, ${pizzaOrder[1]} e ${coke.type} é R$: ${payment.toFixed(2)}`;
}

console.log(orderModifier(order));
