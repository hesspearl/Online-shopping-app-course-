import React from "react";
import { Platform, View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";




const CartItems = props => {
  
 
  return( 
    <View style={styles.cartItem}>
        <View style={styles.itemDATA}>
            <Text style={styles.quantity}> {props.quantity}</Text> 
            <Text style={styles.mainText}> {props.title}</Text>
        </View>
    
    <View  style={styles.itemDATA}>
    <Text style={styles.mainText}>${props.amount}</Text>
    <TouchableOpacity
    onPress={props.onRemove}
    style={styles.deleteButton}>
        <FontAwesome
            name={Platform.OS==='android'? "trash-o" :"trash"}
            size={23}
            color='red'

        />
    </TouchableOpacity>
    </View>
    </View>)
  
};

const styles = StyleSheet.create({
  cartItem:{
padding:10,
backgroundColor:'white',
flexDirection:'row',
justifyContent:'space-between',
marginHorizontal:20
  },
  itemDATA:{
      flexDirection:'row',
      alignItems:'center'
  },
  quantity:{
      fontFamily:'open-sans',
      color:'#888',
      fontSize: 16,
  },
  mainText:{
      fontFamily:'open-sans-bold',
      fontSize:16
  },
  deleteButton:{
      marginLeft:20
  }
  
});

export default CartItems;
