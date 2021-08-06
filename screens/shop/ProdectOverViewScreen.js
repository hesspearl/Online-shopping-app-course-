import React from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItems from "../../components/shop/ProductItems";
import * as cartActions from "../../store/actions/cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

const ProductOverViewScreen = props => {
  const products = useSelector(state => state.product.availableProduct);

  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItems
          image={itemData.item.imgUrl}
          price={itemData.item.price}
          title={itemData.item.title}
          onViewDetails={() => {
            props.navigation.navigate("ProductDetails", {
              productId: itemData.item.id,
              productTitle: itemData.item.title
            });
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

ProductOverViewScreen.navigationOptions = navData => {
  return {
    headerTitle: "All products",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="cart"
          iconName={"shopping-cart"}
          onPress={() => {
            navData.navigation.navigate("CartScreen");
          }}
        />
      </HeaderButtons>
    )
  };
};
export default ProductOverViewScreen;
