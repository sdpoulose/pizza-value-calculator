import React, { Component } from 'react';

class PizzaCard extends Component {

    render() {
        return (
            <div>
                <form>

                    <input type="text" placeholder="Pizza"></input>
                    <input type="number" placeholder="Diameter"></input>
                    <input type="number" placeholder="Price"></input>

                </form>
            </div>

        );
    }
}

export default PizzaCard;