import ImagemLogo from "../PaginaInicio/assets/ImagemLogo.png"
import './stylesSobre.css';
import { Link } from 'react-router-dom';

export default function () {

    return (
        <div className="paginaSobre">
            <nav className='opcoes'>
                <img src={ImagemLogo} alt='Imagem da Logo Ods' />
                <Link to="/" className='botao_inicio'>Início</Link> |
                <Link to="/ods" className='botao_inicio'>ODS</Link> |
                <Link to="/sobre" className='botao_inicio'>Sobre Nós</Link> |
                <Link to="/cadastro" className='botao_inicio'>Cadastre-se</Link>
            </nav>

            <h1 className="titulo">DESENVOLVEDORES</h1>

            <div className="devContainer">
                <picture className="picContainer">
                    <img className="devPic" src="https://williamguerreiros.netlify.app/avatarwill.JPEG" alt="foto willliam" />
                </picture>

                <div className="sobreDevContainer">
                    <h2 className="nomeDev">
                        William Guerreiros
                    </h2>
                    <p className="sobreDev">Olá, eu sou o William e trabalho atualmente como programador de maquinas retilínea, especificamente em maquinas Cixing.
                        Sou formado em administração de empresas, graduação essa que me trouxe uma visão sistêmica do negocio atual e me auxiliou no planejamento da produção, processos administrativos em geral desde a compra de matéria prima, a venda e cobrança do produto final. Atuar como vendedor me trouxe a experiencia de trabalhar com o publico.
                        Mas sempre me interessei por jogos eletrônicos e tecnologia, por isso estou me preparando para a mudança de carreira, com cursos e uma nova graduação, participações em game jams e projetos pessoais.</p>
                    <div className="linksDev">
                        <a className="linkDev" href="https://www.linkedin.com/in/william-nunes-guerreiros/">Linkedin</a>
                        <a className="linkDev" href="https://github.com/WillGuerreiros">Github</a>
                        <a className="linkDev" href="https://williamguerreiros.netlify.app/">Portifólio</a>
                    </div>

                </div>



            </div>




            <div className="devContainer">
                <picture className="picContainer">
                    <img className="devPic" src="https://avatars.githubusercontent.com/u/121061442?v=4" alt="foto willliam" />
                </picture>

                <div className="sobreDevContainer">
                    <h2 className="nomeDev">
                        Carolina Flores
                    </h2>
                    <p className="sobreDev">Olá, eu sou Caroline Flores!

                        🎓 Atualmente, estou estudando Análise e Desenvolvimento de Sistemas, com foco em programação front-end e back-end. Adoro aprender novas tecnologias e aplicar conhecimentos em projetos práticos.

                        🌱 Estou sempre em busca de desafios e oportunidades para crescer como desenvolvedora. Sinta-se à vontade para conferir meus projetos !</p>
                    <div className="linksDev">
                        <a className="linkDev" href="">Linkedin</a>
                        <a className="linkDev" href="https://github.com/CarolineFloresR">Github</a>
                        <a className="linkDev" href="">Portifólio</a>
                    </div>

                </div>



            </div>

        </div>
    )
}