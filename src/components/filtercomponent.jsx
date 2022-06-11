import { Box,Text,VStack,Checkbox,CheckboxGroup,MenuButton,Menu,Button,MenuList,MenuOptionGroup,MenuItemOption,MenuDivider } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { fetchData } from "../redux/products/action"


export const FilterComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    
    const [category , setCategory] = useState(searchParams.getAll("category") || [])
    // console.log(searchParams.getAll("category"))

    const categoryHandler = (value) => {
        // console.log(value)
        setCategory(value)   
    }

    const dispatch = useDispatch()

    useEffect(() => {

        if(category){
            setSearchParams({category : category} ,{replace : true} )    
        }
        let params = {
            category : searchParams.getAll("category")
        }
        dispatch(fetchData(params))
    },[category,searchParams,setSearchParams,dispatch])

    return (
        <div>
            <Box>
                <Box display={{base : "none" , md : "block"}} p = "1rem 2rem">
                    <Text fontSize={"2xl"}>Filters</Text>
                    <Text>Category</Text>
                    <CheckboxGroup colorScheme='green' defaultValue={category} onChange={categoryHandler}>
                         <VStack alignItems={"baseline"}>
                         <Checkbox value="men's clothing">Mens Clothing</Checkbox>
                         <Checkbox value="women's clothing">Womens Clothing</Checkbox>
                         <Checkbox value="jewelery">Jewellery</Checkbox>
                         <Checkbox value="electronics">Electronics</Checkbox>
                         <Checkbox value="bags">Bags</Checkbox>
                        </VStack>
                    </CheckboxGroup>
                </Box>
                <Box display={{base : "block",md : "none"}} p = "0rem 2rem">
                     <Menu closeOnSelect={false}>
                       <MenuButton as={Button} colorScheme='blue'>
                         MenuItem
                       </MenuButton>
                       <MenuList minWidth='240px'>
                         <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
                           <MenuItemOption value='asc'>Ascending</MenuItemOption>
                           <MenuItemOption value='desc'>Descending</MenuItemOption>
                         </MenuOptionGroup>
                         <MenuDivider />
                         <MenuOptionGroup title='Country' type='checkbox'>
                           <MenuItemOption value='email'>Email</MenuItemOption>
                           <MenuItemOption value='phone'>Phone</MenuItemOption>
                           <MenuItemOption value='country'>Country</MenuItemOption>
                         </MenuOptionGroup>
                       </MenuList>
                     </Menu>
                </Box>
            </Box>
        </div>
    )
}