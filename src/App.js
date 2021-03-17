import React from "react";
import styled from 'styled-components'

import Grid from './components/Layout/Grid'
import FullWidthSection from './components/Layout/FullWidthSection'
import MaxWidthSection from './components/Layout/MaxWidthSection'
import Row from './components/Layout/Row'

const Header = styled(FullWidthSection)`
  padding: 4rem 1.5rem;
  background-color: rgb(240, 128, 128, 0.4);
`

const Nav = styled(Row)`
  a {
    margin-right: 1rem;
  }
`

const Content = styled(MaxWidthSection)`
  padding: 10rem 5rem;
  background-color: lightblue;
`

export default function App() {
  return (
    <Grid>
      <Header as="header">
        <Nav as ="nav" sd={2} ed={12} sm={2} em={6} ss={2} se={6}>
          <a href="#">Home</a>
          <a href="#">About</a>
        </Nav>
      </Header>
      <Content as="main">
        <Row>
          <p>This will be the content for my applications.</p>
        </Row>
      </Content>
    </Grid>
  );
}
