import * as S from './styles'

const Header = () => {
    return (
        <>
        <S.HeaderBar>
        <S.Header className='container'>
            <h1>Fernando</h1>
            <ul>
                <li>Home</li>
                <li>Sobre</li>
                <li>Projetos</li>
                <li>Contatos</li>
                <li>
                    <button>light</button>
                </li>
            </ul>
        </S.Header>
        </S.HeaderBar>
        </>
    )
}

export default Header
