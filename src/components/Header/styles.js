import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.div`
    background-color:${colors.cardBlue};
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.8);

    @media(max-width:767px){
        padding:16px;
    }
`

export const Header = styled.header`
    padding:32px 0;
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media(max-width:820px){
        padding:32px 16px;
    }
    
    @media(max-width:767px){
        flex-direction:column;
    }

    h1  {
        color:white;
    }

    ul{
        display:flex;
        align-items:center;
        @media(max-width:767px){
            padding-top:24px;
        }
        
        li{
            padding:0 32px;
            font-weight:bold;
            color:#fff; 
            cursor:pointer;

            &:hover{
                color:${colors.lightRed};
            }

            @media(max-width:820px){
                padding:0 32px;
            }
        }
    }
`