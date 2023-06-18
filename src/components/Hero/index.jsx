import {Branding} from './styles'
import foto from '../../assets/death.jpg'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
const Hero = () => (
    <>
        <Branding className="container">
            <div className='about'>
            <span>-------------- Front-End Developer </span>
            <h1>Olá , eu sou o <span>Fer</span></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus necessitatibus ullam deleniti! Iure id nostrum, eveniet repudiandae rerum, libero suscipit autem recusandae quam impedit mollitia doloremque distinctio a aliquam corporis.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus necessitatibus ullam deleniti! Iure id nostrum, eveniet repudiandae rerum, libero suscipit autem recusandae quam impedit mollitia doloremque distinctio a aliquam corporis.
            </p>
            <div className='buttons'>   
                <button>
                    <a href="#a"> 
                        <BsGithub style={{marginRight:'8px'}}/>
                        Github
                    </a>
                </button>
                <button>
                    <a href="#a"> 
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