import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView
} from "react-native";
import { useSelector , useDispatch} from "react-redux";
import Colors from "../../constants/Colors";
import * as cartActions from '../../store/actions/cart'

const ProductDetails = props => {
  const productId = props.navigation.getParam("productId");
  const dispatch=useDispatch()
  const selectedProduct = useSelector(state =>
    state.product.availableProduct.find(prod => prod.id === productId)
  );
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imgUrl }} />
      <View style={styles.action}>
        <Button color={Colors.primary} 
        title="Add to Cart"
         onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct))
        }} />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>

      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetails.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam("productTitle")
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "open-sans-bold"
  },
  description: {
    fontFamily: "open-sans",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20
  },
  action: {
    marginVertical: 10,
    alignItems: "center"
  }
});
export default ProductDetails;
