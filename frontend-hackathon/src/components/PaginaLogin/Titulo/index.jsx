import styled from 'styled-components';

const TituloContainer = styled.h1`
    font-family: var(--fonte-popins);
    margin: 0 0 2rem 0
`;

export default function Titulo(){
    return(
        <TituloContainer>Entrar</TituloContainer>
    );
}