import { Box, Button, Container, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { consoleText } from '../helpers/textAnimation'

const dataAnimationText = ['Hello world!', 'Nice to meet you!', 'Welcome to my portfolio!']
const colors = ['#ED64A6', '#00B5D8', '#9F7AEA']

export const Greeting = () => {
  useEffect(() => {
    consoleText(dataAnimationText, 'text', colors)
    return () => {
      const interval_id = window.setInterval(function () {}, 1000)

      for (let i = 1; i < interval_id; i++) {
        window.clearInterval(i)
      }
    }
  }, [])
  return (
    <Container maxWidth={'5xl'} pt={{ base: 10, md: 0 }} id='greeting-container'>
      <Flex
        align={{ base: 'flex-start', md: 'center' }}
        justify={{ base: 'flex-start', md: 'center' }}
        h={'100vh'}
        w='100%'
        pt={{ base: 10, md: 0 }}
      >
        <Flex
          justify={{ base: 'center', md: 'center' }}
          pt={{ base: '10', md: '4', xl: '0' }}
          pb={{ base: 0, lg: 10 }}
          px={'2'}
          w={'100%'}
        >
          <Flex
            flexDir={'column'}
            h={'100%'}
            justifyContent={{ base: 0, md: 'center' }}
            maxWidth={'5xl'}
          >
            <Box mt={{ base: 4, xl: 0 }} className='console-container' as={'div'}>
              <Text
                id='text'
                as={'span'}
                color={'pink.400'}
                fontFamily={'monospace'}
                fontSize={{ base: 'md', md: '18px' }}
              />
              <Box className='console-underscore' id='console' as={'div'}>
                &#95;
              </Box>
            </Box>
            <Heading
              as='h1'
              fontSize={{ base: '4xl', md: '5xl', '2xl': '6xl' }}
              mt={4}
              color={'white'}
            >
              Franco Carrizo.
            </Heading>
            <Heading
              as='h2'
              fontSize={{ base: '4xl', md: '5xl', '2xl': '6xl' }}
              mt={4}
              color={'whiteAlpha.700'}
            >
              I build solutions for the web.
            </Heading>
            <Text
              color={'whiteAlpha.700'}
              mt={4}
              maxWidth={'lg'}
              fontWeight={'medium'}
              fontSize={{ base: '15px', md: 'md', lg: '17px' }}
              as={'div'}
              className='greeting-body-container'
            >
              <Text>
                I'm <Text as='b'>a software engineer</Text> specialized in building (and
                occasionally designing) <Text as='b'>web-based technology solutions</Text>.
                Currently, I'm focused on building platforms for universities in my city at{' '}
                <Link href='https://bitlogic.io' isExternal title='I work in this company'>
                  Bitlogic
                </Link>
                .
              </Text>
            </Text>
            <Button
              colorScheme='pink'
              color={'pink.400'}
              variant='outline'
              mt={10}
              size='lg'
              fontFamily={'monospace'}
              maxWidth={'xs'}
              as={'a'}
              href='#about-me'
            >
              <Text fontWeight={'normal'} fontSize={'md'}>
                About me !
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}
