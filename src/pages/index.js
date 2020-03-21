/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey Buddy</h1>
    <p>
      Das ist eine App zum Austausch von Personen zu Zeiten der Corona
      Isolation.
      <br />
      Du möchtest zuhören oder dich mitteilen. Dann leg direkt los.
      <br />
      Alles anonym und vertraulich (kein Online-Datenspeicher).
    </p>
    <div
      css={css`
        margin-bottom: 1em;
      `}
    >
      <Button>👂 Ich hör gerne zu</Button>
      <Button
        css={css`
          margin-left: 1em;
        `}
      >
        🤫 Ich hab etwas auf dem Herzen
      </Button>
    </div>
  </Layout>
)

const Button = styled.button`
  > span.icon {
    font-size: 2em;
  }
`

export default IndexPage
