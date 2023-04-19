import Botao from "../Botao"
import Relogio from "./Relogio";

const Cronometro = () => {
  return (
    <div>
      <p>Escolha um card e inicie o cronometro</p>
      <div><Relogio /></div>
      <Botao>Começar!</Botao>
    </div>
  )
}

export default Cronometro;