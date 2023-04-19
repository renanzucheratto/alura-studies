interface BotaoProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Botao = ({ children, type = 'button' }: BotaoProps) => {
  return (
    <button type={type}>{children}</button>
  )
}

export default Botao