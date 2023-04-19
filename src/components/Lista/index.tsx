import { useState } from "react";
import Item from "./Item";
import { ITarefas } from "../../types/tarefas";

const Lista = ({ tarefas }: { tarefas: ITarefas[] }) => {
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;