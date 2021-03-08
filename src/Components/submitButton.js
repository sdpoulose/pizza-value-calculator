import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class SubmitButton extends Component {

    render() {
        return (
            <div>
                <button className="submit btn btn-lg btn-block m-2 btn-sucess">Submit</button>
            </div>

        );
    }
}

export default SubmitButton;