const main_reducer = (state, action) => {
  //
  if (action.type === "ADD_TO_CART") {
    const { id, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        let newAmount = cartItem.amount + amount;

        return { ...cartItem, amount: newAmount };
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id,
        name: product.name,
        amount,
        image1: product.image1,
        image2: product.image2,
        price: product.price,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  // if (action.type === "ADD_TO_CART") {
  //   const { id, amount, product } = action.payload;
  //   const tempItem = state.cart.find((i) => i.id === id);
  //   if (tempItem) {
  //     const tempCart = state.cart.map((cartItem) => {
  //       if (cartItem.id === id) {
  //         let newAmount = cartItem.amount + amount;

  //         return { ...cartItem, amount: newAmount };
  //       } else {
  //         return cartItem;
  //       }
  //     });

  //     return { ...state, cart: tempCart };
  //   } else {
  //     const newItem = {
  //       id: id,
  //       name: product.name,

  //       amount,
  //       image: product.image1,
  //       price: product.price,
  //     };
  //     return { ...state, cart: [...state.cart, newItem] };
  //   }
  // }
  return {
    ...state,
  };
};

export default main_reducer;
