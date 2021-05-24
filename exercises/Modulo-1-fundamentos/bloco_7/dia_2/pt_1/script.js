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
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  let deliveryName = order.order.delivery.deliveryPerson;
  let orderName = order.name;
  let getPhoneNumber = order.phoneNumber;
  let getStreetAddress = order.address.street;
  let getStreetNumber = order.address.number;
  let getApartmentNumber = order.address.apartment;

  console.log(`Olá ${deliveryName}, entrega para: ${orderName}, Telefone: ${getPhoneNumber}, R. ${getStreetAddress}, Nº: ${getStreetNumber}, AP: ${getApartmentNumber}`);
}

customerInfo(order);

console.log('-------------------');

const orderModifier = (order) => {
  let name1 = order.newName = 'Luiz Silva';
  let getPizzas = Object.keys(order.order.pizza);
  let getCokeZero = order.order.drinks.coke.type;
  let totalToPay = order.payment.total = '50,00'

  console.log(`Olá ${name1}, o total do seu pedido de ${getPizzas[0]}, ${getPizzas[1]} e ${getCokeZero} é R$ ${totalToPay}.`);
}

orderModifier(order);
