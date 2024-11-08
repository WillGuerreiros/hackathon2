import styled from 'styled-components';

const LembrarSenhaContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    
`
export default function LembrarSenha(){
    return(
        <LembrarSenhaContainer>
                <label>
                    <input type='checkbox' /> Lembrar senha
                    <a href='#' style={{ color: '#4caf50', marginLeft: '0.5rem' }}>Esqueceu sua senha?</a>
                </label>
            </LembrarSenhaContainer>
    )
}