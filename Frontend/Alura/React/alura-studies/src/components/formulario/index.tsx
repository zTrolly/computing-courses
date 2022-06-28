import React from 'react';
import Botao from '../botao';

class Formulario extends React.Component {
  render() {
    return (
      <div>
        <h1>Formulário</h1>
        <form>
            <div>
            <label htmlFor="Tarefa">Adicione um novo Estudo</label>
            <input 
                type="text"
                name='Tarefa' 
                id='Tarefa' 
                placeholder='O que voce quer estudar'
                required
            />
            </div>
            <div>
            <label htmlFor="Tempo">Tempo</label>
            <input 
                type="time"
                step={1}
                min="00:00:00"
                max="01:30:00"
                name='Tempo'
                id='Tempo'
                placeholder='Tempo'
                required
            />
            </div>
        </form>
      </div>
    );
  }
}

export default Formulario;