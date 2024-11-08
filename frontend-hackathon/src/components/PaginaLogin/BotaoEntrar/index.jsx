import styled from 'styled-components'

const BotaoEntrarContainer = styled.button`
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #4caf50;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #388e3c;
    }
`;

export default function BotaoEntrar(){
    return(
        <BotaoEntrarContainer type='submit'>Entrar</BotaoEntrarContainer>
    )
}