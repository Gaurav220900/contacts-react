import React from "react";

class AddContact extends React.Component {
    state = {
        name: '',
        email: ''
    }

    render () {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text"
                        value = {this.state.name}
                        onChange={(e) => { this.setState({name: e.target.value})}}
                        placeholder="Enter Name" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="Email" 
                        value= {this.state.email}
                        onChange={(e) => { this.setState({email: e.target.value})}}
                        placeholder="Enter Email" />
                    </div>
                    <div className="field">
                        <button className="ui button blue" onClick={(e)=> {
                            this.props.addContacts(this.state.name, this.state.email,e)
                            this.setState({name: ''})
                            this.setState({email: ''})
                        }}>Add</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default AddContact;