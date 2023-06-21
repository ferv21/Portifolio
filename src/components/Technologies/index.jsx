import { Element } from 'react-scroll'
import {Technologies, TechCards} from './styles'
import {BsGit, BsFillBootstrapFill} from 'react-icons/bs'
import {SiTypescript , SiReact, SiSass, SiJavascript} from 'react-icons/si'
import {IoLogoHtml5 , IoLogoCss3} from 'react-icons/io'

const Tech = () => (
    <Element name='tecnologias'>
        <Technologies className='container'>
            <div>
                <h2>Tecnologias</h2>
            </div>
            <TechCards>
                <li>
                    <div>
                        <IoLogoHtml5 style={{color:'#f06529'}} />
                        <p>HTML</p>
                    </div>
                </li>
                <li>
                    <div>
                        <IoLogoCss3 style={{color:'#2965f1'}} />
                        <p>CSS</p>
                    </div>
                </li>
                <li>
                    <div>
                        <SiJavascript style={{color:'#f7df1e'}}/>
                        <p>JavaScript</p>
                    </div>
                </li>
                <li>
                    <div>
                        <SiTypescript style={{color:'#2f78c5'}}/>
                        <p>TypeScript</p>
                    </div>
                </li>
                <li>
                    <div>
                        <SiReact style={{color:'#61dafb'}}/>
                        <p>React</p>
                    </div>
                </li>
                <li>
                    <div>
                        <SiSass style={{color:'#cd6799'}} />
                        <p>Sass</p>
                    </div>
                </li>
                <li>
                    <div>
                        <BsFillBootstrapFill style={{color:'#8b13fd'}}/>
                        <p>Bootstrap</p>
                    </div>
                </li>
                <li>
                    <div>
                        <BsGit style={{color:'#f05033'}} />
                        <p>Git / Github</p>
                    </div>
                </li>
            </TechCards>
        </Technologies>

    </Element>
)

export default Tech