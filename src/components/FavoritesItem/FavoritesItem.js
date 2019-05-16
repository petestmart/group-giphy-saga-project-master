import React, {Component} from 'react';
import {connect} from 'react-redux';

class FavoritesItem extends Component {

    handleChange = (category) => {
        this.props.dispatch({type: 'SELECT_CATEGORY', payload: category});
    }

    render() {
        return (
            <div>
                <img src={this.props.image.image_url} alt="image" />
                <select onChange={this.handleChange(this.value)}>
                    <option value="">Uncategorized</option>
                    <option value="funny">Funny</option>
                    <option value="vega">Vega</option>
                    <option value="cartoon">Cartoon</option>
                    <option value="nsfw">NSFW</option>
                    <option value='meme'>Meme</option>
                </select>
            </div>
        )
    }
}

export default connect()(FavoritesItem);