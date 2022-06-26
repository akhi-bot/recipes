import React from "react"
import { Link } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
const TagList = props => {
  const { recipes = [] } = props
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, i) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })
          return (
            <Link to={`/tags/${slug}`} key={i}>
              {text}({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
