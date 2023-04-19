import { ITarefas } from "../../../types/tarefas";
const Item = ({ tarefa, tempo, completado, id, selecionado }: ITarefas) => {
  return (
    <li>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}

export default Item;