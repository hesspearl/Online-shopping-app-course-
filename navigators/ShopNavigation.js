import{ createAppContainer} from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import ProductOverViewScreen from "../screens/shop/ProdectOverViewScreen"
import ProductDetails from "../screens/shop/ProductDeatils"
import CartScreen from "../screens/shop/CartScreen"
import Colors from '../constants/Colors'
import {Platform} from 'react-native'

const ProductNavigator = createStackNavigator({
 ProductOverView:ProductOverViewScreen,
 ProductDetails:ProductDetails,
 CartScreen:CartScreen
},
{defaultNavigationOptions:{
    headerStyle:{
        backgroundColor:Platform.OS==='android'? Colors.primary:'',


    },
    headerTitleStyle:{
        fontFamily:'open-sans-bold',

    },
    
    headerTintColor:Platform.OS==='android'? 'white':Colors.primary,

}

})

export default createAppContainer(ProductNavigator)