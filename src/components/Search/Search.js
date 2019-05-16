import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchList from '../SearchList/SearchList';

class Search extends Component {

  state = {
      keyword: ''
  }
  
  handleChange = (event) => {
      this.setState({
          keyword : event.target.value
      })
  }

  handleClick = () => {
      this.props.dispatch({type:'SEARCH_IMAGES', payload: this.state.keyword});
  } 

    render() {
        return (
            <div>
                <h2>SEARCH</h2>
                <input type="text" placeholder="keyword" onChange={this.handleChange} />
                <button onClick={this.handleClick}>SEARCH</button>
                <SearchList />
            </div>
        )
    }
}

export default connect()(Search);