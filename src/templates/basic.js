import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/Layout"

const Basic = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  return (
    <Layout bodyClass="page-default-single">
      <div className="container">
        <div className="content">
          <div>
            <h1 className="title">{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
      }
      fields {
        slug
      }
      html
    }
  }
`

export default Basic
