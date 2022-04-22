import * as React from 'react'
import { AboutMe } from '../components/about-me'
import { Greeting } from '../components/greeting'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle='Franco Carrizo | Portfolio'>
      <Greeting />
      <AboutMe />
    </Layout>
  )
}

export default IndexPage
