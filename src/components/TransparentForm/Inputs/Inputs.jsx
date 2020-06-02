import React, { Component } from 'react';
import './Inputs.css'

class Inputs extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            password: "",
        };
        
        this.setName = this.setName.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    setName(event) {
        this.setState({ name: event.target.value })
    };

    setPassword(event) {
        this.setState({ password: event.target.value })
    }

    render() {
        return (
            <React.Fragment>
                <div class="name">
                    <label htmlFor="name">
                        <i class="fa fa-user"></i>
                    </label>
                    <input placeholder="name..." type="text" id="name" value={this.state.name} onChange={this.setName} />
                </div>

                <div class="password">
                    <label htmlFor="password">
                        <i class="fa fa-lock"></i>
                    </label>
                    <input placeholder="password..." type="password" id="password" value={this.state.password} onChange={this.setPassword} />
                </div>
            </React.Fragment>
        );
    };
}

export default Inputs;