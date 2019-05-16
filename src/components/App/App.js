import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';



class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <h1>Giphy Search!</h1>
          <Route exact path="/" component={Search}/>
          <Route path="/favorites" component={Favorites}/>
        </Router>
      </div>
    );
  }

}

export default App;
