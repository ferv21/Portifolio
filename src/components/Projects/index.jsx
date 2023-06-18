import * as S from "./styles"
import {BsGit, BsFillBootstrapFill} from 'react-icons/bs'
import {SiTypescript , SiReact, SiSass, SiJavascript} from 'react-icons/si'
import {IoLogoHtml5 , IoLogoCss3} from 'react-icons/io'
import eplay from '../../assets/eplay.jpeg'
import efood from '../../assets/efood.jpeg'
import disney from '../../assets/disney.jpeg'
import eldenring from '../../assets/eldenring.jpeg'
import ebactech from '../../assets/ebactech.jpeg'
import myfavoritegames from '../../assets/myfavoritegames.jpeg'
import testin from '../../assets/testin.jpeg'
import restaurante from '../../assets/restaurante.jpeg'

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
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <img src={efood} alt="" />
                            <div className="cardContent">
                            <h3>NetFlix Clone</h3>
                            <p>This is a project that i pratice my knowledge of ReactJS and css properties</p>
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
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <img src={disney} alt="" />
                            <div className="cardContent">
                            <h3>NetFlix Clone</h3>
                            <p>This is a project that i pratice my knowledge of ReactJS and css properties</p>
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
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <img src={eldenring} alt="" />
                            <div className="cardContent">
                            <h3>NetFlix Clone</h3>
                            <p>This is a project that i pratice my knowledge of ReactJS and css properties</p>
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
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <img src={ebactech} alt="" />
                            <div className="cardContent">
                            <h3>NetFlix Clone</h3>
                            <p>This is a project that i pratice my knowledge of ReactJS and css properties</p>
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
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <img src={myfavoritegames} alt="" />
                            <div className="cardContent">
                            <h3>NetFlix Clone</h3>
                            <p>This is a project that i pratice my knowledge of ReactJS and css properties</p>
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
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <img src={testin} alt="" />
                            <div className="cardContent">
                            <h3>NetFlix Clone</h3>
                            <p>This is a project that i pratice my knowledge of ReactJS and css properties</p>
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
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <img src={restaurante} alt="" />
                            <div className="cardContent">
                            <h3>NetFlix Clone</h3>
                            <p>This is a project that i pratice my knowledge of ReactJS and css properties</p>
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
                        </S.Card>
                    </li>
                    <li>
                        <S.Card>
                            <img src={myfavoritegames} alt="" />
                            <div className="cardContent">
                            <h3>NetFlix Clone</h3>
                            <p>This is a project that i pratice my knowledge of ReactJS and css properties</p>
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
                        </S.Card>
                    </li>
                </ul>
            </S.ProjectCards>
        </S.ProjectsList>
    </>
)

export default Projects