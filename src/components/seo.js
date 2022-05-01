import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
const SEO = ({ title, description }) => {
  return (
    <Helmet
      title={title}
      htmlAttributes={{
        lang: 'en'
      }}
    >
      <meta name='description' content={description} />
      {<meta property='og:url' content={'franco-carrizo.ar'} />}
      {title && <meta property='og:title' content={title} />}
      {description && <meta property='og:description' content={description} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}
SEO.defaultProps = {
  title: null,
  description: null
}
