import {Observer, Observable} from "./Observer"

/**
 * Clase de Revista
 */
export class Revista implements Observable{
    private _name: string;
    private _tema: string;
    private suscriptores: Observer[] = [];
    private ultimoNumero: number = 0;

    /**
     * Constructor de revista
     * @param name 
     * @param tema 
     */
    constructor(private name: string, private tema: string){
        this._name = name;
        this._tema = tema;
    }

    /**
     * Devuelve la lista de suscriptores
     * @returns La lista de suscriptores
     */
    getSuscriptores(){
        return this.suscriptores;
    }

    /**
     * Devuelve el nombre de la revista
     * @returns El nombre de la revista
     */
    getName(){
        return this._name;
    }

    /**
     * Devuelve el tema de la revista
     * @returns El tema de la revista
     */
    getTema(){
        return this._tema;
    }

    /**
     * Devuelve el ultimo numero de la revista
     * @returns El ultimo numero
     */
    getUltimoNumero(){
        return this.ultimoNumero;
    }

    /**
     * Metodo para suscribir un usuario
     * @param observer 
     */
    subscribe(observer: Observer): void{
        if (this.suscriptores.includes(observer)) {
            throw new Error("The observer had already been susbcribed");
        }else{
            this.suscriptores.push(observer);
        }
    }

    /**
     * Metodo para desuscribir un usuario
     * @param suscriptor 
     */
    unsubscribe(suscriptor: Observer) {
        const index = this.suscriptores.indexOf(suscriptor);
        if (index === -1) {
            throw new Error("The observer has not been subscribed");
        }else{
            this.suscriptores.splice(index, 1);
        }
    }
    
    /**
     * Metodo para notificar a los usuarios suscritos
     */
    notify() {
        this.suscriptores.forEach((observer) => observer.update(this));
    }
    
    /**
     * Metodo para lanzar un nuevo numero
     */
    lanzarNuevoNumero() {
        this.ultimoNumero++;
        console.log("Se ha lanzado el número ${this.getUltimoNumero()} de la revista ${this.getName()} con el tema ${this.getTema()}");
        this.notify();
    }
}