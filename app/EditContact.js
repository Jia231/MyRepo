import React, {Component} from 'react';
import UserForm from './UserForm'

class EditContact extends Component {

    constructor(){
        super();
    }
    componentWillMount(){
        let contact = this.props.contacts.find((contact)=>contact.id==this.props.params.contact_id);
        this.setState({
            id:contact.id,
            name:contact.name,
            email:contact.email
        })
    }
    handleChange(field,value){
        this.setState({[field]:value})
    }
    handleClose(e){
        this.props.history.pushState(null,'/Search');
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        this.props.contactCallback.editContact(this.state);
        this.props.history.pushState(null,'/Search');
    }

    render(){
        return(
            <UserForm buttonLabel="Edit Card" handleChange={this.handleChange.bind(this)} handleClose={this.handleClose.bind(this)} handleSubmit={this.handleSubmit.bind(this)} contactInfo = {this.state}/>
        )
    }

}


export default EditContact;