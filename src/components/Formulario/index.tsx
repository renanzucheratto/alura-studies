import React from 'react';
import Botao from '../Botao';
import { ITarefas } from '../../types/tarefas';
import { v4 as uuidv4 } from 'uuid';
class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}> {
  state = {
    tarefa: '',
    tempo: ''
  }

  adicionarTarefa(e: React.FormEvent) {
    e.preventDefault();
    this.props.setTarefas(tarefasAntigas => [
      ...tarefasAntigas,
      {
        ...this.state,
        selecionado: false,
        completado: false,
        id: uuidv4()
      }
    ])
    this.setState({ tarefa: '', tempo: '' })
  }

  render() {
    return (
      <form onSubmit={this.adicionarTarefa.bind(this)}>
        <div>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
            placeholder="O que você quer estudar?"
          />
        </div>
        <div>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            name="tempo"
            step="1"
            id="tempo"
            required
            value={this.state.tempo}
            onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
            min="00:00:00"
            max="01:30:00"
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    )
  }
}

export default Formulario;