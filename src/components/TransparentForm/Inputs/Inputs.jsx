import React from 'react';
import './Inputs.css'

const Inputs = () => {
    return (
        <React.Fragment>
            <div class="name">
                <label htmlFor="name">
                    <i class="fa fa-user"></i>
                </label>
                <input placeholder="name..." type="text" id="name" />
            </div>

            <div class="password">
                <label htmlFor="password">
                    <i class="fa fa-lock"></i>
                </label>
                <input placeholder="password..." type="password" id="password" />
            </div>
        </React.Fragment>
    );
}

export default Inputs;