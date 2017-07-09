import React,{Component} from 'react';

class UserForm extends Component {
    handleChange(field,e){
        this.props.handleChange(field,e.target.value)
    }
    handleClose (e){
        e.preventDefault();
        this.props.handleClose();
    }


    render(){
        return(
            <div>
                <div className="card big">
                    <form onSubmit={this.props.handleSubmit.bind(this)}>
                        <label>Contact Name</label>
                        <input type='text'
                            placeholder="Contact name"
                            onChange={this.handleChange.bind(this,'name')}
                            value = {this.props.contactInfo.name}
                        />
                        <label>Email</label>
                        <input type='text'
                        placeholder="Email address"
                        onChange={this.handleChange.bind(this,'email')}
                        value = {this.props.contactInfo.email}
                        />
                        <button type="submit">{this.props.buttonLabel}</button>
                    </form>
                </div>
                <div className='overlay' onClick={this.handleClose.bind(this)}></div>
            </div>
        )
    }
}

export default UserForm;