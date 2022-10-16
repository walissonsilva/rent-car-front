import { Box, Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Box bgColor="gray.700" w="100vw" h="100vh">
      <Flex>
        <Text color="white">Rent</Text>
        <Text color="red.400">Car</Text>
      </Flex>
    </Box>
  )
}

export default Home
