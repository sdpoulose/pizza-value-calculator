import React, { Component } from 'react';
import Crust from "./crust"
import PizzaList from './pizzaList';

class HomePage extends Component {

    render() {
        return (
            <div className="cheese">
                <Crust />
                <PizzaList />
            </div>
        );
    }
}

export default HomePage;