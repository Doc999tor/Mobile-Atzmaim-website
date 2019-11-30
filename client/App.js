import { h } from 'preact';
import Router from 'preact-router';
import Home from './Home';
import Error from './Error';

export const App = () => (
  <div>
    <h2 class='home'>Hello from SSR-Preact</h2>
    <Router>
      <Home path="/" />
      <Error path="/error" />
    </Router>
  </div>
);