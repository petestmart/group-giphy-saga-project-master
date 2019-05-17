import React, { Component } from 'react';
import {connect} from 'react-redux';
import FavoritesItem from '../FavoritesItem/FavoritesItem';

class FavoritesList extends Component {
    render() {

        return (
            <div>
                <h3>Uncategorized</h3>
                        {this.props.favorites.map(image => {
                            if (image.category_id === null) {
                                return <FavoritesItem image={image} />
                            }
                            return <pre></pre>;
                        })}
                <h3>Funny</h3>
                        {this.props.favorites.map(image => {
                            if (image.category_id === 'funny') {
                                return <FavoritesItem image={image} />
                            }
                            return <pre></pre>;
                        })}
                <h3>Vega</h3>
                        {this.props.favorites.map(image => {
                            if (image.category_id === 'vega') {
                                return <FavoritesItem image={image} />
                            }
                            return <pre></pre>;
                        })}
                <h3>Cartoon</h3>
                        {this.props.favorites.map(image => {
                            if (image.category_id === 'cartoon') {
                                return <FavoritesItem image={image} />
                            }
                            return <pre></pre>;
                        })}
                <h3>NSFW</h3>
                        {this.props.favorites.map(image => {
                            if (image.category_id === 'nsfw') {
                                return <FavoritesItem image={image} />
                            }
                            return <pre></pre>;
                        })}
                <h3>Meme</h3>
                        {this.props.favorites.map(image => {
                            if (image.category_id === 'meme') {
                                return <FavoritesItem image={image} />
                            }
                            return <pre></pre>;
                        })}
            </div>

        )
    }
}

const mapRedux = reduxState => {
    return { favorites: reduxState.favoriteImages }
}

export default connect(mapRedux)(FavoritesList);