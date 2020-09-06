import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const Home = () => (<div><h1>Welcome MITALI</h1><Link to='/about'>Go to about</Link></div>)
const About = ({ name }) => (<div><h1>About {name}</h1></div>)

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            render={(renderProps) => (
              <div>
                Welcome to our hackathon test site!
                <Home {...this.props} {...renderProps} />
                <a href="/api/GetList">Click to see the team members</a>
              </div>
            )} />
        </Switch>
      </Router>
    )
  }
}

export default App;
