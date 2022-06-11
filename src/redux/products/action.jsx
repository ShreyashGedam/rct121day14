import  Axios  from "axios"
import { useDispatch } from "react-redux"
import * as types from "./actiontype"

const fetchDataRequest = (payload) => {
    return {
        type : types.FETCH_DATA_REQUEST,
        payload
    }
}

const fetchDataSucess = (payload) => {
    return {
        type : types.FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchDataFailure = (payload) => {
    return {
        type : types.FETCH_DATA_FAILURE,
        payload
    }
}

const fetchData = (payload) => {
    return (dispatch) => {
        dispatch(fetchDataRequest())

    Axios.get("http://localhost:8000/products",{
        params : {
            ...payload
        }
    })
    .then(r =>
        // console.log(r.data)
         dispatch(fetchDataSucess(r.data))
        )
    .catch(e => dispatch(fetchDataFailure(e.data)))
    }
}

const getSingleProductRequest = (payload) => {
    return {
        type : types.GET_SINGLE_PRODUCT_REQUEST,
        payload
    }
}

const getSingleProductSuccess = (payload) => {
    return {
        type : types.GET_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}

const getSingleProductFailure = (payload) => {
    return {
        type : types.GET_SINGLE_PRODUCT_FAILURE,
        payload
    }
}

const getSingleProduct = (id) => (dispatch) => {

    dispatch(getSingleProductRequest())
    Axios.get(`/products/${id}`)
    .then( r => dispatch(getSingleProductSuccess(r.data)))
    .catch( e => dispatch(getSingleProductFailure(e.data)))
}

const addProductCartRequest = (payload) => {
    return {
        type : types.ADD_PRODUCT_CART_REQUEST,
        payload
    }
}

const addProductCartSuccess = (payload) => {
    return {
        type : types.ADD_PRODUCT_CART_SUCCESS,
        payload
    }
}

const addProductCartFailure = (payload) => {
    return {
        type : types.ADD_PRODUCT_CART_FAILURE,
        payload
    }
}

const addProductCart = (product) => dispatch => {
    dispatch(addProductCartRequest)
    Axios.post("/cart",product)
    .then( r => dispatch(addProductCartSuccess(r.data)))
    .catch( e => dispatch(addProductCartFailure(e.data)))
}

const fetchCartRequest = (payload) => {
    return {
        type : types.FETCH_CART_REQUEST,
        payload
    }
}

const fetchCartSuccess = (payload) => {
    return {
        type : types.FETCH_CART_SUCCESS,
        payload
    }
}

const fetchCartFailure = (payload) => {
    return {
        type : types.FETCH_CART_FAILURE,
        payload
    }
}

const fetchCart = (payload) => dispatch =>{
    dispatch(fetchCartRequest())
    Axios.get('/cart')
    .then( r => dispatch(fetchCartSuccess(r.data)))
    .catch( e => dispatch(fetchCartFailure(e.data)))

}

const deleteProductCartRequest = (payload) => {
    return {
        type : types.REMOVE_PRODUCT_REQUEST,
        payload
    }
}

const deleteProductCartSuccess = (payload) => {
    return {
        type : types.REMOVE_PRODUCT_SUCCESS,
        payload
    }
}

const deleteProductCartFailure = (payload) => {
    return {
        type : types.REMOVE_PRODUCT_FAILURE,
        payload
    }
}

 const deleteProductCart = (id) => dispatch => {
    dispatch(deleteProductCartRequest)
    Axios.delete(`/cart/${id}`)
    .then( () => dispatch(fetchCart()))
    .then( r => dispatch(deleteProductCartSuccess(r.data)))
    .catch( e => dispatch(deleteProductCartFailure(e.data)))


}

export {fetchData , getSingleProduct,addProductCart,fetchCart,deleteProductCart}