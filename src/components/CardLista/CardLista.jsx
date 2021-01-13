import React, { Component } from 'react';

import "./index.css"

class CardLista extends Component {

    render() {
        return (
            <section className="card__lista">
                <header>
                    <h1
                        className="card__lista__titulo">
                        {this.props.titulo}
                    </h1>
                </header>
                <p
                    className="card__lista__texto">
                    {this.props.texto}
                </p>
            </section>
        );
    }
}

export default CardLista;