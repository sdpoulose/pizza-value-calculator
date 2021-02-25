import React, { Component } from 'react';
import PizzaCard from "./pizzaCard";

class PizzaList extends Component {

    render() {
        return (
            <div>
                <PizzaCard />
                <PizzaCard />
            </div>

        );
    }
}

export default PizzaList;