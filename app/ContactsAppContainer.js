import React,{Component,PropTypes} from 'react';
import 'whatwg-fetch';
import update from 'react-addons-update';





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
        //console.log(responseData)
        this.setState({contacts:responseData})
    })
    .catch((error)=>{
        console.log('Error fetching and parsing data',error);
    })
}
    addContact(contact){
        //console.log(`This is the contact in Container`);
        //console.log(contact);
        let prevState = this.state;
        if(contact.id===null){
            let contact = Object.assing({},contact,{id:Dane.now()})
        }
        let nextState = update(this.state.contacts,{$push:[contact]})
        this.setState({contacts:nextState})
    }
    editContact(contact){
        let prevState = this.state;
        let contactIndex = this.state.contacts.findIndex(c=>c.id==contact.id);
        console.log(contactIndex)
        let nextState = update(this.state.contacts,{
            [contactIndex]:{$set:contact}
        })
        this.setState({contacts:nextState});
    }   
    render(){
        let App = this.props.children && React.cloneElement(this.props.children,{
            contacts:this.state.contacts,
            contactCallback : {
                addContact : this.addContact.bind(this),
                editContact: this.editContact.bind(this)

            }
        })
            return App;
      }
    
}

export default ContactsAppContainer;


