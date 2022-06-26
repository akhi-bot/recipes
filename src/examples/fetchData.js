import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query fetchData {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        person {
          name
          age
        }
        complexData {
          name
        }
        title
      }
    }
  }
`
const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      {/* <h1>{data.site.info.person.name}</h1> */}
      <h2>site title is : {title}</h2>
    </div>
  )
}

export default FetchData
