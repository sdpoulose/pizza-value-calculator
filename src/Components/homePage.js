import React, { Component } from 'react';
import Crust from "./crust"
import PizzaList from './pizzaList';
import SubmitButton from './submitButton';

class HomePage extends Component {

    render() {
        return (
            <div className="cheese">
                <Crust />
                <PizzaList />
                <SubmitButton />
            </div>
        );
    }
}

export default HomePage;