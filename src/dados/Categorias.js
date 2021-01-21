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

    criarNovaCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);

        console.log(this.categorias);
        console.log(this);

        this.saveCategoriasLocalStorage(this.categorias);
    }

    saveCategoriasLocalStorage(categorias) {

        localStorage.setItem('categorias', JSON.stringify(categorias));
    }

    getCategoriasLocalStorage() {

        return JSON.parse(localStorage.getItem('categorias')) || [];
    }
}