import React, { Component } from 'react';
import {connect} from 'react-redux';
import FavoritesItem from '../FavoritesItem/FavoritesItem';

class FavoritesList extends Component {
    render() {

        return (
            <div>
                <h3>Uncategorized</h3>
                        {this.props.favorites.map(image => {
                            if (image.category === '') {
                                return <FavoritesItem image={image} />
                            }
                            return null;
                        })}
                <h3>Funny</h3>
                        {this.props.favorites.map(image => {
                            if (image.category === 'funny') {
                                return <FavoritesItem image={image} />
                            }
                            return null;
                        })}
                <h3>Vega</h3>
                        {this.props.favorites.map(image => {
                            if (image.category === 'vega') {
                                return <FavoritesItem image={image} />
                            }
                            return null;
                        })}
                <h3>Cartoon</h3>
                        {this.props.favorites.map(image => {
                            if (image.category === 'cartoon') {
                                return <FavoritesItem image={image} />
                            }
                            return null;
                        })}
                <h3>NSFW</h3>
                        {this.props.favorites.map(image => {
                            if (image.category === 'nsfw') {
                                return <FavoritesItem image={image} />
                            }
                            return null;
                        })}
                <h3>Meme</h3>
                        {this.props.favorites.map(image => {
                            if (image.category === 'meme') {
                                return <FavoritesItem image={image} />
                            }
                            return null;
                        })}
            </div>

        )
    }
}

const mapRedux = reduxState => {
    return { favorites: reduxState.favoriteImages }
}

export default connect(mapRedux)(FavoritesList);