import { Container, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

export const Experience = () => {
  return (
    <Container maxWidth={'5xl'} pt={{ base: 10, md: 0 }} minH={'100vh'}>
      <Tabs isLazy orientation='vertical' colorScheme='cyan'>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          {/* initially mounted */}
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}
