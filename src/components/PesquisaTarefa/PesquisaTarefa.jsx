import React, { Component } from 'react';

import "./index.css"

class PesquisaTarefa extends Component {

    constructor() {
        super();
        this.inputText = "";
    }

    selecionarTarefas() {
        this.props.tarefas.selecionarTarefas(this.inputText);
    }

    handleEventoInput(evento) {
        this.inputText = evento.target.value;
        this.selecionarTarefas();
    }

    render() {
        return (
            <input
                className="pesquisa__input"
                type="text"
                autoFocus={true}
                placeholder="Pesquisa por uma tarefa..."
                onChange={this.handleEventoInput.bind(this)}
            />
        );
    }
}

export default PesquisaTarefa;