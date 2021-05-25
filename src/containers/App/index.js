import React from 'react';
import styled from 'styled-components';

import HomePage from '../Home';

import GlobalStyle from '../../global-style'

const Container = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <HomePage />
      <GlobalStyle />
    </Container>
  )
}
export default App;
