import React,{Component,PropTypes} from 'react';
import 'whatwg-fetch';
import App from './App';




class ContactsAppContainer extends Component{
    constructor(){
        super();
        this.state={
            contacts:[]
        }
    }


componentDidMount(){
    fetch('./contacts.json')
    .then((response)=>response.json())
    .then((responseData)=>{
        console.log(responseData)
        this.setState({contacts:responseData})
    })
    .catch((error)=>{
        console.log('Error fetching and parsing data',error);
    })
    }
    render(){
            return(
                <App contacts={this.state.contacts}/>
           )
      }
    
}

export default ContactsAppContainer;


