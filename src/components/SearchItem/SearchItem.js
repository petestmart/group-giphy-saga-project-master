import React, {Component} from 'react';
import {connect} from 'react-redux';

class SearchItem extends Component {

    handleClick = () => {
        this.props.dispatch({type: 'SELECT_FAVORITE', payload: this.props.image.images.original.url});
    }

    render() {
        return (
            <div>
                <img src={this.props.image.images.original.url} alt={this.props.image.id} />
                <button onClick={this.handleClick}>FAVORITE</button>
            </div>
        )
    }
}

export default connect()(SearchItem);