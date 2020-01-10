import { ADD_CART, DELETE_CART } from "../actions/actions";

function cartListReducer(state = [], action) {
  switch (action.type) {

    case ADD_CART:
      const isFound = state.find(book => book.id == action.book.id);
      console.log('state', state)
      if (isFound) {
        for (let book of state) {
          if (book.id == isFound.id) {
            book.quantity += action.quantity;
          }
        }
        console.log(state)
        return state;
      } else {
        let book_with_quantity = Object.assign({}, { quantity: action.quantity }, action.book);
        return [...state, book_with_quantity];
      }

    case DELETE_CART:
      return state.filter(cartList => cartList.id !== action.id);

    default:
      return state;
  }
}

export default cartListReducer;