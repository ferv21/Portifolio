import React from 'react';
import ScrollLink from '../scroll';
import { Element } from 'react-scroll';
import * as S from './styles'

const Header = () => {


    return (
        <Element name='home'>
        <S.HeaderBar>
        <S.Header className='container'>
            <h1>Fernando</h1>
            <ul>
                <li>
                    <ScrollLink to='tecnologias'>Tecnologias</ScrollLink>
                </li>
                <li>
                    <ScrollLink to='projetos'>Projetos</ScrollLink> 
                </li>
                <li>
                     <S.Btn>Trocar Tema</S.Btn>
                </li>
            </ul>
        </S.Header>
        </S.HeaderBar>
        </Element>
    )
}

export default Header
