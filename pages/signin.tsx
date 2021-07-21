import React from 'react';
import { Button, Center, Container, Heading, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';
import Navbar from '../src/common/Navbar';
import { useAuth } from '../src/lib/auth';

const Signin = () => {
  const { auth, siginWithGoogle } = useAuth();
  const router = useRouter();

  if (auth) {
    router.push((router.query.next as string) || '/');
  }

  return (
    <>
      <Navbar />
      <Container>
        <Center mt={10}>
          <VStack spacing="4">
            <Heading fontSize="3xl" mb={2}>
              Hello, Welcome to the Quiz App!!
            </Heading>
            <Button leftIcon={<FcGoogle />} onClick={() => siginWithGoogle()}>
              Sign In with Google
            </Button>
          </VStack>
        </Center>
      </Container>
    </>
  );
};

export default Signin;