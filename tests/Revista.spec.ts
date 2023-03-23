import 'mocha';
import {expect} from 'chai';
import {Revista} from "../src/Revista";
import {Suscriptor} from "../src/Suscriptor";


describe("Revista", () => {
  let revista = new Revista("National Geographic", "naturaleza");
  let suscriptor1 = new Suscriptor("Diego", "Wiederkehr", 22, "diego@email.es")
  let suscriptor2 = new Suscriptor("Clara", "Wiederkehr", 27, "clara@email.es")

  
  it("nombre", () => {
    expect(revista.getName()).to.be.equal("National Geographic");
  });

  it("tema", () => {
    expect(revista.getTema()).to.be.equal("naturaleza");
  });

  it("suscribir", () => {
    let suscriptores: Suscriptor[] = [];
    suscriptores.push(suscriptor1);
    revista.subscribe(suscriptor1);
    expect(() => revista.subscribe(suscriptor1)).to.throw('The observer had already been susbcribed');
    expect(() => revista.unsubscribe(suscriptor2)).to.throw('The observer has not been subscribed');
    revista.subscribe(suscriptor2);
    revista.unsubscribe(suscriptor2);
    expect(revista.getSuscriptores().length).to.be.equal(1);
  });

  it("lanzar nuevo numero", () => {
    revista.lanzarNuevoNumero();
    revista.notify();
  });

});

describe("Suscriptor", () => {
  let suscriptor1 = new Suscriptor("Diego", "Wiederkehr", 22, "diego@email.es")

  it("nombre", () => {
    expect(suscriptor1.getNombre()).to.be.equal("Diego");
  });

  it("apellido", () => {
    expect(suscriptor1.getApellido()).to.be.equal("Wiederkehr");
  });

  it("edad", () => {
    expect(suscriptor1.getEdad()).to.be.equal(22);
  });

  it("email", () => {
    expect(suscriptor1.getEmail()).to.be.equal("diego@email.es");
  });

});

