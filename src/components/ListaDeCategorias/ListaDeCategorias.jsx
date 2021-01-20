import React, { Component } from 'react';

import "./index.css"

class ListaDeCategorias extends Component {

    handleEventoInput(e) {

        if (e.key === "Enter") {

            const novacategoria = e.target.value;
            e.target.value = "";

            this.props.criarNovaCategoria(novacategoria);
        }
    }

    render() {
        return (
            <section className="categorias__content">
                <ul className="listadecategorias">
                    {this.props.categorias.map((categoria, key) => {
                        return <li key={key} >{categoria}</li>
                    })}
                </ul>
                <input
                    type="text"
                    name="categoria"
                    placeholder="Adicionar categoria"
                    onKeyUp={this.handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;