import React, { Component } from 'react';

import "./index.css"

import { ReactComponent as DeleteSVG } from '../../assets/images/delete.svg'

class CardLista extends Component {

    apagarTarefa() {
        const index = this.props.index;
        this.props.apagarTarefa(index);
    }

    render() {
        return (
            <section className="card__lista">
                <header className="card__header">
                    <h1
                        className="card__lista__titulo">
                        {this.props.titulo}
                    </h1>
                    <h6 className="card__lista__categoria">
                        Categoria: {this.props.categoria}
                    </h6>
                    <DeleteSVG
                        className="delete__svg"
                        onClick={this.apagarTarefa.bind(this)}
                    />
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