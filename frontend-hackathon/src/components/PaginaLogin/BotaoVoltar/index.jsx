import styled from 'styled-components';

const BotaoVoltarContainer = styled.button`
    position: absolute;
    top: 2rem;
    left: 2rem;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #4caf50;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px

    i {
        margin-right: 0.5rem;
    }

    &:hover {
        color: #388e3c;
    }
`;

export default function BotaoVoltar({voltarParaInicio}) {
    return (
        <BotaoVoltarContainer onClick={voltarParaInicio}>
            <i className="fas fa-arrow-left"></i> Voltar para o início
        </BotaoVoltarContainer>
    );
}
