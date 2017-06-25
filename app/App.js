import React, { Component } from 'react';
//import {render} from 'react-dom';
import SearchBox from './SearchBox';
import ContactList from './ContactList';



class App extends Component {
  constructor(){
    super();
    this.state = {
      filterText: ''
    }
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(text){
      this.setState({filterText:text})
  }
  render(){
    
    return (
      <div>
        <SearchBox filterBy={this.handleFilter}/>
        <ContactList  list={this.props.contacts} thisIsTheFilter={this.state.filterText}/>
      </div>
    );
  }
}

export default App;
