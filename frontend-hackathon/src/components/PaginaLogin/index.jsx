import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import Formulario from './Formulario';
import BotaoVoltar from './BotaoVoltar';

const PaginaEntrarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #e0f7e9;
`;

export default function PaginaLogin() {
    const navegar = useNavigate();

const redirecionarParaCadastro = () => {
    navegar('/cadastro');
};

const voltarParaInicio = () => {
    navegar('/');
};

    return (
        <PaginaEntrarContainer>
            <BotaoVoltar voltarParaInicio={voltarParaInicio} />            
            <Formulario redirecionarParaCadastro={redirecionarParaCadastro} />
        </PaginaEntrarContainer>
    );
}
