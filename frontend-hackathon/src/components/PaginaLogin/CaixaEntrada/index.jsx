import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CaixaEntradaContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    background-color: #f0fff4;
    border-radius: 8px;
    padding: 0.5rem;
    width: 100%;

    i {
        color: #4caf50;
        margin-right: 0.5rem;
    }

    input {
        border: none;
        background: transparent;
        outline: none;
        flex-grow: 1;
        font-size: 1rem;
        color: #333;
    }
`;

export default function CaixaEntrada() {
    return (
        <>
            <CaixaEntradaContainer>
                <i className="fas fa-user"></i>
                <input type='text' placeholder='Email' required />
            </CaixaEntradaContainer>

            <CaixaEntradaContainer>
                <i className="fas fa-lock"></i>
                <input type='password' placeholder='Senha' required />
            </CaixaEntradaContainer>
        </>
    )
}