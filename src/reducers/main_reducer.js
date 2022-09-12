const main_reducer = (state, action) => {
  //
  // if (action.type === "ADD_TO_CART") {
  //   const { id, amount, product } = action.payload;
  //   const tempItem = state.cart.find((i) => i.id === id);
  //   if (tempItem) {
  //     const tempCart = state.cart.map((cartItem) => {
  //       let newAmount = tempItem.amount + amount;

  //       return { ...cartItem, amount: newAmount };
  //     });

  //     return { ...state, cart: tempCart };
  //   } else {
  //     const newItem = {
  //       id: id,
  //       name: product.name,
  //       amount,
  //       image1: product.image1,
  //       image2: product.image2,
  //       price: product.price,
  //     };
  //     return { ...state, cart: [...state.cart, newItem] };
  //   }
  // }
  if (action.type === "ADD_TO_CART") {
    const { id, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount;

          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id,
        name: product.name,

        amount,
        image: product.image1,
        price: product.price,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === "CALCULATE_TOTAL") {
    const { total_items, total_amount } = state.cart.reduce(
      (acc, item) => {
        const { amount, price } = item;
        acc.total_items = amount + acc.total_items;
        acc.total_amount = amount * price + acc.total_amount;
        return acc;
      },
      { total_items: 0, total_amount: 0 }
    );
    return { ...state, total_items, total_amount };
  }
  if (action.type === "TOGGLE_AMOUNT") {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === id) {
        if (value === "add") {
          let newAmount = cartItem.amount + 1;
          return { ...cartItem, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = cartItem.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...cartItem, amount: newAmount };
        }
      }
      return cartItem;
    });

    return { ...state, cart: tempCart };
  }
  if (action.type === "REMOVE_FROM_CART") {
    const tempCart = state.cart.filter((cartItem) => {
      return cartItem.id !== action.payload;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "CLEAR_CART") {
    localStorage.clear();
    return { ...state, cart: [] };
  }

  return {
    ...state,
  };
};

export default main_reducer;
