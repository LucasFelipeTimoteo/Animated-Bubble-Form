import React, {Component} from 'react';
import './FormBody.css'
import Inputs from '../Inputs/Inputs'
import Button from '../Button/Button'

class FormBody extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <form className="form">
                <Inputs />
                <Button />
            </form>
         );
    }
}
 
export default FormBody;