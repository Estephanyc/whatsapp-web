const assert = require('chai').assert;
global.window = global;

const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockdatabase = new firebasemock.MockFirebase();
mockdatabase.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
    path => path ? mockdatabase.child(path) : mockdatabase,
    () => mockauth
);

require("../src/models/messages");

describe(
    "Modelo mensajes",// se empieza por lo general
    () => {
        describe(
            "Me deberia permitir agregar un mensaje",
            () => {
                it("Debería agregar un mensaje",
                    (done) => {
                        addMsn('9876600jhhy66','86767e5e798','hola mensaje de test').catch(
                            (error) => { 
                                console.log(error)
                            }
                        )
                        getMsn('86767e5e798', '9876600jhhy66').on('child_added', (msn) => {
                            msn = msn.val()
                            let mensaje = ''
                            if(msn.message == 'hola mensaje de test'){
                                mensaje = msn
                            }
                            assert.exists(mensaje);//verifica que exista algo en particular en el código una función
                            assert.equal(mensaje.message, "hola mensaje de test");
                            assert.equal(mensaje.destino, "86767e5e798");
                            assert.equal(mensaje.remitent, "9876600jhhy66");
                            done();
                        })
                            .catch(
                                (error) => {
                                    done(error);
                                }
                            )
                    }
                );
            }
        );
    }
);
