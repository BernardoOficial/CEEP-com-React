import React, { Component } from 'react';
import "./index.css"

class CardLista extends Component {

    render(props) {
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
                    Texto da {this.props.titulo}
                </p>
            </section>
        );
    }
}

export default CardLista;