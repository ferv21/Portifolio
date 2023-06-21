import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.div`
    background-color:${colors.cardBlue};
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.8);
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
        align-items:center;
        li{
            padding:0 32px;
            font-weight:bold;
            color:#fff; 
            cursor:pointer;

            &:hover{
                color:${colors.lightRed};
            }
        }
    }
`
export const Btn = styled.button`
        
        padding: 0 8px;
        border-radius:8px;
        height:20px;
        border:none;
        position:relative;
        cursor:pointer;
        background-color:${colors.lightRed};
        font-weight:bold;
        font-size:14px;
        color:#fff;
        
    
    
`