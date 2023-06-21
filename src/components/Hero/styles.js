import styled from 'styled-components';
import { colors } from '../../styles';

export const Branding = styled.div`
    display:flex;

    @media(max-width:820px){
        flex-direction:column-reverse;
        align-items:center;
    }

    .about{
        padding-top:180px;
        width:50%;
        text-align:justify;
        color:#fff;
        line-height:22px;

        @media(max-width:820px){
            flex-direction:column;
            align-items:center;
            padding-top:50px;
            width:100%;
            padding:32px;
          }

        h1{
            font-size:48px;
            margin-top:16px;
            padding-bottom:60px;

            @media(max-width:820px){
                font-size:32px;
                margin-top:16px;
                padding-bottom:60px; 
            }

            span{
                color:${colors.lightRed};
            }
        }
        p{
            margin-top:32px;
            line-height:22px;
        }
    }

    .profile{
        padding-top:160px;
        width:50%;
        display:flex;
        justify-content:end;

        @media(max-width:820px){
           flex-direction:column;
           align-items:center;
           padding-top:50px;
         }
        
        img{
            height:500px;
            border-radius:50%;

            @media(max-width:767px){
                height:300px;
             }
            
        }
    }
    .buttons {
        margin-top:160px;
        @media(max-width:767px){
            margin-top:32px;
            display:flex;
            justify-content:center;
        }
        button {    
            background-color:${colors.lightRed};
            border:none;
            margin-right:16px;
            padding:8px;
            border-radius:8px;
            a{
                font-size:20px;
                display:flex;
                align-items:center;
                color:#fff;
            }
        }
    }
`