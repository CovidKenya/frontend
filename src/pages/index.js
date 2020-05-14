import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExampleChart from "../components/ExampleChart"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome</p>
    <p>Now go build something great.</p>
    <ExampleChart />
    <Link to="/app/">Go to page "app"</Link>
  </Layout>
)

export default IndexPage
