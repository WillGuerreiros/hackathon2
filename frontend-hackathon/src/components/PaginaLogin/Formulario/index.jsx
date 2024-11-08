import styled from 'styled-components'
import Titulo from '../Titulo';
import CaixaEntrada from '../CaixaEntrada';
import BotaoEntrar from '../BotaoEntrar';
import LembrarSenha from '../LembrarSenha';

const FormularioContainer = styled.form`
    background-color: #ffffff;
    padding: 3rem;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Formulario({ redirecionarParaCadastro }) {
    return (
        <FormularioContainer>
            <Titulo />
            <CaixaEntrada />
            <LembrarSenha />

            <BotaoEntrar />
            <p>Não tem cadastro? 
                <button 
                    onClick={redirecionarParaCadastro} 
                    style={{ color: '#4caf50', background: 'none', border: 'none', cursor: 'pointer' }}>
                    Clique aqui
                </button>
            </p>
        </FormularioContainer>
    )
}
