import {BsGithub} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {FaLinkedinIn} from 'react-icons/fa'
import {FooterContainer} from './styles'

const Footer = () => (
    <>
        <FooterContainer>
        <div>
            <a href='www.linkedin.com/in/ferv1'>
                <FaLinkedinIn/>
            </a>
            <a href='www.linkedin.com/in/ferv1'>
                <BsGithub/>
            </a>
            <a href='www.linkedin.com/in/ferv1'>
                <HiOutlineMail/>
            </a>
        </div>
            <p>&copy; Fernando Viana 2023</p>
        </FooterContainer>
    </>
)

export default Footer