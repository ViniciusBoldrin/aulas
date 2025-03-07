import React from 'react';
import Botao from '../botao';

class Formulario extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                     type="text"
                     name="tarefa"
                     id="tarefa"
                     placeholder="O que voce quer estudar>"
                     required
                      />
                </div>
                <div>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                     type="time"
                     step="1"
                     name="tempo"
                     id="tempo"
                     min="oo:oo:oo"
                     max="01:30:00"
                     required
                     />
                </div>
                <Botao />
            </form>
        )
    }
}

export default Formulario;