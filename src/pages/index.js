import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome</p>
    <p>Now go build something great.</p>
    <Link to="/app/">Go to page "app"</Link>
  </Layout>
)

export default IndexPage
