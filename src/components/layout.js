import { Box } from '@chakra-ui/react'
import { useStaticQuery, graphql } from 'gatsby'
import * as React from 'react'
import NavBar from './Navbar'
import './layout.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Box bgColor={'gray.900'} color='whiteAlpha.900' minH='100vh'>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <NavBar />
      <main>{children}</main>
    </Box>
  )
}
export default Layout
