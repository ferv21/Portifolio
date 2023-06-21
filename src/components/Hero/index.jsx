import {Branding} from './styles'
import foto from '../../assets/profile.jpeg'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Hero = () => (
    <>
        <Branding className="container">
            <div className='about'>
            <span>-------------- Front-End Developer </span>
            <h1>Olá , eu sou o <span>Fer</span></h1>
            <p>
            Olá, meu nome é Fernando Viana e sou estudante de Engenharia de Computação, com o atual foco em desenvolvimento front-end. Possuo habilidades em HTML, CSS, JavaScript, TypeScript, Bootstrap, Sass, Git/Github, React, Jest e Cypress. 

            Estou sempre buscando aprimorar meus conhecimentos. Meu objetivo é me tornar um profissional de destaque na área e contribuir para projetos inovadores. Estou animado para continuar aprendendo e buscando oportunidades para aplicar meu conhecimento.

            Tenho especial interesse em aprender mais sobre o desenvolvimento web e a parte do UI/UX Desing , pois acredito que essa área tem um grande potencial e pode me oferecer oportunidades incríveis no futuro.
            </p>
            <div className='buttons'>   
                <button>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/ferv21"> 
                        <BsGithub style={{marginRight:'8px'}}/>
                        Github
                    </a>
                </button>
                <button>
                    <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/ferv1/"> 
                        <FaLinkedinIn style={{marginRight:'8px'}}/>
                        Linkedin
                    </a>
                </button>
            </div>
            </div>
            <div className='profile'>
                <img src={foto} alt="" />
            </div>
        </Branding>
    </>
)

export default Hero