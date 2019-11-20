import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Create from './components/Create'
import Index from './components/Index'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div class="container">
        <h2>Welcome to React Express Tutorial</h2>
        <ul>
          <li><Link to={'/create'}>Create</Link></li>
          <li><Link to={'/index'}>List</Link></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path='/create' component={Create} />
          <Route path='/index' component={Index} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
