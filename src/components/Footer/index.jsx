import {BsGithub} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {FaLinkedinIn} from 'react-icons/fa'
import {FooterContainer} from './styles'

const Footer = () => (
    <>
        <FooterContainer>
        <div>
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/ferv1'>
                <FaLinkedinIn/>
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/ferv21'>
                <BsGithub/>
            </a>
            <a href='mailto:fernandovianadossantos2001@gmail.com'>
                <HiOutlineMail/>
            </a>
        </div>
            <p>&copy; Fernando Viana 2023</p>
        </FooterContainer>
    </>
)

export default Footer