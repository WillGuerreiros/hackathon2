import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CadastroComSucesso from "./assets/cadastrosucesso.png";
import LogoCadastro from "./assets/LogoCadastro.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

const esquemaValidacao = yup.object({
  primeiroNome: yup
    .string()
    .required("O primeiro nome é obrigatório")
    .min(2, "O primeiro nome deve ter pelo menos 2 caracteres"),
  sobrenome: yup.string().required("O sobrenome é obrigatório"),
  cpf: yup
    .string()
    .required("O CPF é obrigatório")
    .length(11, "O CPF deve ter 11 dígitos"),
  nomeEmpresa: yup.string().required("O nome da empresa é obrigatório"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  senha: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref("senha")], "As senhas devem ser iguais")
    .required("Confirmar a senha é obrigatório"),
});

export default function PaginaCadastro() {
  const navigate = useNavigate();
  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(esquemaValidacao),
  });

  const handleLoginRedirect = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleCadastro = (dados) => {
    console.log("Dados enviados:", dados);
    setCadastroSucesso(true); // Exibir modal de sucesso
  };

  const fecharModal = () => {
    setCadastroSucesso(false);
  };

  return (
    <div className="formulario__cadastro">
    <div className="container">
      <img className="imagem_logo" src={LogoCadastro} alt="Imagem de cadastro" />

      <div className="formulario">
        <form onSubmit={handleSubmit(handleCadastro)}>
          <div className="titulo_formulario">
            <h1 className="titulo">Cadastre-se</h1>
            <div className="botao_container">
            <button className="botao_entrar" onClick={handleLoginRedirect}>
              Entrar
            </button>

            </div>
          </div>

          <div className="input-group">
  {/* Campos do formulário */}
  {[
    { id: "primeiroNome", label: "Primeiro Nome", type: "text", placeholder: "Digite seu nome" },
    { id: "sobrenome", label: "Sobrenome", type: "text", placeholder: "Digite seu sobrenome" },
    { id: "cpf", label: "CPF", type: "text", placeholder: "Digite seu CPF" },
    { id: "nomeEmpresa", label: "Nome da Empresa", type: "text", placeholder: "Digite o nome da empresa" },
    { id: "email", label: "E-mail", type: "email", placeholder: "Digite seu e-mail" },
    { id: "celular", label: "Celular", type: "tel", placeholder: "Digite seu celular" },
    { id: "senha", label: "Senha", type: "password", placeholder: "Digite sua senha" },
    { id: "confirmarSenha", label: "Confirme sua Senha", type: "password", placeholder: "Confirme sua senha" },
  ].map((campo) => (
    <div key={campo.id} className="formulario__campo">
      <label htmlFor={campo.id}>{campo.label}</label>
      <input
        className="campo__escrita"
        id={campo.id}
        type={campo.type}
        {...register(campo.id)}
        placeholder={campo.placeholder}
      />
      <span className="error-message">{errors[campo.id]?.message}</span>
    </div>
  ))}
</div>


          <div className="botao_cadastro_container">
            <button className="botao_cadastro" type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
      </div>

      {cadastroSucesso && (
        <div className="sobreposicao_modal">
          <div className="modal">
            <img
              src={CadastroComSucesso}
              alt="Cadastro realizado com sucesso"
              className="imagem_modal"
            />
            <button className="botao_fechar" onClick={fecharModal}>
              X
            </button>
            <p className="frase_modal">Cadastro feito com sucesso!</p>
          </div>
        </div>
      )}
    </div>
    )
  }