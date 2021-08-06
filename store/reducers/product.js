import PRODUCTS from '../../data/dummy-data'

const initialState ={
    availableProduct: PRODUCTS,
    // filter it for the user of this app
    userProducts:PRODUCTS.filter(prod => prod.ownerId === 'u1')
}

const productReducer = (state=initialState , action)=>{

    return state
}

export default productReducer;