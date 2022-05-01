import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Link
} from '@chakra-ui/react'
import { faCode, faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const MY_PROJECT = {
  id: '1',
  state: 'In Progress',
  projectSteps: [
    {
      id: '1',
      title: 'Design',
      state: 'Finished',
      description: 'Designing the UI and UX of the application',
      modules: [
        {
          id: '1',
          title: 'Globals Components',
          state: 'Finished',
          description: 'Designing the UI and UX of the application'
        },
        {
          id: '2',
          title: 'Admin Panels Views',
          state: 'Finished',
          description: 'Designing the UI and UX of the admin panels'
        },
        {
          id: '3',
          title: 'Product Page',
          state: 'Finished',
          description: 'Designing the UI and UX of the login page'
        }
      ]
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
      description: 'Testing the application',
      modules: [
        {
          id: '1',
          title: 'Test Module',
          state: 'Backlog',
          description: 'Not yet planned'
        }
      ]
    },
    {
      id: '4',
      title: 'Deployment',
      state: 'Backlog',
      description: 'Deploying the application',
      modules: [
        {
          id: '1',
          title: 'Payment Module',
          state: 'Backlog',
          description: 'Not yet planned'
        }
      ]
    }
  ],
  name: 'OwlShip',
  description:
    'Bored of small applications like "pokedex", "to-do list" or a "calendar" I decided to make a totally dynamic e-commerce, where the categories will be dynamic and loaded giving meaning to the business.',
  technologies: ['Bootstrap', 'React', 'Node JS', 'Express', 'MongoDB', 'Cloudinary']
}

export const Work = () => {
  return (
    <Container maxWidth={'5xl'} py={{ base: '50px', md: '100px' }} id='work'>
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
            Working On Myself
          </Heading>
        </Flex>
        <hr style={{ width: '30%' }} />
      </Flex>
      <Box
        position={'relative'}
        h='100%'
        bg={'blackAlpha.800'}
        borderRadius='md'
        shadow='md'
        boxShadow={'lg'}
      >
        <Flex h='100%' position={'absolute'} opacity={'.2'}>
          <StaticImage
            src='../images/back-app.png'
            alt='owlShipPhoto'
            placeholder='blurred'
            className='work-img selectDisable'
            style={{ zIndex: '1' }}
          />
        </Flex>
        <Flex direction={'column'} bg={'blackAlpha.500'} py={10} px={7}>
          <Text fontSize={'sm'} mb={4} fontFamily={'Roboto Mono'} color={'cyan.400'} zIndex={1}>
            Big Personal Project - {MY_PROJECT.state}
          </Text>
          <Heading as='h3' fontSize={'2xl'} mb={4} color='white' zIndex={1}>
            OwlShip
          </Heading>
          <Text mb={5} color='white' zIndex={1}>
            {MY_PROJECT.description}
          </Text>
          <Tabs
            isFitted
            isLazy
            zIndex={1}
            colorScheme='cyan'
            mb={4}
            variant='enclosed'
            className='work-tabList'
          >
            <TabList borderBottom={'1px solid #ED64A6'} flexWrap={'wrap'}>
              {MY_PROJECT.projectSteps.map((projectSteps, index) => (
                <Tab
                  key={`exp-${index}`}
                  _focus={{
                    color: 'pink.400',
                    backgroundColor: '#1A202C'
                  }}
                  _selected={{
                    color: 'pink.400',
                    borderLeft: '1px solid #ED64A6',
                    borderTop: '1px solid #ED64A6',
                    borderRight: '1px solid #ED64A6',
                    borderBottom: '1px solid #ED64A6',
                    backgroundColor: '#1A202C'
                  }}
                >
                  <Text
                    w='100%'
                    textAlign={'start'}
                    fontFamily={'Roboto Mono'}
                    fontSize={'14px'}
                    py='1'
                  >
                    {projectSteps.title}
                  </Text>
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {MY_PROJECT.projectSteps.map((projectSteps, index) => (
                <TabPanel key={`expDesc-${index}`}>
                  <Fade>
                    <Flex direction={'row'} fontWeight='bold' mb='2'>
                      <Text as={'h3'} me={'1'}>
                        {projectSteps.title}{' '}
                      </Text>
                      <Text color='pink.400' fontWeight='semibold'>
                        @{projectSteps.state}
                      </Text>
                    </Flex>
                    <Text fontFamily={'Roboto Mono'} fontSize='sm' mb='5'>
                      {projectSteps.description}
                    </Text>
                    <List>
                      {projectSteps.modules.map((modules, index) => (
                        <ListItem display={'flex'} fontSize='sm' mb='2' key={`exp-desc-${index}`}>
                          <ListIcon pt='1' h='100%' as={ArrowForwardIcon} color='pink.400' />
                          <Flex direction='column'>
                            <Flex align={'center'} fontWeight='semibold'>
                              <Text fontWeight={'medium'} me='3'>
                                {modules.title}
                              </Text>
                              <Text fontFamily={'Roboto Mono'} color='pink.400'>
                                - {modules.state}
                              </Text>
                            </Flex>
                            <Text>{modules.description}</Text>
                          </Flex>
                        </ListItem>
                      ))}
                    </List>
                  </Fade>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
          <List
            fontFamily={'Roboto Mono'}
            fontSize='sm'
            display={'flex'}
            flexWrap='wrap'
            justifyContent={'flex-start'}
            mb={3}
            zIndex={1}
          >
            {MY_PROJECT.technologies.map((tech, index) => (
              <ListItem me={3} mb={3} key={`project-tech-${index}`}>
                {tech}
              </ListItem>
            ))}
          </List>
          <Box textAlign={{ base: 'start', md: 'end' }} zIndex={9}>
            <Link
              href='https://github.com'
              isExternal
              title='Go to application'
              me={5}
              className='work-link'
            >
              <FontAwesomeIcon size='lg' icon={faExternalLink} />
            </Link>
            <Link
              href='https://github.com'
              isExternal
              title='Go to application'
              className='work-link'
            >
              <FontAwesomeIcon size='lg' icon={faCode} />
            </Link>
          </Box>
        </Flex>
      </Box>
    </Container>
  )
}
