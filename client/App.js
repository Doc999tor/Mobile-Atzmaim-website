import { h } from 'preact';
import Router from 'preact-router';
import Home from './Home';
import Error from './Error';

const App = ({ url }) => (
  <div>
    <h2>Hello from SSR-Preact</h2>
    <Router url={url}>
      <Home path="/" />
      <Error path="/error" />
    </Router>
  </div>
);

export default App;