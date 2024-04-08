import teddy from '../img/teddy.png';
import plush from '../img/plush.png';
import dog from '../img/dog.png';
import friend from '../img/friend.png';
import flower from '../img/flower.png';
import machine from '../img/machine.png';
import camera from '../img/camera.png';
import rabbit from '../img/rabbit.png';

const initialState = {
    toys: [
      {name: 'Teddy Bear', price: 30.00, img: teddy, type: 'Stuffed Animals', about: 'Your softest friend', quantity: 0},
      {name: 'Mega Plush Toy', price: 38.00, img: plush, type: 'Stuffed Animals', about: 'You will never be bored with him', quantity: 0},
      {name: 'Cute Dog', price: 24.00, img: dog, type: 'Stuffed Animals', about: 'As soft and fluffy as the neighbor\'s dog', quantity: 0},
      {name: 'Little Friend', price: 27.00, img: friend, type: 'Stuffed Animals', about: 'As bright as you', quantity: 0},
      {name: 'Happy Flower', price: 38.00, img: flower, type: 'Wooden Toys', about: 'Develops child\'s thinking', quantity: 0},
      {name: 'Lift Machine', price: 24.00, img: machine, type: 'Wooden Toys', about: 'Build your own car', quantity: 0},
      {name: 'Wooden Toys Camera', price: 32.00, img: camera, type: 'Wooden Toys', about: 'For future photographers', quantity: 0},
      {name: 'Little Rabbit', price: 16.00, img: rabbit, type: 'Wooden Toys', about: 'Everyone\'s favorite bunny tower', quantity: 0},
    ],
  };
  
  const toyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREASE_QUANTITY':
        return { ...state, toys: state.toys.map(toy => toy.name === action.payload ? {...toy, quantity: toy.quantity + 1} : toy)}; 
      case 'DECREASE_QUANTITY':
        return {...state, toys: state.toys.map(toy => toy.name === action.payload ? {...toy, quantity: toy.quantity > 0 ? toy.quantity - 1 : 0} : toy)};
      default:
        return state;
    }
  };
  
  export default toyReducer;
  