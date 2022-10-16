import { Box, Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | RentCar</title>
      </Head>

      <Box bgColor="gray.700" w="100vw" h="100vh">
        <Navbar />
      </Box>
    </>
  )
}

export default Home
