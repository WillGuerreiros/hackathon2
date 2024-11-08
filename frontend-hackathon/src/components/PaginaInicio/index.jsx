import './styles.css';
import { Link } from 'react-router-dom';
import ImagemLogo from './assets/ImagemLogo.png';
import ImagemPrincipal from './assets/ImagemPrincipal.png';

export default function PaginaInicio() {
  return (
    <div className='pagina_inicio'>
      <nav className='opcoes'>
        <img src={ImagemLogo} alt='Imagem da Logo Ods' />
        <Link to="/" className='botao_inicio'>Início</Link> | 
        <Link to="/ods" className='botao_inicio'>ODS</Link> | 
        <Link to="/sobre" className='botao_inicio'>Sobre Nós</Link> | 
        <Link to="/quiz" className='botao_inicio'>Quiz</Link> | 
        <Link to="/login" className='botao_inicio'>Login</Link> | 
        <Link to="/cadastro" className='botao_inicio'>Cadastre-se</Link>
      </nav>
      <header className='titulo_ods'>
        <div className='titulo_container'>
          <h1 className='titulo'>Objetivo de Desenvolvimento Sustentável</h1>
          <button className='botao_quiz'>Jogar o Quiz</button>
        </div>
        <img src={ImagemPrincipal} alt='Imagem principal da ODS' />
      </header>
    </div>
  );
}

