import React, { Component } from 'react';

class SearchBox extends Component {
    handleOnChange (event){
        this.props.filterBy(event.target.value)
    }
    constructor(){
        super();
        this.handleOnChange = this.handleOnChange.bind(this)
    }
    render(){

        return(
            <input type='search' onChange={this.handleOnChange}  />
        )

    }

}

export default SearchBox;