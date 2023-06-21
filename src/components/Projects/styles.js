import styled from 'styled-components'
import { colors } from '../../styles'



export const ProjectsList = styled.section`
    margin-top:200px;
    padding-bottom:100px;
    display:flex;
    flex-direction:column;
    align-items:center;


 >div {
    display:flex;
    justify-content:center;
    h2{
        font-size:32px;
        border-bottom: 2px solid ${colors.lightRed};
        color:#fff;
    }
} 
`

export const ProjectCards = styled.div`
    padding-top:100px;
    ul {
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
        gap:120px;

        @media(max-width:820px){
            grid-template-columns:1fr 1fr;
            gap:40px;
            
        }
        @media(max-width:767px){
            grid-template-columns:1fr;
        }

    }
`

export const Card = styled.div`
    a{
        color:white;
    }
    cursor:pointer;
    background-color:${colors.lightBlue};
    border-radius:16px;
    height:400px;
    width:360px;
    position:relative;
    color:white;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.8);
    transition: ease 0.5s;
    &:hover{
        transform:scale(1.1);
    }


    h3{
        color:${colors.lightRed};
        padding-bottom:8px;
    }
    p{  
        text-align:justify;
        line-height:22px;
    }
    img{
        height:200px;
        width:100%;
        border-radius: 16px 16px 0 0;
    }

    .cardContent{
        padding:16px;
    }
`


export const Tags = styled.div`
    display:flex;
    position:absolute;
    bottom:16px;
    left:16px;

    div {
        display:flex;
        align-items:center;
        background-color:${colors.lightRed};
        padding:4px;
        margin-right:8px;
        border-radius:4px;
        span {
            margin-left: 4px;
        }
    }
`