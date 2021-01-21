export default class Tarefas {

    constructor() {
        this.tarefas = this.getTarefasLocalStorage();
        this._inscritos = [];
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    notificar() {
        this._inscritos.forEach(func => func(this.tarefas));
    }

    criarTarefa(titulo, texto, categoria) {
        const novaTarefa = new criarTarefa(titulo, texto, categoria);
        this.tarefas.push(novaTarefa);

        this.saveTarefasLocalStorage(this.tarefas);
    }

    apagarTarefa(index) {

        this.tarefas.splice(index, 1);
        this.saveTarefasLocalStorage(this.tarefas);
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