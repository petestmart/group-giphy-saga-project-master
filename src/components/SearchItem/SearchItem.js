import React, {Component} from 'react';
import {connect} from 'react-redux';

class SearchItem extends Component {

    handleClick = () => {
        this.props.dispatch({type: 'SELECT_FAVORITE', payload: this.props.image.id});
    }

    render() {
        return (
            <div>
                <img src={this.props.image.image_url} alt={this.props.image.id} />
                <button onClick={this.handleClick}>FAVORITE</button>
            </div>
        )
    }
}

export default connect()(SearchItem);