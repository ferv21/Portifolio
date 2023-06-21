import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
    height:200px;
    background-color:${colors.cardBlue};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    p{
        padding-top:8px;
        color:#fff;
    }

    div{
        font-size:40px;
        display:flex;
        a{
            color:#fff;
            cursor:pointer;
            margin:0 16px;
        }
    }
`
