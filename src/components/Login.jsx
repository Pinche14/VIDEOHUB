
import React from 'react'
import {Button, Container, Heading, Input, Text, VStack} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
const Login = () => {
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
                <Heading>Welcome Back</Heading>
                <Input 
                    placeholder={'Email'}
                    type={"email"} 
                    required 
                    focusBordercolor={'purple.500'}
                />
                <Input 
                    placeholder={'Password'}
                    type={"password"} 
                    required 
                    focusBordercolor={'purple.500'}
                />
                <Button variant={'link'} alignself={'flex-end'}>
                    <Link to={'/forgetpassword'}>Forget Password</Link>
                </Button>

                <Button colorScheme={'purple'} type={'submit'}>
                    Log In
                </Button>

                <Text textAlign={"right"}>
                    New User?{" "}</Text>
                    <Button variant={'link'} colorScheme={'purple'}>
                        <Link to={'/signup'}>Sign Up</Link>
                    </Button>
            </VStack>
        </form> 
    </Container>
  )
}

export default Login