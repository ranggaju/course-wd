const greet = (message, fn) => {
  console.log(message);
  fn();
};

const sayBye = () => {
  console.log('OK, bye!');
};

greet('Hello', sayBye);
