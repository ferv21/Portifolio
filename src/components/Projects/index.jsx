import * as S from "./styles"
import {BsFillBootstrapFill} from 'react-icons/bs'
import {SiTypescript , SiReact, SiJavascript, SiSass} from 'react-icons/si'
import {IoLogoHtml5 , IoLogoCss3} from 'react-icons/io'
import eplay from '../../assets/eplay.jpeg'
import efood from '../../assets/efood.jpeg'
import disney from '../../assets/disney.jpeg'
import eldenring from '../../assets/eldenring.jpeg'
import ebactech from '../../assets/ebactech.jpeg'
import myfavoritegames from '../../assets/myfavoritegames.jpeg'
import testin from '../../assets/testin.jpeg'
import restaurante from '../../assets/restaurante.jpeg'
import todolist from '../../assets/todolist.jpeg'

const Projects = () => (
    <>
        <S.ProjectsList className="container">
            <div>  
                <h2>Projetos</h2>
            </div>
            <S.ProjectCards>
                <ul>
                    <li>
                        <S.Card>
                            <a target="_blank" rel="noopener noreferrer" href="https://eplay-murex.vercel.app/">
                            <img src={eplay} alt="" />
                            <div className="cardContent">
                            <h3>Eplay</h3>
                            <p>E-commerce para venda de jogos online, conteúdo preenchido através de api, e com o gereciamento de estado feito pelo Redux.</p>
                            <S.Tags>
                                <div>
                                    <SiReact/>
                                    <span>ReactJS</span>
                                </div>
                                <div>
                                    <SiTypescript/>
                                    <span>Typescript</span>
                                </div>
                                <div>
                                    <IoLogoCss3/>
                                    <span>Css</span>
                                </div>
                            </S.Tags>
                            </div>
                            </a>
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <a target="_blank" rel="noopener noreferrer" href="https://efood-peach.vercel.app/">
                            <img src={efood} alt="" />
                            <div className="cardContent">
                            <h3>Efood</h3>
                            <p>Plataforma para delivery de comida, conteúdo preenchido através de api, com o gerenciamento de estado feito pelo Redux.</p>
                            <S.Tags>
                                <div>
                                    <SiReact/>
                                    <span>ReactJS</span>
                                </div>
                                <div>
                                    <SiTypescript/>
                                    <span>Typescript</span>
                                </div>
                                <div>
                                    <IoLogoCss3/>
                                    <span>Css</span>
                                </div>
                            </S.Tags>
                            </div>
                            </a>
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <a target="_blank" rel="noopener noreferrer" href="https://clone-disney-plus-fer.vercel.app/">
                            <img src={disney} alt="" />
                            <div className="cardContent">
                            <h3>Landing Page Disney Plus+</h3>
                            <p>Clone da Landing Page da Disney feito com HTML, Css e JavaScript.</p>
                            <S.Tags>
                                <div>
                                    <IoLogoHtml5/>
                                    <span>HTML</span>
                                </div>
                                <div>
                                    <IoLogoCss3/>
                                    <span>CSS</span>
                                </div>
                                <div>
                                    <SiJavascript/>
                                    <span>Javascript</span>
                                </div>
                            </S.Tags>
                            </div>
                            </a>
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <a target="_blank" rel="noopener noreferrer" href="https://todo-list-react-neon.vercel.app/">
                            <img src={todolist} alt="" />
                            <div className="cardContent">
                            <h3>Lista de Tarefas</h3>
                            <p>Lista de tarefas feita com React, Typescript, Styled Components, Redux e React Router Dom.</p>
                            <S.Tags>
                                <div>
                                    <SiReact/>
                                    <span>ReactJS</span>
                                </div>
                                <div>
                                    <SiTypescript/>
                                    <span>Typescript</span>
                                </div>
                                <div>
                                    <IoLogoCss3/>
                                    <span>Css</span>
                                </div>
                            </S.Tags>
                            </div>
                            </a>
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <a target="_blank" rel="noopener noreferrer" href="https://ebac-tech-talks-steel.vercel.app/">
                            <img src={ebactech} alt="" />
                            <div className="cardContent">
                            <h3>Ebac Tech Talks</h3>
                            <p>Página para um evento online, feito com HTML, Css e JavaScript.</p>
                            <S.Tags>
                                <div>
                                    <SiReact/>
                                    <span>ReactJS</span>
                                </div>
                                <div>
                                    <SiTypescript/>
                                    <span>Typescript</span>
                                </div>
                                <div>
                                    <IoLogoCss3/>
                                    <span>Css</span>
                                </div>
                            </S.Tags>
                            </div>
                            </a>
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <a target="_blank" rel="noopener noreferrer" href="https://eldenring-page.vercel.app/">
                            <img src={eldenring} alt="" />
                            <div className="cardContent">
                            <h3>Landing Page Elden Ring</h3>
                            <p>Landing Page do jogo Elden Ring, feito com HTML e Css.</p>
                            <S.Tags>
                                <div>
                                    <IoLogoHtml5/>
                                    <span>HTML</span>
                                </div>
                                <div>
                                    <SiSass/>
                                    <span>Sass</span>
                                </div>
                            </S.Tags>
                            </div>
                            </a>
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <a target="_blank" rel="noopener noreferrer" href="https://test-in-fawn.vercel.app/">
                            <img src={testin} alt="" />
                            <div className="cardContent">
                            <h3>TestIN</h3>
                            <p>Protótipo de plataforma online para a interação de desenvolvedores com testers de software.</p>
                            <S.Tags>
                                <div>
                                    <SiReact/>
                                    <span>ReactJS</span>
                                </div>
                                <div>
                                    <SiTypescript/>
                                    <span>Typescript</span>
                                </div>
                                <div>
                                    <IoLogoCss3/>
                                    <span>Css</span>
                                </div>
                            </S.Tags>
                            </div>
                            </a>
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <a target="_blank" rel="noopener noreferrer" href="https://restaurante-navy.vercel.app/">
                            <img src={restaurante} alt="" />
                            <div className="cardContent">
                            <h3>Site Restaurante</h3>
                            <p>Site feito para restaurantes, usando Html e Bootstrap.</p>
                            <S.Tags>
                                <div>
                                    <IoLogoHtml5/>
                                    <span>HTML</span>
                                </div>
                                <div>
                                    <BsFillBootstrapFill/>
                                    <span>Bootstrap</span>
                                </div>
                            </S.Tags>
                            </div>
                            </a>
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <a target="_blank" rel="noopener noreferrer" href="https://my-favorites-games.vercel.app/">
                            <img src={myfavoritegames} alt="" />
                            <div className="cardContent">
                            <h3>My Favorite Games</h3>
                            <p>Página com meus jogos favoritos, usando Bootstrap</p>
                            <S.Tags>
                                <div>
                                    <IoLogoHtml5/>
                                    <span>HTML</span>
                                </div>
                                <div>
                                    <BsFillBootstrapFill/>
                                    <span>Bootstrap</span>
                                </div>
                            </S.Tags>
                            </div>
                            </a>
                        </S.Card>
                    </li>
                </ul>
            </S.ProjectCards>
        </S.ProjectsList>
    </>
)

export default Projects