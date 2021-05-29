/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../Home';
import About from '../About';
import Dashboard from '../Dashboard';

import GlobalStyle from '../../global-style';

const Container = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  const socket = new WebSocket(`ws://localhost:4040`);

  function handleWs(e) {
    e.preventDefault();
    socket.send('Test');
  }

  socket.onmessage = ({ data }) => {
    console.info(`Message from the server: ${data}`);
  };

  return (
    <Container>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />
          <button onClick={handleWs}>Send Socket Message</button>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
      <GlobalStyle />
    </Container>
  );
}
