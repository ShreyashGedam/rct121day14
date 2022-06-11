import { Flex } from "@chakra-ui/react"

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'

  import { ChevronDownIcon } from "@chakra-ui/icons"
  import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

export const Profile = () => {
    return (
        <Flex>
            <Menu>
              <MenuButton as={Button} rounded="full" variant = "link" cursor={"pointer"} minW="0">
              <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
              </MenuButton>
              <MenuList>
                 <MenuItem>Cart</MenuItem>
                 <MenuItem>Login</MenuItem>
                 <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
        </Flex>
    )
}