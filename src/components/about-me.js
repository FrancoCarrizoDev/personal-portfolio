import {
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text
} from '@chakra-ui/react'

import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './about-me.css'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const myTechnologies = [
  {
    id: '1',
    name: 'JavaScript'
  },
  {
    id: '2',
    name: 'Node JS'
  },
  {
    id: '3',
    name: 'React'
  },
  {
    id: '4',
    name: 'Java'
  },
  {
    id: '5',
    name: 'Bootstrap'
  },
  {
    id: '6',
    name: 'PostgreSQL'
  }
]

export const AboutMe = () => {
  return (
    <Container maxWidth={'5xl'} py={{ base: '50px', md: '100px' }} id='about-me'>
      <Stack direction={{ base: 'column', md: 'row' }} align={'center'}>
        <Flex
          align={{ base: 'flex-start', md: 'center' }}
          justify={{ base: 'flex-start', md: 'center' }}
          w='100%'
          flex={1}
          mb={{ base: 10, md: 0 }}
          pb={{ base: 10, md: 0 }}
        >
          <Flex
            justify={{ base: 'center', md: 'center' }}
            pt={{ base: '10', md: '4' }}
            px={'2'}
            w={'100%'}
          >
            <Flex flexDir={'column'} justifyContent={{ base: 0, md: 'center' }} maxWidth={'5xl'}>
              <Flex align={'center'} mt={4}>
                <Flex align={'baseline'}>
                  <Text
                    as={'span'}
                    fontSize={{ base: 'md', md: '18px' }}
                    color={'pink.400'}
                    fontFamily={'Roboto Mono'}
                  >
                    01.
                  </Text>
                  <Heading as='h2' ps={3} pe={4} fontSize={'2xl'} color={'white'}>
                    About Me
                  </Heading>
                </Flex>
                <hr style={{ flexGrow: '1' }} />
              </Flex>

              <Text
                color={'whiteAlpha.700'}
                mt={4}
                maxWidth={'lg'}
                fontWeight={'medium'}
                fontSize={{ base: '14px', md: '15px', lg: '16px', xl: '17px' }}
                as={'div'}
                className='text-body-container'
              >
                <Text>
                  Hello! My name is Franco and I enjoy creating solutions that live on the web. My
                  interest in web development started in 2018 when I decided to try, out of
                  curiosity, to create my first website. I really enjoy the road traveled, designs,
                  architectures, technologies!
                </Text>
                <Text>
                  Fast forward to today, and I had the privilege of working on{' '}
                  <Text as='b'>a project for my country's government </Text> and then for{' '}
                  <Link href='https://gitcordoba.com' isExternal title='I worked in this company'>
                    a tourism company
                  </Link>{' '}
                  (always talking about systems and development). My main focus these days is
                  creating accessible and inclusive products and digital experiences at{' '}
                  <Link href='https://bitlogic.io' isExternal title='I work in this company'>
                    Bitlogic
                  </Link>{' '}
                  for a variety of clients.
                </Text>
                <Text>
                  Also, I am <Text as='b'>teaching front-end web development</Text> for 1 year as a
                  tutor at the{' '}
                  <Link href='https://www.coderhouse.com' isExternal title='I work in this company'>
                    coderhouse academy
                  </Link>
                  .
                </Text>
                <Text>
                  I am a self-taught person who likes to learn a lot and{' '}
                  <Text as='b'>I enjoy what I do</Text>.
                </Text>
                <Text>
                  Here are <Text as={'b'}>some</Text> technologies I've been working with recently:
                </Text>
              </Text>

              <List display='grid' ps={3} gridTemplateColumns={'1fr 1fr'}>
                {myTechnologies.map((technology) => (
                  <ListItem key={technology.id} fontSize='12px' fontFamily={'Roboto Mono'}>
                    <ListIcon as={ArrowForwardIcon} color='pink.400' />
                    {technology.name}
                  </ListItem>
                ))}
              </List>
            </Flex>
          </Flex>
        </Flex>
        <Flex flex={1} justify={{ base: 'center', lg: 'end' }} align='center' style={{ margin: 0 }}>
          <StaticImage
            src='../images/my-photo.jpg'
            alt='My personal photo'
            placeholder='blurred'
            layout='fixed'
            className='about-me-img'
            width={300}
            height={300}
          />
        </Flex>
      </Stack>
    </Container>
  )
}
