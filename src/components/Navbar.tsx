import { Avatar, Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"

export const Navbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" px="5" py="4" bgColor="gray.900">
      <Flex fontSize="2xl" cursor="pointer" as="a" href="/">
        <Text color="white">Rent</Text>
        <Text color="purple.400" fontWeight="bold">Car</Text>
      </Flex>

      <Menu>
        <MenuButton as={Button} bgColor="transparent" _hover={{ background: "transparent" }} _active={{ background: "transparent" }}>
          <Avatar name="Walisson Silva" src="https://media-exp1.licdn.com/dms/image/C4E03AQH0Hj76_ckWEw/profile-displayphoto-shrink_200_200/0/1654562536952?e=1671667200&v=beta&t=acg2LqYUL80l1XRx-CEo-EYxW5gv2KRi-hIHIRW1otE"  w="2.2rem" h="2.2rem" color="whiteAlpha.700" />
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My rents</MenuItem>
          <MenuItem>Advertise rent</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}