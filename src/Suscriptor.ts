import {Observable, Observer} from "./Observer"
import {Revista} from "./Revista"

export class Suscriptor implements Observer{
    private _nombre: string;
    private _apellido: string;
    private _edad: number;
    private _email: string;

    constructor(private nombre: string, private apellido: string, private edad: number, private email: string){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._email = email;
    }

    getNombre(): string{
        return this._nombre;
    }

    getApellido(): string{
        return this._apellido;
    }

    getEdad(): number{
        return this._edad;
    }

    getEmail(): string{
        return this._email;
    }

    update(observable: Observable){
        if (observable instanceof Revista){
            console.log("Soy un suscriptor llamado ${this.nombre} y he recibido la notificación de que se ha lanzado el número ${observable.getNumero()} de la revista")
        }
    }
}