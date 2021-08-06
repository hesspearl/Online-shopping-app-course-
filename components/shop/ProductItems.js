import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import Colors from "../../constants/Colors";

const ProductItems = props => {

    let TouchableCmp= TouchableOpacity;

    if(Platform.OS === ' android '&& Platform.Version >=21)
   TouchableCmp= TouchableNativeFeedback


    
  return (
    <View style={styles.product}>
    <TouchableCmp 
    onPress={props.onViewDetails}
    >
      <View>
        <Image style={styles.image} source={{ uri: props.image }} />

        <View style={styles.details}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>{props.price.toFixed(2)}</Text>
        </View>

        <View style={styles.action}>
          <Button
            color={Colors.primary}
            title="view Details"
            onPress={props.onViewDetails}
          />
          <Button
            color={Colors.accent}
            title="To cart"
            onPress={props.onAddToCart}
          />
        </View>
        </View>
    </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 5,
    height: 300,
    margin: 20
  },

  image: {
    width: "100%",
    height: "60%"
  },
  title: {
      fontFamily:'open-sans-bold',
    fontSize: 18,
    marginVertical: 4
  },

  price: {
    fontFamily:'open-sans-bold',
    fontSize: 14,
    color: "#888"
  },

  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10
  }
});
export default ProductItems;
