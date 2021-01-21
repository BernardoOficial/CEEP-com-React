export default class Categorias {

    constructor() {
        this.categorias = this.getCategoriasLocalStorage();
        this._inscritos = [];
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    notificar() {
        this._inscritos.forEach(func => func(this.categorias));
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    criarNovaCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);
        this.saveCategoriasLocalStorage(this.categorias);
        this.notificar();
    }

    saveCategoriasLocalStorage(categorias) {

        localStorage.setItem('categorias', JSON.stringify(categorias));
    }

    getCategoriasLocalStorage() {

        return JSON.parse(localStorage.getItem('categorias')) || [];
    }
}