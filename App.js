import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {combineReducers,createStore} from 'redux'
import{Provider}from 'react-redux'
import productReducer from './store/reducers/product'
import cartReducer from './store/reducers/cart'
import ShopNavigator from './navigators/ShopNavigation'
import {AppLoading} from 'expo'
import * as Font from 'expo-font'






const rootReducer= combineReducers({
  product:productReducer,
  Cart:cartReducer
})

const store = createStore(rootReducer  )

const fetchFont=()=>{
  return Font.loadAsync({
    "open-sans": require('./assets/fonts/OpenSans-Regular.ttf'),
    "open-sans-bold": require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)

  //if its false
  if(!fontLoaded){
    return(
      <AppLoading
        startAsync={fetchFont}
        onFinish={()=>{
          setFontLoaded(true)
        }}
      />
    )
  }

  
  return (
    <Provider  store={store}>
      <ShopNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
