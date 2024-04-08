export const increaseQuantity = (toyName) => ({
    type: 'INCREASE_QUANTITY',
    payload: toyName,
  });
  
  export const decreaseQuantity = (toyName) => ({
    type: 'DECREASE_QUANTITY',
    payload: toyName,
  });
  