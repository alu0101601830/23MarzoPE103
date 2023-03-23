import {Observable, Observer} from "./Observer"
import {Revista} from "./Revista"

/**
 * Clase de Suscriptor
 */
export class Suscriptor implements Observer{
    private _nombre: string;
    private _apellido: string;
    private _edad: number;
    private _email: string;

    /**
     * Constructor de Suscriptor
     * @param nombre 
     * @param apellido 
     * @param edad 
     * @param email 
     */
    constructor(private nombre: string, private apellido: string, private edad: number, private email: string){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._email = email;
    }

    /**
     * Devuelve el nombre
     * @returns Nombre
     */
    getNombre(): string{
        return this._nombre;
    }

    /**
     * Devuelve el apellido
     * @returns Apellido
     */
    getApellido(): string{
        return this._apellido;
    }

    /**
     * Devuelve la edad
     * @returns Edad
     */
    getEdad(): number{
        return this._edad;
    }

    /**
     * Devuelve el email
     * @returns Email
     */
    getEmail(): string{
        return this._email;
    }

    /**
     * Notificacion de los usuarios con una nueva revista
     * @param observable 
     */
    update(observable: Observable){
        if (observable instanceof Revista){
            console.log(`Soy un suscriptor llamado ${this.getNombre()} y he recibido la notificación de que se ha lanzado el número ${observable.getUltimoNumero()} de la revista ${observable.getName()}`)
        }
    }
}