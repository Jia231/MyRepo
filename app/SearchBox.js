import React, { Component } from 'react';
import {Link} from 'react-router';

class SearchBox extends Component {
    handleOnChange (event){
        this.props.filterBy(event.target.value)
    }
    constructor(){
        super();
        this.handleOnChange = this.handleOnChange.bind(this)
    }
    render(){
        let modal = this.props.children && React.cloneElement(this.props.children, {

        })
        return(
            <div>
            <Link className="float-button" to='/new'>+</Link>
            <input type='search' onChange={this.handleOnChange}  />
            {modal}
            </div>
        )

    }

}

export default SearchBox;