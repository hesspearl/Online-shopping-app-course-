import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";

const initialState = {
  items: {},
  totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //save all info
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      if (state.items[addedProduct.id]) {
        const updatedCatItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
        return {
          ...state,
          //over ride
          items: { ...state.items, [addedProduct.id]: updatedCatItem },
          totalAmount: state.totalAmount + prodPrice
        };
      } else {
        const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);

        return {
          ...state,
          // key : value
          items: { ...state.items, [addedProduct.id]: newCartItem },
          totalAmount: state.totalAmount + prodPrice
        };
      }

    case REMOVE_FROM_CART:
      // either one item or two & more
      const selectedCartItem = state.items[action.pid];
      const currentQty = state.items[action.pid].quantity;
    
     
      if (currentQty > 1) 
    {
     const   updateNewCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice),

         updatedCartNewItems ={...state , [action.pid]:updateNewCartItem}

       return{      ...state,
          //cart items without the deleted one
          items: updatedCartNewItems,
         totalAmount:state.totalAmount-selectedCartItem.productPrice,}
       }
       else {
        //all items in cart
       const updatedCartItems = { ...state.items };
        delete updatedCartItems[action.id];
      
      console.log(updatedCartItems)
      return{

        
          ...state,
          //cart items without the deleted one
          items: updatedCartItems,
         totalAmount:state.totalAmount-selectedCartItem.productPrice,
        
      }}
      
  }
  return state;
};
