import React, {Component} from 'react';
import {connect} from 'react-redux';

class FavoritesItem extends Component {

    handleChange = (category) => {
        this.props.dispatch({type: 'SELECT_CATEGORY', payload: {id: this.props.image.id, category_id: category}});
    }

    render() {
        return (
            <div>
                <img src={this.props.image.url} alt={this.props.image.id} />
                <select onChange={() => this.handleChange(1)}>
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