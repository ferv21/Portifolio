import styled from 'styled-components'
import { colors } from '../../styles'

export const Technologies = styled.div` 
    padding-top:200px;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media(max-width:767px){
        padding-top:50px;
    }

    div {
        display:flex;
        justify-content:center;
        h2{
            font-size:32px;
            border-bottom: 2px solid ${colors.lightRed};
            color:#fff;
        }
    } 

`

export const TechCards = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:100px;
    margin-top:100px;
    margin-bottom: 100px;

    @media(max-width:820px){
        grid-template-columns:1fr 1fr 1fr;
        gap:40px;
        margin-bottom:0;
    }


    @media(max-width:767px){
        grid-template-columns:1fr;
    }

    li{

        border-radius:8px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        height:200px;
        width:200px;
        background-color:${colors.lightBlue};
        cursor:pointer;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.8);
        &:hover{
            
          
        }
        div{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            font-size:80px;
            p{  
                margin-top:8px;
                font-size:18px;
                font-weight:bold;
                color:#fff;
            }
        }
    }
`