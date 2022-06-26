import React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const recipes = () => {
  return (
    <Layout>
      <Seo title="recipes" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default recipes
