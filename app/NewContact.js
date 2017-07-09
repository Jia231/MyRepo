import React,{Component} from 'react';
import UserForm from './UserForm';

class NewContact extends Component{

    constructor(){
        super();
        
    }
    componentWillMount(){
        this.setState({
            id:Date.now(),
            name:'',
            email:''
        })
    }
    handleChange(field,value){
        this.setState({[field]:value})
    }
    handleClose(){
        this.props.history.pushState(null,'/Search')
    }
    handleSubmit(e){
       e.preventDefault();
       this.props.contactCallback.addContact(this.state);
       this.props.history.pushState(null,'/Search');
    }


    render(){
        return(
            <UserForm buttonLabel="Create Contact" handleChange={this.handleChange.bind(this)} handleClose={this.handleClose.bind(this)} handleSubmit={this.handleSubmit.bind(this)} contactInfo = {this.state}/>
        )
    }

}

export default NewContact;