import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function About() {
  const [state, setState] = useState('');

  useEffect(() => {
    axios.get('/api/about').then((res) => setState(res.data));
  }, []);

  return (
    <Container>
      <h2>About</h2>
      {state}
    </Container>
  );
}
