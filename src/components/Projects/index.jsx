import {Element} from 'react-scroll'
import * as S from "./styles"
import {BsFillBootstrapFill} from 'react-icons/bs'
import {SiTypescript , SiReact, SiJavascript, SiSass} from 'react-icons/si'
import {IoLogoHtml5 , IoLogoCss3} from 'react-icons/io'

import {apiMercadoLivre, disney, ebactech, efood, eldenring, eplay, viacep, landingpagelol, myfavoritegames,
restaurante, testin, todolist,pokedex} from './import'

import CardProject from '../CardProject'



const Projects = () => (
    <Element name='projetos'>
        <S.ProjectsList className="container">
            <div>  
                <h2>Projetos</h2>
            </div>
            <S.ProjectCards>
                <ul>
                    <li>
                        <CardProject 
                        projectLink="https://eplay-murex.vercel.app/"
                        description="E-commerce para venda de jogos online, conteúdo preenchido através de api, e com o gereciamento de estado feito pelo Redux." 
                        title="Eplay" 
                        projectImg={eplay} 
                        tags1={<SiReact/>}  
                        nameTag1="ReactJS"
                        tags2={<SiTypescript/>}
                        nameTag2="Typescript"
                        tags3={<IoLogoCss3/>}
                        nameTag3="Css"
                        />
                    </li>
                    <li>
                        <CardProject 
                        projectLink="https://efood-peach.vercel.app/"
                        description="Plataforma para delivery de comida, conteúdo preenchido através de api, com o gerenciamento de estado feito pelo Redux." 
                        title="Efood" 
                        projectImg={efood} 
                        tags1={<SiReact/>}  
                        nameTag1="ReactJS"
                        tags2={<SiTypescript/>}
                        nameTag2="Typescript"
                        tags3={<IoLogoCss3/>}
                        nameTag3="Css"
                        />
                    </li>
                    <li>
                        <CardProject 
                        projectLink="https://clone-disney-plus-fer.vercel.app/"
                        description="Clone da Landing Page da Disney feito com HTML, Css e JavaScript." 
                        title="Landing Page Disney+" 
                        projectImg={disney} 
                        tags1={<IoLogoHtml5/>}  
                        nameTag1="HTML"
                        tags2={<IoLogoCss3/>}
                        nameTag2="CSS"
                        tags3={<SiJavascript/>}
                        nameTag3="Javascript"
                        />
                    </li>
                    <li>
                        <CardProject 
                        projectLink="https://buscadordecep-ghpv.vercel.app/"
                        description="Buscador de cep usando a api do ViaCep."
                        title="Buscador de Cep"
                        projectImg={viacep}
                        tags1={<SiReact/>}  
                        nameTag1="ReactJS"
                        tags2={<SiJavascript/>}
                        nameTag2="Javascript"
                        tags3={<IoLogoCss3/>}
                        nameTag3="Css"
                        />
                    </li>
                    <li>
                        <CardProject 
                        projectLink="https://pokedex-theta-five-54.vercel.app/"
                        description="Buscador de pokemon utilizando a pokeAPI"
                        title="Pokedex"
                        projectImg={pokedex}
                        tags1={<SiReact/>}  
                        nameTag1="ReactJS"
                        tags2={<SiJavascript/>}
                        nameTag2="Javascript"
                        tags3={<IoLogoCss3/>}
                        nameTag3="Css"
                        />
                    </li>
                    <li>
                        <CardProject 
                        projectLink="https://shopcart-react-one.vercel.app/"
                        description="Carrinho de compras feito com ReactJS, utilizando a Api do Mercado Livre. Projeto contém sistema de busca e compras funcionais."
                        title="Carrinho de Compras"
                        projectImg={apiMercadoLivre}
                        tags1={<SiReact/>}  
                        nameTag1="ReactJS"
                        tags2={<SiJavascript/>}
                        nameTag2="Javascript"
                        tags3={<IoLogoCss3/>}
                        nameTag3="Css"
                        />
                    </li>
                    <li>
                        <CardProject 
                        projectLink="https://loginpagelol.vercel.app/"
                        description="Tela de login do jogo League of Legends - Riot Games."
                        title="Login Page Lol"
                        projectImg={landingpagelol}
                        tags1={<SiReact/>}  
                        nameTag1="ReactJS"
                        tags2={<SiJavascript/>}
                        nameTag2="Javascript"
                        tags3={<IoLogoCss3/>}
                        nameTag3="Css"
                        />
                    </li>
                    <li>
                        <CardProject 
                        projectLink="https://todo-list-react-neon.vercel.app/"
                        description="Lista de tarefas feita com React, Typescript, Styled Components, Redux e React Router Dom." 
                        title="Lista de Tarefas" 
                        projectImg={todolist} 
                        tags1={<SiReact/>}  
                        nameTag1="ReactJS"
                        tags2={<SiTypescript/>}
                        nameTag2="Typescript"
                        tags3={<IoLogoCss3/>}
                        nameTag3="Css"
                        />
                    </li>
                    <li>
                        <CardProject 
                        projectLink="https://ebac-tech-talks-steel.vercel.app/"
                        description="Página para um evento online, feito com HTML, Css e JavaScript." 
                        title="Ebac Tech Talks" 
                        projectImg={ebactech} 
                        tags1={<IoLogoHtml5/>}  
                        nameTag1="HTML"
                        tags2={<IoLogoCss3/>}
                        nameTag2="CSS"
                        tags3={<SiJavascript/>}
                        nameTag3="Javascript"
                        />
                    </li>
                    <li>
                        <CardProject 
                        projectLink="https://eldenring-page.vercel.app/"
                        description="Landing Page do jogo Elden Ring, feito com HTML e Css." 
                        title="Landing Page Elden Ring" 
                        projectImg={eldenring} 
                        tags1={<IoLogoHtml5/>}  
                        nameTag1="HTML"
                        tags2={<SiSass/>}
                        nameTag2="Sass"
                        tags3={<IoLogoCss3/>}
                        nameTag3="CSS"
                        />
                    </li>
                    <li>
                        <CardProject 
                        projectLink="https://test-in-fawn.vercel.app/"
                        description="Protótipo de plataforma online para a interação de desenvolvedores com testers de software." 
                        title="TestIN" 
                        projectImg={testin} 
                        tags1={<SiReact/>}  
                        nameTag1="ReactJS"
                        tags2={<SiTypescript/>}
                        nameTag2="Typescript"
                        tags3={<IoLogoCss3/>}
                        nameTag3="Css"
                        />
                    </li>
                    <li>
                        <CardProject 
                        projectLink="https://restaurante-navy.vercel.app/"
                        description="Site feito para restaurantes, usando Html e Bootstrap." 
                        title="Site Restaurante" 
                        projectImg={restaurante} 
                        tags1={<IoLogoHtml5/>}  
                        nameTag1="HTML"
                        tags2={<BsFillBootstrapFill/>}
                        nameTag2="Bootstrap"
                        tags3={<IoLogoCss3/>}
                        nameTag3="Css"
                        />
                    </li>
                    <li>
                        <CardProject 
                        projectLink="https://my-favorites-games.vercel.app/"
                        description="Página com meus jogos favoritos, usando Bootstrap." 
                        title="My Favorite Games" 
                        projectImg={myfavoritegames} 
                        tags1={<IoLogoHtml5/>}  
                        nameTag1="HTML"
                        tags2={<BsFillBootstrapFill/>}
                        nameTag2="Bootstrap"
                        tags3={<IoLogoCss3/>}
                        nameTag3="Css"
                        />
                    </li>
                    
                </ul>
            </S.ProjectCards>
        </S.ProjectsList>
    </Element>
)

export default Projects