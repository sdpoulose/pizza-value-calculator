import React, { Component } from 'react';

class PizzaCard extends Component {

    render() {
        return (
            <span>
                <form className="pizza-card">

                    <input type="text" placeholder="Pizza"></input>
                    <br />
                    <input type="number" placeholder="Diameter"></input>
                    <br />
                    <input type="number" placeholder="Price"></input>

                </form>
            </span>

        );
    }
}

export default PizzaCard;