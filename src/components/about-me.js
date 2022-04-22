import { Container, Flex, Heading, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
  const { mdx: aboutMe } = useStaticQuery(graphql`
    query {
      mdx(fileAbsolutePath: { regex: "/data/about-me/" }) {
        frontmatter {
          img {
            childImageSharp {
              gatsbyImageData(width: 320, placeholder: BLURRED, quality: 100)
            }
          }
          img_alt
          number
          title
        }
        body
      }
    }
  `)
  const image = getImage(aboutMe.frontmatter.img)

  return (
    // TODO quitar ese 100vh
    <Container maxWidth={'5xl'} pt={{ base: 10, md: 0 }} minH={'100vh'}>
      <Stack direction={{ base: 'column', md: 'row' }} align={'center'}>
        <Flex
          align={{ base: 'flex-start', md: 'center' }}
          justify={{ base: 'flex-start', md: 'center' }}
          w='100%'
          pt={{ base: 10, md: 0 }}
          flex={1}
          mb={{ base: 10, md: 0 }}
          pb={{ base: 10, md: 0 }}
          id='about-me'
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
                    fontFamily={'monospace'}
                  >
                    {aboutMe.frontmatter.number}.
                  </Text>
                  <Heading
                    as='h2'
                    ps={3}
                    pe={4}
                    fontSize={{ base: '2xl', lg: '3xl' }}
                    color={'white'}
                  >
                    {aboutMe.frontmatter.title}
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
                <MDXRenderer>{aboutMe.body}</MDXRenderer>
              </Text>

              <List display='grid' ps={3} gridTemplateColumns={'1fr 1fr'}>
                {myTechnologies.map((technology) => (
                  <ListItem key={technology.id} fontSize='12px' fontFamily={'monospace'}>
                    <ListIcon as={ArrowForwardIcon} color='pink.400' />
                    {technology.name}
                  </ListItem>
                ))}
              </List>
            </Flex>
          </Flex>
        </Flex>
        <Flex flex={1} justify={{ base: 'center', lg: 'end' }} align='center' style={{ margin: 0 }}>
          <GatsbyImage
            image={image}
            alt={aboutMe.frontmatter.img_alt}
            placeholder='blurred'
            layout='fixed'
            className='about-me-img'
          />
        </Flex>
      </Stack>
    </Container>
  )
}
