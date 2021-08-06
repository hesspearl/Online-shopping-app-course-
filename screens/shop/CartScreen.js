import React from "react";
import { FlatList, View, Text, Button, StyleSheet } from "react-native";
import { useSelector , useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import CartItems from "../../components/shop/CartItems";
import * as CartActions from "../../store/actions/cart"
import CartItem from "../../models/cart-item";

const CartScreen = props => {
  const cartTotalAmount = useSelector(state => state.Cart.totalAmount);
  const cartItem = useSelector(state => {
    const transformedCartItems = [];

    

    for (const key in state.Cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.Cart.items[key].productTitle,
        productPrice: state.Cart.items[key].productPrice,
        quantity: state.Cart.items[key].quantity,
        sum: state.Cart.items[key].sum
      });
    }
//to keep order 
    return transformedCartItems.sort ((a,b)=> a.productId>b.productId? 1:-1);
  });
  const dispatch = useDispatch();
  
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total : <Text style={styles.amount}>${cartTotalAmount}</Text>
        </Text>
        <Button
          color={Colors.primary}
          title="Order now"
          disabled={cartItem.length === 0}
        />
      </View>
      <FlatList
        data={cartItem}
        keyExtractor={item => item.productId}
        renderItem={itemData => (
          <CartItems
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
           
          
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white"
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18
  },
  amount: {
    color: Colors.accent
  }
});

export default CartScreen;
