import React,{Component,PropTypes} from 'react';
import ContactItem from './ContactItem'

class ContactList extends Component{

    render(){
        let filteredPerson = this.props.list.filter((contact)=>
           //console.log(contact.name)
           //console.log(contact.name.indexOf(this.props.thisIsTheFilter))
            contact.name.toLowerCase().indexOf(this.props.thisIsTheFilter) !== -1 )
            //console.log(filteredPerson)
        let persons = filteredPerson.map((contact)=>(
           
            <ContactItem  name={contact.name} email={contact.email}/>
        ))
        //console.log(`this are the ${persons}`)
        return (
            <ul>
                {persons}
            </ul>
                            
        )
    }

}

ContactItem.propTypes = {
    list:PropTypes.object.isRequired
}

export default ContactList;