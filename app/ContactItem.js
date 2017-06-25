import React,{Component,PropTypes} from 'react';


class ContactItem extends Component{
    
    render(){
        return(
           <li id={this.props.id} className="List" key={this.props.id}>
               {this.props.name} - {this.props.email}
           </li>
        )
    }

}

ContactItem.propTypes = {
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
}

export default ContactItem;