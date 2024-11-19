import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LogoCadastro from "./assets/LogoCadastro.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
import { Link } from 'react-router-dom';
import { currentUser } from "../../../core/CurrentUser";
import AvatarPicker from "./Avatarpicker";
import { Button, DatePicker } from "antd";


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
  dataDeNascimento: yup
    .string()
    .required("Data de nascimento obrigatória")
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
    preventDefault();
    navigate("/quiz");
  };

  const handleCadastro = (dados) => {
    console.log("Dados enviados:", dados);

    // Remover o campo confirmarSenha antes de salvar
    const { confirmarSenha, ...dadosSemConfirmarSenha } = dados;

    // Salvar os dados no Session Storage
    localStorage.setItem("usuarioAtivo", JSON.stringify(dadosSemConfirmarSenha));

    currentUser.usernameSet = JSON.parse(localStorage.getItem("usuarioAtivo")).primeiroNome
    currentUser.usercompanySet = JSON.parse(localStorage.getItem("usuarioAtivo")).nomeEmpresa


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
                { id: "dataDeNascimento", label: "Informe sua data de nascimento", type: "date", placeholder: "data.." }
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



              <AvatarPicker />
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
            <p className="frase_modal">Cadastro feito com sucesso!</p>
            <Button onClick={fecharModal} className="" type="primary">
              <Link to="/quiz" > ir para o quiz</Link>
            </Button>

          </div>
        </div>
      )}
    </div>
  )
}