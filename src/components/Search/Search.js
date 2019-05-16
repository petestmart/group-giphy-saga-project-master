import React, { Component } from 'react';
import {connect} from 'react-redux';


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
      this.props.dispatch({type:'SEARCH_IMAGES', payload:this.state.keyword});
  } 

    render() {
        return (
            <div>
                <h2>SEARCH</h2>
                <input type="text" placeholder="KEYWORD" onChange={this.handleChange} />
                <button onClick={this.handleClick}>SEARCH</button>
            </div>
        )
    }
}

const mapRedux = reduxState => {
    return {images: reduxState.pulledImages}
}


export default connect(mapRedux)(Search);