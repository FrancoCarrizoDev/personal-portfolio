import { Box, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { RiInstagramLine, RiGithubLine, RiLinkedinLine } from 'react-icons/ri'
import { useStaticQuery, graphql } from 'gatsby'
import * as React from 'react'
import NavBar from './Navbar'
import './layout.css'
import { Fade } from 'react-awesome-reveal'
import SEO from './seo'

const Layout = ({ pageTitle, children }) => {
  return (
    <Box bgColor={'gray.900'} color='whiteAlpha.900' minH='100vh'>
      <SEO title='Franco Carrizo' description='My personal portfolio' />

      <NavBar />
      <Fade triggerOnce delay={2000}>
        <div className='line-left'>
          <List className='ul' display={'flex'} flexDirection={'column'}>
            <ListItem margin={'5px auto'}>
              <ListIcon
                fontSize={'xl'}
                as={RiInstagramLine}
                margin={'5px auto'}
                color={'whiteAlpha.800'}
              ></ListIcon>
            </ListItem>
            <ListItem margin={'5px auto'}>
              <ListIcon
                fontSize={'xl'}
                as={RiGithubLine}
                margin={'5px auto'}
                color={'whiteAlpha.800'}
              ></ListIcon>
            </ListItem>
            <ListItem margin={'5px auto 15px auto'}>
              <ListIcon
                fontSize={'xl'}
                as={RiLinkedinLine}
                margin={'5px auto 15px auto'}
                color={'whiteAlpha.800'}
              ></ListIcon>
            </ListItem>
          </List>
        </div>
      </Fade>
      <Fade triggerOnce delay={2500}>
        <div className='line-right'>
          <List className='ul' display={'flex'} flexDirection={'column'}>
            <ListItem>
              <Text
                fontFamily={'Roboto mono'}
                fontSize={'sm'}
                id='float-label-email'
                display={'flex'}
                marginBottom={'200px'}
                color={'whiteAlpha.800'}
              >
                francoadrianc@gmail.com
              </Text>
            </ListItem>
          </List>
        </div>
      </Fade>
      <main id='main'>{children}</main>
    </Box>
  )
}
export default Layout
