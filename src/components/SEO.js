import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

const SEO = props => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const title = props.title || data.site.siteMetadata.title
      return (
        <Helmet
          htmlAttributes={{
            lang: "de",
          }}
          title={title}
          titleTemplate={
            props.title ? `%s` : `%s - ${data.site.siteMetadata.title}`
          }
          link={
            [
              // { rel: 'shortcut icon', type: 'image/svg', href: `${favicon}` }
            ]
          }
        >
          {/* TODO:  Remember to remove this liune when going live */}
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex" />
        </Helmet>
      )
    }}
  />
)

SEO.defaultProps = {
  lang: "de",
  meta: [],
  keywords: [],
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
