// this process return data to pay in checkout
/** 
*@param {Array} cart cartDataValues: Array of Objects
*@returns callback with all datas to show dataPayments
**/
const totalPrice = (cart) => {

  let subtotal = 0;
 
  // cart is datacartValues an array with quantities
  cart.forEach( producto => {
    subtotal += producto.price * producto.times;
  });
 return subtotal;
};

export {totalPrice};