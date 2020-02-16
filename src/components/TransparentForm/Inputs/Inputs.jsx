import React from 'react';
import './Inputs.css'

const Inputs = () => {
    return (
        <React.Fragment>
            <div class="name">
                <i class="fa fa-user"></i>
                <input placeholder="name..." type="text" />
            </div>

            <div class="password">
                <i class="fa fa-lock"></i>
                <input placeholder="password..." type="password" />
            </div>
        </React.Fragment>
    );
}

export default Inputs;