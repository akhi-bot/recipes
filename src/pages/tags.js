import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
import Seo from "../components/Seo"
const tags = props => {
  const newTag = setupTags(props.data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <Seo title="tags" />
      <main className="page">
        <section className="tags-page">
          {newTag.map((tag, i) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link to={`/tags/${slug}`} key={i} className="tag">
                <h5>{text}</h5>
                <p>{value}</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default tags
