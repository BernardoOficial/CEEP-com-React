import React, { Component } from 'react';

class CardLista extends Component {

    render(props) {
        return (
            <section>
                <header>
                    <h1>{this.props.titulo}</h1>
                </header>
                <p>Texto da {this.props.titulo}</p>
            </section>
        );
    }
}

export default CardLista;