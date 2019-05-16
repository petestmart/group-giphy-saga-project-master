import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchItem from '../SearchItem/SearchItem';

class SearchList extends Component {

    render(){

        let eachImage = this.props.images.map(image => {
            return <SearchItem key={image.id} image={image} />
        })

        return(
            <div>
                {eachImage}
            </div>
        )
    }
}

const mapRedux = reduxState => {
    return { images: reduxState.pulledImages }
}

export default connect(mapRedux)(SearchList);