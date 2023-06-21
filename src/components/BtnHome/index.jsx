import {ButtonHome} from './styles'
import {BsArrowUp} from 'react-icons/bs'
import ScrollLink from '../scroll';
const BtnHome = () => {
    return (
        <>
        <ScrollLink to='home'>

           <ButtonHome>
                <BsArrowUp/>
           </ButtonHome>

        </ScrollLink>
        </>
    )
}

export default BtnHome