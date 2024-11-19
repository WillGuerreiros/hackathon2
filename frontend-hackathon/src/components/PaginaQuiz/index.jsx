import QuestionSection from "./QuestionSection"
import ImagemLogo from "../PaginaInicio/assets/ImagemLogo.png"
import './styles.css';
import { Link } from 'react-router-dom';




export default function PaginaQuiz() {
    return (<>
        <nav className='opcoes'>
            <img src={ImagemLogo} alt='Imagem da Logo Ods' />
            <Link to="/" className='botao_inicio'>Início</Link> |
            <Link to="/ods" className='botao_inicio'>ODS</Link> |
            <Link to="/sobre" className='botao_inicio'>Sobre Nós</Link> |
            <Link to="/quiz" className='botao_inicio'>Quiz</Link> |
            <Link to="/cadastro" className='botao_inicio'>Cadastre-se</Link>
        </nav>

        <div>
            <QuestionSection/>
        </div>

    </>
    )
}