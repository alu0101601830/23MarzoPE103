import {Observer, Observable} from "./Observer"

export class Revista implements Observable{
    private _name: string;
    private _tema: string;
    private suscriptores: Observer[] = [];
    private ultimoNumero: number = 0;

    constructor(private name: string, private tema: string){
        this._name = name;
        this._tema = tema;
    }

    getSuscriptores(){
        return this.suscriptores;
    }

    getName(){
        return this._name;
    }

    getTema(){
        return this._tema;
    }

    getUltimoNumero(){
        return this.ultimoNumero;
    }

    // Método para agregar un suscriptor
    subscribe(observer: Observer): void{
        if (this.suscriptores.includes(observer)) {
            throw new Error("The observer had already been susbcribed");
        }else{
            this.suscriptores.push(observer);
        }
    }

    // Método para eliminar un suscriptor de la lista
    unsubscribe(suscriptor: Observer) {
        const index = this.suscriptores.indexOf(suscriptor);
        if (index === -1) {
            throw new Error("The observer has not been subscribed");
        }else{
            this.suscriptores.splice(index, 1);
        }
    }
    
    // Método para notificar a los suscriptores sobre un nuevo número lanzado
    notify() {
        this.suscriptores.forEach((observer) => observer.update(this));
    }
    
    // Método para lanzar un nuevo número de la revista
    lanzarNuevoNumero() {
        this.ultimoNumero++;
        console.log("Se ha lanzado el número ${this.ultimoNumeroLanzado} de la revista ${this._name} con el tema ${this._tema}");
        this.notify();
    }
}