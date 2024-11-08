import "./styles.css";
import LogoCadastro from "./assets/LogoCadastro.png";
import CadastroComSucesso from './assets/cadastrosucesso.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function PaginaCadastro() {
  const navigate = useNavigate();
  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const handleLoginRedirect = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const handleCadastro = (e) => {
    e.preventDefault();
    //uma lógica para enviar os dados do formulário ao servidor.
    
    // Após o envio bem-sucedido, exiba o modal de sucesso:
    setCadastroSucesso(true);
  };

  const fecharModal = () => {
    setCadastroSucesso(false);
  };

  return (
      <div className="pagina_cadastro">

    <div className="container" >
 
      <img className="imagem_logo" src={LogoCadastro} alt="Imagem de cadastro" />

      <div className="formulario">
        <form onSubmit={handleCadastro}>

          <div className="titulo_formulario">
            <h1 className="titulo">Cadastre-se</h1>
            <button className="botao_entrar" onClick={handleLoginRedirect}>
              Entrar
            </button>
          </div>

          <div className="input-group">
            {/* Campos do formulário */}
            <div className="formulario__campo">
              <label htmlFor="nome">Nome</label>
              <input
                className="campo__escrita"
                id="nome"
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div className="formulario__campo">
              <label htmlFor="empresa">Empresa</label>
              <input
                className="campo__escrita"
                id="empresa"
                type="text"
                name="empresa"
                placeholder="Digite a empresa"
                required
                />
            </div>

            <div className="formulario__campo">
              <label htmlFor="sobrenome">Sobrenome</label>
              <input
                className="campo__escrita"
                id="sobrenome"
                type="text"
                name="sobrenome"
                placeholder="Digite seu sobrenome"
                required
              />
            </div>

            <div className="formulario__campo">
              <label htmlFor="email">Email</label>
              <input
                className="campo__escrita"
                id="email"
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div className="formulario__campo">
              <label htmlFor="cpf">CPF</label>
              <input
                className="campo__escrita"
                id="cpf"
                type="text"
                name="cpf"
                placeholder="Digite seu CPF"
                minLength="11"
                maxLength="14"
                pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
                required
              />
            </div>

            <div className="formulario__campo">
              <label htmlFor="senha">Senha</label>
              <input
                className="campo__escrita"
                id="senha"
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                minLength="3"
                required
              />
            </div>
          </div>

          <div className="botao_cadastrar">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
        
                </div>
      </div>

      {cadastroSucesso && (
        <div className="sobreposicao_modal">
          <div className="modal">
          <img src={CadastroComSucesso} alt="Cadastro realizado com sucesso" className="imagem_modal" />
            <button className="botao_fechar" onClick={fecharModal}>X</button>
            <p className="frase_modal">Cadastro feito com sucesso!</p>
          </div>
        </div>
      )}
    </div>
    
  );
}
