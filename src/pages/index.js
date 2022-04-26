import * as React from 'react'
import { AboutMe } from '../components/about-me'
import { Experience } from '../components/experience'
import { Greeting } from '../components/greeting'
import { Work } from '../components/work'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle='Franco Carrizo | Portfolio'>
      <Greeting />
      <AboutMe />
      <Experience />
      <Work />
    </Layout>
  )
}

export default IndexPage
