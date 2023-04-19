import { useState } from "react";
import Cronometro from "./components/Cronometro";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import { ITarefas } from "./types/tarefas";
function App() {
  const [tarefas, setTarefas] = useState<ITarefas[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefas>();

  const selecionaTarefa = (tarefaSelecionada: ITarefas) => {
    setSelecionado(tarefaSelecionada);
  }

  return (
    <div className="App">
      <Formulario setTarefas={setTarefas} />
      <Cronometro />
      <Lista tarefas={tarefas} />
    </div>
  );
}

export default App;
