import ImagemLogo from "../PaginaInicio/assets/ImagemLogo.png"
import './styles.css';
import { Link } from 'react-router-dom';
import { FloatButton } from "antd";


export default function PaginaOds() {
    return (
        <div>
            <nav className='opcoes'>
                <img src={ImagemLogo} alt='Imagem da Logo Ods' />
                <Link to="/" className='botao_inicio'>Início</Link> |
                <Link to="/ods" className='botao_inicio'>ODS</Link> |
                <Link to="/sobre" className='botao_inicio'>Sobre Nós</Link> |
                <Link to="/quiz" className='botao_inicio'>Quiz</Link> |
                <Link to="/login" className='botao_inicio'>Login</Link> |
                <Link to="/cadastro" className='botao_inicio'>Cadastre-se</Link>
            </nav>
            <h1 class="titulo">O que são ODS?</h1>
            <p class="parOds">
                As ODS (Objetivos de Desenvolvimento Sustentável) são uma agenda global desenvolvida pela ONU em 2015 com 17 objetivos para serem atingidos até 2030. Elas sucedem os Objetivos de Desenvolvimento do Milênio, mas são mais amplas e visam enfrentar desafios interconectados nas áreas social, econômica e ambiental.

                A ideia central das ODS é promover o desenvolvimento sustentável, ou seja, buscar o progresso humano sem comprometer os recursos naturais e os direitos das gerações futuras. Esses objetivos incluem desde erradicar a pobreza e a fome, até assegurar educação de qualidade, igualdade de gênero, crescimento econômico sustentável e proteção ambiental.

                Além de serem metas para os governos, as ODS também incentivam a colaboração de empresas, ONGs e indivíduos. Elas reconhecem que problemas como desigualdade, degradação ambiental e falta de oportunidades de trabalho são interligados, e que uma abordagem integrada é essencial para promover prosperidade e justiça em todo o mundo.

                O propósito final das ODS é que, até 2030, o mundo avance significativamente em direção a um modelo de desenvolvimento que seja inclusivo, justo e sustentável para todas as pessoas, respeitando os limites ecológicos do planeta.

            </p>
            <div class="videoOds">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Fev2MHAa-qo?si=r_mqsGz4-VyUngn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>


            <div id="sdg-icons">
                <a href="#ods1" aria-label="ERRADICAÇÃO DA POBREZA" >
                    <figure class="block" >
                        <img src="/src/ImagemODS/SDG-1.svg" alt="Erradicação da pobreza" />
                    </figure>
                </a>
                <a href="#ods2" aria-label="FOME ZERO E AGRICULTURA SUSTENTÁVEL">
                    <figure class="block">
                        <img src="/src/ImagemODS/SDG-2.svg" alt="Fome zero e agricultura sustentável" />
                    </figure>
                </a>
                <a href="#ods3" aria-label="SAÚDE E BEM-ESTAR">
                    <figure class="block">
                        <img src="/src/ImagemODS/SDG-3.svg" alt="Saúde e Bem-Estar" />
                    </figure>
                </a>
                <a href="#ods4" aria-label="EDUCAÇÃO DE QUALIDADE">
                    <figure class="block">
                        <img src="/src/ImagemODS/SDG-4.svg" alt="Educação de qualidade" />
                    </figure>
                </a>
                <a href="#ods5" aria-label="IGUALDADE DE GÊNERO">
                    <figure class="block">
                        <img src="/src/ImagemODS/SDG-5.svg" alt="Igualdade de gênero" />
                    </figure>
                </a>
                <a href="#ods6" aria-label="ÁGUA POTÁVEL E SANEAMENTO">
                    <figure class="block">
                        <img src="/src/ImagemODS/SDG-6.svg" alt="Água potável e saneamento" />
                    </figure>
                </a>
                <a href="#ods7" aria-label="ENERGIA LIMPA E ACESSÍVEL">
                    <figure class="block">
                        <img src="/src/ImagemODS/SDG-7.svg" alt="Energia limpa e acessível" />
                    </figure>
                </a>
                <a href="#ods8" aria-label="TRABALHO DECENTE E CRESCIMENTO ECONÔMICO">
                    <figure class="block">
                        <img src="/src/ImagemODS/SDG-8.svg" alt="Trabalho decente e crescimento econômico" />
                    </figure>
                </a>
                <a href="#ods9" aria-label="INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA">
                    <figure class="block">
                        <img src="/src/ImagemODS/SDG-9.svg" alt="Indústria, inovação e infraestrutura" />
                    </figure>
                </a>
                <a href="#ods10" aria-label="REDUÇÃO DAS DESIGUALDADES">
                    <figure class="block" >
                        <img src="/src/ImagemODS/SDG-10.svg" alt="Redução das desigualdades" />
                    </figure>
                </a>
                <a href="#ods11" aria-label="CIDADES E COMUNIDADES SUSTENTÁVEIS">
                    <figure class="block" >
                        <img src="/src/ImagemODS/SDG-11.svg" alt="Cidades e comunidades sustentáveis" />
                    </figure>
                </a>
                <a href="#ods12" aria-label="CONSUMO E PRODUÇÃO RESPONSÁVEIS">
                    <figure class="block" >
                        <img src="/src/ImagemODS/SDG-12.svg" alt="Consumo e produção responsáveis" />
                    </figure>
                </a>
                <a href="#ods13" aria-label="AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA">
                    <figure class="block" >
                        <img src="/src/ImagemODS/SDG-13.svg" alt="Ação contra a mudança global do clima" />
                    </figure>
                </a>
                <a href="#ods14" aria-label="VIDA NA ÁGUA">
                    <figure class="block" >
                        <img src="/src/ImagemODS/SDG-14.svg" alt="Vida na água" />
                    </figure>
                </a>
                <a href="#ods15" aria-label="VIDA TERRESTRE">
                    <figure class="block" >
                        <img src="/src/ImagemODS/SDG-15.svg" alt="Vida terrestre" />
                    </figure>
                </a>
                <a href="#ods16" aria-label="PAZ, JUSTIÇA E INSTITUIÇÕES EFICAZES">
                    <figure class="block">
                        <img src="/src/ImagemODS/SDG-16.svg" alt="Paz, Justiça e Instituições Eficazes" />
                    </figure>
                </a>
                <a href="#ods17" aria-label="PARCERIAS E MEIOS DE IMPLEMENTAÇÃO">
                    <figure class="block">
                        <img src="/src/ImagemODS/SDG-17.svg" alt="Parcerias e meios de implementação" />
                    </figure>
                </a>
            </div>

            <FloatButton.BackTop />

            <section class="odsSection" id="ods1">

                <h1 class="titulo">ODS 1 - Erradicação da pobreza</h1>

                <p class="parOds">
                    O Objetivo 1 visa acabar com a pobreza em todas as suas formas e em todos os lugares. Até 2030, busca erradicar a pobreza extrema, definida como viver com menos de US$ 1,90 por dia, e reduzir pela metade a proporção de homens, mulheres e crianças que vivem em pobreza multidimensional conforme critérios nacionais. O objetivo também prevê a implementação de sistemas de proteção social adequados e acessíveis, com foco em garantir uma cobertura ampla para os mais pobres e vulneráveis. Além disso, busca assegurar direitos iguais aos recursos econômicos, incluindo acesso a serviços básicos, propriedade, herança, recursos naturais, novas tecnologias e serviços financeiros, como microfinanças. Há também uma ênfase em fortalecer a resiliência dos pobres frente a desastres climáticos, econômicos e sociais, reduzindo sua exposição a riscos. Para alcançar essas metas, propõe-se mobilizar recursos substanciais, inclusive por meio da cooperação para o desenvolvimento, a fim de garantir apoio financeiro previsível para países em desenvolvimento e, especialmente, para os menos desenvolvidos. Por fim, defende-se a criação de políticas sólidas nos níveis nacional, regional e internacional, com estratégias de desenvolvimento inclusivas e sensíveis a gênero, para promover investimentos que acelerem a erradicação da pobreza.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Fev2MHAa-qo?si=r_mqsGz4-VyUngn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section class="odsSection" id="ods2">
                <h1 class="titulo">ODS 2 - Fome zero e agricultura sustentável</h1>
                <p class="parOds">
                    O Objetivo 2 visa acabar com a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável. Até 2030, pretende garantir o acesso universal a alimentos seguros, nutritivos e suficientes, especialmente para os mais pobres e vulneráveis, como crianças e grupos em risco. Além disso, busca erradicar todas as formas de desnutrição, incluindo o nanismo e a caquexia infantil, e atender às necessidades nutricionais de adolescentes, gestantes, lactantes e idosos. Há também a meta de dobrar a produtividade agrícola e a renda dos pequenos produtores, incluindo mulheres, povos indígenas e pescadores, assegurando-lhes acesso seguro e igualitário à terra, a recursos, a conhecimentos e a mercados. O objetivo inclui a implementação de práticas agrícolas sustentáveis e resilientes para proteger ecossistemas, melhorar a qualidade do solo e aumentar a capacidade de adaptação às mudanças climáticas. Ele propõe ainda a preservação da diversidade genética de sementes e espécies agrícolas, garantindo a repartição justa dos benefícios dos recursos genéticos. Para isso, planeja-se ampliar investimentos em infraestrutura rural, pesquisa agrícola e tecnologia, bem como corrigir restrições e distorções nos mercados agrícolas globais. Por fim, visa-se melhorar o funcionamento dos mercados de alimentos e facilitar o acesso a informações sobre estoques, para mitigar a volatilidade extrema dos preços dos alimentos.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/rvET4ADE8JQ?si=H4A9tNvr_gX35wXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section class="odsSection" id="ods3">
                <h1 class="titulo">ODS 3 - Saúde e Bem-Estar</h1>
                <p class="parOds">
                    O Objetivo 3 busca assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades. Entre suas metas, estão a redução da taxa de mortalidade materna e infantil, a erradicação de doenças transmissíveis como AIDS, tuberculose, malária e doenças tropicais negligenciadas, e a promoção de saúde mental e bem-estar. O ODS 3 também foca em combater doenças não transmissíveis por meio da redução de fatores de risco e no fortalecimento da prevenção e tratamento do uso de substâncias. Até 2030, visa garantir o acesso universal a serviços de saúde sexual e reprodutiva, incluindo planejamento familiar, educação e informações de saúde, além de alcançar uma cobertura universal de saúde que compreenda serviços essenciais e proteção contra riscos financeiros. Adicionalmente, o objetivo prevê a promoção de pesquisas e investimentos em tecnologias e medicamentos acessíveis, especialmente para países em desenvolvimento, e a redução de mortes e doenças causadas por poluição do ar, água e solo. Para enfrentar emergências sanitárias, o ODS 3 apoia o fortalecimento de sistemas de resposta a crises de saúde em todos os níveis.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LMOynUxsGHo?si=tFs5dJvcWoT01MzY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section class="odsSection" id="ods4">
                <h1 class="titulo">ODS 4 - Educação de Qualidade</h1>
                <p class="parOds">
                    O Objetivo 4 visa assegurar educação inclusiva, equitativa e de qualidade, promovendo oportunidades de aprendizado ao longo da vida para todos. Até 2030, busca garantir que todas as crianças e jovens completem o ensino primário e secundário gratuito, equitativo e de qualidade, que leve a resultados relevantes de aprendizagem. Além disso, pretende expandir o acesso ao ensino técnico, profissional e superior, especialmente para populações vulneráveis, e eliminar disparidades de gênero e renda na educação. O ODS 4 também se concentra em promover habilidades relevantes para o trabalho e o empreendedorismo, aumentar a alfabetização e o conhecimento matemático em adultos e jovens, e criar ambientes educacionais seguros, inclusivos e eficazes. Ele também apoia o fortalecimento de infraestrutura educacional, a formação de professores qualificados e a conscientização sobre a sustentabilidade e os direitos humanos para preparar cidadãos globalmente responsáveis.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/htHKxLMIWrY?si=twggE9wTW4BRmELJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section class="odsSection" id="ods5">
                <h1 class="titulo">ODS 5 - Igualdade de Gênero</h1>
                <p class="parOds">
                    O Objetivo 5 visa alcançar a igualdade de gênero e empoderar todas as mulheres e meninas, eliminando a discriminação, violência e práticas prejudiciais, além de garantir participação plena em todos os aspectos da vida social, econômica e política.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/htHKxLMIWrY?si=twggE9wTW4BRmELJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section class="odsSection" id="ods6">
                <h1 class="titulo">ODS 6 - Água Potável e Saneamento</h1>
                <p class="parOds">
                    O Objetivo 6 busca garantir a disponibilidade e a gestão sustentável da água e saneamento para todos, promovendo o acesso universal à água potável e saneamento seguro, melhorando a qualidade da água e protegendo os ecossistemas hídricos.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ydH9YpoxpsI?si=y7R4D5ia38R3G-5A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section class="odsSection" id="ods7">
                <h1 class="titulo">ODS 7 - Energia Acessível e Limpa</h1>
                <p class="parOds">
                    O Objetivo 7 tem como meta garantir o acesso a uma energia acessível, confiável, sustentável e moderna para todos. Visa promover o uso de fontes renováveis, melhorar a eficiência energética e expandir a infraestrutura para fontes de energia limpa.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Qi5EQ_n0DNo?si=jgT3JbTXJXP6nuLC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section class="odsSection" id="ods8">
                <h1 class="titulo">ODS 8 - Trabalho Decente e Crescimento Econômico</h1>
                <p class="parOds">
                    O Objetivo 8 busca promover o crescimento econômico inclusivo e sustentável, o emprego pleno e produtivo, e o trabalho decente para todos, com foco especial em oportunidades para jovens, igualdade de gênero no trabalho e erradicação do trabalho infantil.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/AGV3rW83UKk?si=7eCTtsPgY8vytbVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            </section>

            <section class="odsSection" id="ods9">
                <h1 class="titulo">ODS 9 - Indústria, Inovação e Infraestrutura</h1>
                <p class="parOds">
                    O Objetivo 9 promove a construção de infraestrutura resiliente, a industrialização inclusiva e sustentável e o fomento à inovação, especialmente em países em desenvolvimento, promovendo o desenvolvimento tecnológico e a criação de empregos.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ghQZfF0nEdQ?si=4vJfCdmpHQrSWyW3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section class="odsSection" id="ods10">
                <h1 class="titulo">ODS 10 - Redução das Desigualdades</h1>
                <p class="parOds">
                    O Objetivo 10 visa reduzir as desigualdades dentro e entre os países, promovendo políticas inclusivas e equitativas que garantam a igualdade de oportunidades, abordando desigualdades de renda, sociais, econômicas e políticas.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DGLMC3Mcygc?si=aO46YvYnVUrjyHvv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section class="odsSection" id="ods11">
                <h1 class="titulo">ODS 11 - Cidades e Comunidades Sustentáveis</h1>
                <p class="parOds">
                    O Objetivo 11 visa tornar as cidades e assentamentos humanos inclusivos, seguros, resilientes e sustentáveis. Pretende melhorar o acesso a moradias seguras e acessíveis, ao transporte público e a espaços verdes, além de promover a gestão sustentável dos resíduos e reduzir o impacto ambiental das cidades.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GCml3wU2g7g?si=9SHniCtYHiBaMhqe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section class="odsSection" id="ods12">
                <h1 class="titulo">ODS 12 - Consumo e Produção Responsáveis</h1>
                <p class="parOds">
                    O Objetivo 12 busca assegurar padrões de consumo e produção sustentáveis. Inclui promover o uso eficiente dos recursos naturais, reduzir a geração de resíduos e incentivar práticas sustentáveis em toda a cadeia de produção e consumo, envolvendo governos, empresas e consumidores.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tMtMphzAcK8?si=gF3dBIn7IYX5R650" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section class="odsSection" id="ods13">
                <h1 class="titulo">ODS 13 - Ação Contra a Mudança Global do Clima</h1>
                <p class="parOds">
                    O Objetivo 13 visa tomar medidas urgentes para combater as mudanças climáticas e seus impactos. Inclui esforços para reduzir as emissões de gases de efeito estufa, aumentar a resiliência climática e integrar ações climáticas nas políticas nacionais.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ruOzd5Mthnc?si=dadwa4fgaF9FsivJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section class="odsSection" id="ods14">
                <h1 class="titulo">ODS 14 - Vida na Água</h1>
                <p class="parOds">
                    O Objetivo 14 promove a conservação e o uso sustentável dos oceanos, mares e recursos marinhos. Tem o foco em reduzir a poluição marinha, proteger ecossistemas costeiros, combater a pesca predatória e conservar a biodiversidade marinha.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-Qy6HtE0GZU?si=j2SkxrxGcHSVzGXX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section class="odsSection" id="ods15">
                <h1 class="titulo">ODS 15 - Vida Terrestre</h1>
                <p class="parOds">
                    O Objetivo 15 busca proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres. Envolve a conservação da biodiversidade, combate à desertificação, e ações para restaurar a terra e os habitats naturais, incluindo florestas e solos.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Q5TYYyD7HB8?si=an9oAzTIcuycMFkR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section class="odsSection" id="ods16">
                <h1 class="titulo">ODS 16 - Paz, Justiça e Instituições Eficazes</h1>
                <p class="parOds">
                    O Objetivo 16 promove sociedades pacíficas e inclusivas, com acesso à justiça para todos e instituições eficazes, responsáveis e inclusivas. Visa reduzir todas as formas de violência, fortalecer o estado de direito e garantir a participação democrática.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/RkRpbUt1fCM?si=OX8KE_gZUwX3MCAC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section class="odsSection" id="ods17">
                <h1 class="titulo">ODS 17 - Parcerias e Meios de Implementação</h1>
                <p class="parOds">
                    O Objetivo 17 fortalece as parcerias globais para o desenvolvimento sustentável, promovendo cooperação entre governos, setor privado e sociedade civil. Ele foca na mobilização de recursos financeiros, acesso à tecnologia, capacitação e apoio a países em desenvolvimento para a implementação dos ODS.
                </p>
                <div class="videoOds">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zzqUdXGKkW0?si=7w0c5p8RQVJBxIUp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

        </div>
    )
}