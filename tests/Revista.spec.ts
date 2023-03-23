import 'mocha';
import {expect} from 'chai';
import {Revista} from "../src/Revista";
import {Suscriptor} from "../src/Suscriptor";


describe("Revista", () => {
  let revista = new Revista("National Geographic", "naturaleza");
  let suscriptor1 = new Suscriptor("Diego", "Wiederkehr", 22, "diego@email.es")
  it("nombre", () => {
    expect(revista.getName()).to.be.equal("National Geographic");
  });

  it("tema", () => {
    expect(revista.getTema()).to.be.equal("naturaleza");
  });

  it("agregar suscriptor", () => {
    let suscriptores_lista: Suscriptor[] = [suscriptor1]
    revista.subscribe(suscriptor1)
    expect(revista.getSuscriptores()).to.be.equal(suscriptores_lista);
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

