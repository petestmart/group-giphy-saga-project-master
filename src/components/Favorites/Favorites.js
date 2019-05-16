import React, {Component} from 'react';
import FavoritesList from '../FavoritesList/FavoritesList'

class Favorites extends Component {
    render(){
        return(
            <div>
                <h2>FAVORITES</h2>
                <FavoritesList />
            </div>

        )
    }
}

export default Favorites;