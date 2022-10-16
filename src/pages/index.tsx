import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Select, Text } from '@chakra-ui/react'
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

        <Box px="2rem" py="2rem">
          <Heading color="gray.200" fontWeight="medium">Find the perfect car</Heading>

          <Flex direction="column" gap="1rem" mt="2rem">
            <FormControl mb="2">
              <FormLabel color="white">Car name</FormLabel>
              <Input variant='filled' _focus={{ background: "white" }} />
            </FormControl>
            
            <FormControl mb="2">
              <FormLabel color="white">Car category</FormLabel>
              <Select variant="filled" _focus={{ background: "white" }}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>

            <FormControl mb="2">
              <FormLabel color="white">Max rent value</FormLabel>
              <NumberInput placeholder="Max value" step={50} defaultValue={150} min={50} max={1000} variant="filled" _focus={{ background: "white" }}>
                <NumberInputField _focus={{ background: "white" }} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <Button colorScheme="purple" mt="2">Search</Button>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default Home
