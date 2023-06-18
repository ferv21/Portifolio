import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.div`
    background-color:${colors.darkBlue};
`

export const Header = styled.header`
    padding:32px 0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    h1  {
        color:white;
    }
    ul{
        display:flex;

        li{
            padding:0 32px;
            font-weight:bold;
            color:#fff;
        }
    }
`