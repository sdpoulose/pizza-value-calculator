import React, { Component } from 'react';

class PizzaCard extends Component {

    render() {
        return (
            <div className="pizza-card">
                <form>

                    <input type="text" placeholder="Pizza"></input>
                    <br />
                    <input type="number" placeholder="Diameter"></input>
                    <br />
                    <input type="number" placeholder="Price"></input>

                </form>
            </div>

        );
    }
}

export default PizzaCard;