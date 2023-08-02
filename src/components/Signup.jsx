import React from 'react'
import {Button, Container, Heading, Input, Text, VStack,Avatar} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
       <form>
            <VStack 
                alignItems={"strech"} 
                spacing={"8"} 
                w={["full","96"]} 
                m={"auto"} 
                my={"16"}
            >
                <Heading>VIDEO HUB</Heading>
                <Avatar alignSelf={"center"} boxSize={"32"}></Avatar>
                <Input 
                    placeholder={'Name'}
                    type={"text"} 
                    required 
                    focusBordercolor={'purple.500'}
                />
                <Input 
                    placeholder={'Password'}
                    type={"password"} 
                    required 
                    focusBordercolor={'purple.500'}
                />
                <Input 
                    placeholder={'Password'}
                    type={"password"} 
                    required 
                    focusBordercolor={'purple.500'}
                />
                
                <Button colorScheme={'purple'} type={'submit'}>
                    Sign Up
                </Button>

                <Text textAlign={"right"}>
                    Already Signed Up?{" "}</Text>
                    <Button variant={'link'} colorScheme={'purple'}>
                        <Link to={'/login'}>Log In</Link>
                    </Button>
            </VStack>
        </form> 
    </Container>
  )
}

export default Signup;