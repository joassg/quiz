export default class RespostaModel {
    #valor: string
    #certa: boolean
    #revelada: boolean
    
    constructor(valor: string, certa: boolean, revelada = false) {
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    static certa(valor: string) {
        return (new RespostaModel(valor, true))
    }
    
    static errada(valor: string) {
        return (new RespostaModel(valor, false))

    }

    get valor() {
        return this.#valor
    }

    get certa() {
        return this.#certa
    }

    get revelada() {
        return this.#revelada
    }

    revelar() {
        return new RespostaModel(this.#valor, this.#certa, true)
    }

    //Qdo quero criar uma instância a partir de um objeto, precisa ser um método de classe;
    // Para utilizar um método de instância é preciso criar a instância da classe;
    // Crio a instânica -> const resp = new RespostaModel(...)
    // E depois utilizo -> resp.metodo de Instancia()

    // Quando o método é static não preciso instânciar. Posso chamá-lo diretamente
    // RespostaModel.metodoStatic(...)

    static criarUsandoeObjeto(obj: RespostaModel): RespostaModel {
        return new RespostaModel(obj.valor, obj.certa, obj.revelada)
    }

    paraObjeto() {
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada
        }
    }

}