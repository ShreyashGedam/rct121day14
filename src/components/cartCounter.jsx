import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCart } from "../redux/products/action"

export const CartCounter = () => {

    const cart = useSelector((sotre) => sotre.ecommerceData.cart)
    
    const dispatch = useDispatch()

    useEffect( () => {
        if(cart?.length === 0)
        {
            dispatch(fetchCart())
        }
    },[cart?.length , dispatch])

    return (
        <Box 
        backgroundColor={'black'}
        textColor={'white'}
        borderRadius='50%'
        width={'20px'}
        height={'20px'}
        textAlign='center'
        paddingBottom={'25px'}
        position='absolute'
        right={'0px'}
        top='0'
        >
            {cart?.length ? cart.length : 0}
        </Box>
    )
}