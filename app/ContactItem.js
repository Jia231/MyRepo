import React,{Component,PropTypes} from 'react';
import {Link} from 'react-router';

class ContactItem extends Component{
    
    render(){
        return(
           <li id={this.props.id} className="List" key={this.props.id}>
             {this.props.id} - {this.props.name} - {this.props.email} <Link to={"/Edit/"+this.props.id}>&#9998;</Link>
           </li>
        )
    }

}

ContactItem.propTypes = {
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
}

export default ContactItem;