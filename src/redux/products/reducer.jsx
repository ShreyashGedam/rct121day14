import * as types from "./actiontype"

const initState = {
    products : [],
    error : "",
    currentProduct : {},
    loading : false,
    cart : []
}

const reducer = (state = initState , action) => {
    
    switch(action.type){
        case types.FETCH_DATA_REQUEST : 
        return {
            ...state,
            error : "",
            loading : true
        }

        case types.FETCH_DATA_SUCCESS : 
        return {
            ...state,
            products : action.payload,
            error : "",
            loading : false
        }

        case types.FETCH_DATA_FAILURE : 
        return {
            ...state,
            error : payload,
            loading : false
        }

        // ......................................

        case types.GET_SINGLE_PRODUCT_REQUEST : 
        return {
            ...state,
            error : "",
            loading : true
        }

        case types.GET_SINGLE_PRODUCT_SUCCESS: 
        return {
            ...state,
            currentProduct : action.payload,
            error : "",
            loading : false
        }

        case types.GET_SINGLE_PRODUCT_FAILURE : 
        return {
            ...state,
            error : payload,
            loading : false
        }

        // .........................................

        case types.ADD_PRODUCT_CART_REQUEST : 
        return {
            ...state,
            error : "",
            loading : true
        }

        case types.ADD_PRODUCT_CART_SUCCESS: 
        return {
            ...state,
            cart : [...state , action.payload],
            error : "",
            loading : false
        }

        case types.ADD_PRODUCT_CART_FAILURE : 
        return {
            ...state,
            error : payload,
            loading : false
        }

        // .............................................

        case types.FETCH_CART_REQUEST : 
        return {
            ...state,
            error : "",
            loading : true
        }

        case types.FETCH_CART_SUCCESS: 
        return {
            ...state,
            cart : [ ...action.payload],
            error : "",
            loading : false
        }

        case types.FETCH_CART_FAILURE : 
        return {
            ...state,
            error : payload,
            loading : false
        }

        case types.REMOVE_PRODUCT_REQUEST : 
        return {
            ...state,
            error : "",
            loading : true
        }

        case types.REMOVE_PRODUCT_FAILURE: 
        return {
            ...state,
            error : payload,
            loading : false
        }

        default : return state
    }
}

export default reducer