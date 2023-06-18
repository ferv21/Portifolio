import styled from 'styled-components';
import { colors } from '../../styles';

export const Branding = styled.div`
    display:flex;

    .about{
        margin-top:100px;
        flex:50%;
        text-align:justify;
        color:#fff;
        line-height:22px;
        h1{
            font-size:48px;
            margin-top:16px;
            padding-bottom:60px;
            span{
                color:${colors.lightRed};
            }
        }
        p{
            margin-top:32px;
        }
    }

    .profile{
        margin-top:80px;
        flex: 50%;
        display:flex;
        justify-content:end;
        img{
            height:500px;
            border-radius:50%;
        }
    }
    .buttons {
        margin-top:160px;
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