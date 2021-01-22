export default class Tarefas {

    constructor() {
        this.tarefas = this.getTarefasLocalStorage();
        this._inscritos = [];
        this.tarefasSelecionadas = [];
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    notificar() {
        this._inscritos.forEach(func => func(this.tarefas));
    }

    notificarTarefasSelecionadas() {
        this._inscritos.forEach(func => func(this.tarefasSelecionadas));
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    criarTarefa(titulo, texto, categoria) {
        const novaTarefa = new criarTarefa(titulo, texto, categoria);
        this.tarefas.push(novaTarefa);

        this.saveTarefasLocalStorage(this.tarefas);
        this.notificar();
    }

    apagarTarefa(index) {
        this.tarefas.splice(index, 1);
        this.saveTarefasLocalStorage(this.tarefas);
        this.notificar();
    }

    selecionarTarefas(texto) {
        this.tarefasSelecionadas = this.tarefas.filter(tarefa => {
            const textoFormat = texto.trim().toLowerCase();
            if (tarefa.titulo.toLowerCase().includes(textoFormat))
                return tarefa;
        });

        //console.log(this.tarefasSelecionadas);
        this.notificarTarefasSelecionadas();
    }

    saveTarefasLocalStorage(tarefas) {

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    getTarefasLocalStorage() {

        return JSON.parse(localStorage.getItem('tarefas')) || [];
    }
}

class criarTarefa {

    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}