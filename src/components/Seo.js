import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Seo = props => {
  const { site } = useStaticQuery(query)
  const { title, description } = props

  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title} `}
      meta={[{ name: "description", content: metaDescription }]}
    ></Helmet>
  )
}

export default Seo
