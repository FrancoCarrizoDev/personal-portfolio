import { Box, Container, Flex, Grid, Heading, List, ListItem, Text } from '@chakra-ui/react'
import { faCode, faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const MY_PROJECT = {
  id: '1',
  state: 'In Progress',
  projectSteps: [
    {
      id: '1',
      title: 'Design',
      state: 'Finished',
      description: 'Designing the UI and UX of the application'
    },
    {
      id: '2',
      title: 'Development',
      state: 'In Progress',
      description: 'Developing the application',
      modules: [
        {
          id: '1',
          title: 'User Module',
          state: 'Finished',
          description: 'User module is responsible for user authentication and registration'
        },
        {
          id: '2',
          title: 'Categories Module',
          state: 'Finished',
          description: 'Categories module is responsible for managing categories of the business'
        },
        {
          id: '3',
          title: 'Products Module',
          state: 'Finished',
          description: 'Products module is responsible for managing products of the business'
        },
        {
          id: '4',
          title: 'Filter Module',
          state: 'Finished',
          description: 'Filter module is responsible for filtering products'
        },
        {
          id: '5',
          title: 'Image Module',
          state: 'Finished',
          description: 'Integration with Cloudinary for uploading images'
        },
        {
          id: '6',
          title: 'Cart Module',
          state: 'In Progress',
          description: 'Cart module is responsible for managing cart of the user'
        },
        {
          id: '7',
          title: 'Payment Module',
          state: 'Backlog',
          description: 'Payment module is responsible for managing payments'
        },
        {
          id: '8',
          title: 'Orders Module',
          state: 'Backlog',
          description: 'Orders module is responsible for managing orders of the user'
        },
        {
          id: '9',
          title: 'Reviews Module',
          state: 'Backlog',
          description: 'Reviews module is responsible for managing reviews of the user'
        },
        {
          id: '10',
          title: 'Notifications Module',
          state: 'Backlog',
          description: 'Notifications module is responsible for managing notifications of the user'
        }
      ]
    },
    {
      id: '3',
      title: 'Testing',
      state: 'Backlog',
      description: 'Testing the application'
    },
    {
      id: '4',
      title: 'Deployment',
      state: 'Backlog',
      description: 'Deploying the application'
    }
  ],
  name: 'OwlShip',
  description:
    'Bored of small applications like "pokedex", "to-do list" or a "calendar" I decided to make a totally dynamic e-commerce, where the categories will be dynamic and loaded giving meaning to the business.',
  technologies: ['React', 'Node JS', 'PostgreSQL', 'AWS', 'Docker', 'Git']
}

export const Work = () => {
  return (
    <Container maxWidth={'5xl'} id='experience' mt={10} pt={10} minH={'100vh'}>
      <Flex align={'center'} mb={10}>
        <Flex align={'baseline'}>
          <Text
            as={'span'}
            fontSize={{ base: 'md', md: '18px' }}
            color={'pink.400'}
            fontFamily={'Roboto Mono'}
          >
            03.
          </Text>
          <Heading as='h2' ps={3} pe={4} fontSize={'2xl'} color={'white'}>
            Some Things I’ve Built
          </Heading>
        </Flex>
        <hr style={{ width: '30%' }} />
      </Flex>
      <Box position={'relative'} bg={'gray.800'} shadow={'md'} boxShadow={'lg'}>
        <Flex h='100%' position={'absolute'} opacity={'.2'}>
          <StaticImage
            src='../images/frontIndex.png'
            alt='owlShipPhoto'
            placeholder='blurred'
            className='work-img'
          />
        </Flex>
        <Flex direction={'column'} bg={'blackAlpha.500'} py={10} px={7}>
          <Text fontSize={'sm'} mb={3} fontFamily={'Roboto Mono'} color={'pink.400'}>
            Big Personal Project - {MY_PROJECT.state}
          </Text>
          <Heading as='h3' fontSize={'2xl'} mb={3} color='white'>
            OwlShip
          </Heading>
          <Text mb={3} color='white'>
            {MY_PROJECT.description}
          </Text>
          <List
            fontFamily={'Roboto Mono'}
            fontSize='sm'
            display={'flex'}
            flexWrap='wrap'
            justifyContent={'flex-start'}
            mb={3}
          >
            {MY_PROJECT.technologies.map((tech) => (
              <ListItem me={3} mb={3}>
                {tech}
              </ListItem>
            ))}
          </List>
          <Box>
            <FontAwesomeIcon size='lg' icon={faExternalLink} style={{ marginRight: '10px' }} />
            <FontAwesomeIcon size='lg' icon={faCode} />
          </Box>
        </Flex>
      </Box>
    </Container>
  )
}
