import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Link,
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
  Text
} from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const EXPERIENCE = [
  {
    company: 'Bitlogic',
    href: 'https://www.bitlogic.io/',
    companyDesc: 'Software development company',
    job: 'Software Engineer',
    date: 'May 2021 - Present',
    description: [
      'Creation of modern, maintainable, accessible and scalable web-based software products.',
      'Host scrum ceremonies, create necessary documentation, and present project progress to the client.',
      'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, Gatsby, React, Bootstrap, Material UI, Strapi, NodeJs, and Java'
    ]
  },
  {
    company: 'Coderhouse',
    href: 'https://www.coderhouse.com/',
    companyDesc: 'Software development teaching company',
    job: 'Front End Teacher',
    date: 'Jun 2021 - Present',
    description: [
      'Participate in live classes with students, adding from our work experience and answering queries in the chat.',
      'Answer queries outside of class, correct assignments, take attendance and monitor the progress of assigned students.',
      'Plan and give a support class per week to deepen topics that students need.'
    ]
  },
  {
    company: 'Git Cordoba',
    href: 'https://gitcordoba.com/',
    companyDesc: 'Tourist Company',
    job: 'Software Developer',
    date: 'Oct 2019 - May 2021',
    description: [
      'Development, maintenance and monitoring of the airline system, including B2B and B2C clients.',
      'Implementation of a payment gateway for the collection of tickets or packages sold.',
      'Some technologies I worked with Javascript, React, Materialize, .NET Core, MS SQL.'
    ]
  },
  {
    company: 'Argentinian State',
    href: '#',
    companyDesc: 'Government',
    job: 'Software Developer',
    date: 'Jan 2017 - Dec 2017',
    description: [
      'My first job was to create views and screens for an ERP system financed by the Argentine state.',
      'Develop and maintain stored procedures in MS SQL.',
      'The technology to develop the desktop application was C#.'
    ]
  }
]

export const Experience = () => {
  return (
    <Container maxWidth={'5xl'} pt={10} id='experience'>
      <Flex align={'center'} my={4}>
        <Flex align={'baseline'}>
          <Text
            as={'span'}
            fontSize={{ base: 'md', md: '18px' }}
            color={'pink.400'}
            fontFamily={'Roboto Mono'}
          >
            02.
          </Text>
          <Heading as='h2' ps={3} pe={4} fontSize={'2xl'} color={'white'}>
            Where I've Worked
          </Heading>
        </Flex>
        <hr style={{ width: '30%' }} />
      </Flex>
      <Tabs isLazy orientation='vertical' colorScheme='cyan' mt='10' className='experience-tabList'>
        <TabList flexWrap={'wrap'}>
          {EXPERIENCE.map((experience, index) => (
            <Tab
              key={`exp-${index}`}
              _focus={{
                color: 'pink.400',
                borderLeft: '2px solid #ED64A6',
                backgroundColor: '#1A202C'
              }}
              _selected={{
                color: 'pink.400',
                borderLeft: '2px solid #ED64A6',
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
                {experience.company}
              </Text>
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {EXPERIENCE.map((experience, index) => (
            <TabPanel key={`expDesc-${index}`}>
              <Fade>
                <Flex direction={{ base: 'column', md: 'row' }} fontWeight='bold' mb='2'>
                  <Text as={'h3'} me={'1'}>
                    {experience.job}{' '}
                  </Text>
                  <Link
                    isExternal
                    href={experience.href}
                    title={experience.companyDesc}
                    color='pink.400'
                  >
                    @{experience.company}
                  </Link>
                </Flex>
                <Text fontFamily={'Roboto Mono'} fontSize='sm' mb='5'>
                  {experience.date}
                </Text>
                <List>
                  {experience.description.map((exp, index) => (
                    <ListItem display={'flex'} fontSize='sm' mb='2' key={`exp-desc-${index}`}>
                      <ListIcon pt='1' h='100%' as={ArrowForwardIcon} color='pink.400' />
                      <Text>{exp}</Text>
                    </ListItem>
                  ))}
                </List>
              </Fade>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  )
}
