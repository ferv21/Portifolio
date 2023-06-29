import * as S from './styles'


const CardProject = ({projectImg, title, description, tags1, nameTag1,tags2, nameTag2,tags3, nameTag3, projectLink}) => {
    return (
        <>
        <S.Card>
            <a target="_blank" rel="noopener noreferrer" href={projectLink}>
            <img src={projectImg} alt="" />
            <div className="cardContent">
                <h3>{title}</h3>
                <p>{description}</p>
                    <S.Tags>
                        <div>
                            {tags1}
                            <span>{nameTag1}</span>
                        </div>
                        <div>
                            {tags2}
                            <span>{nameTag2}</span>
                        </div>
                        <div>
                            {tags3}
                            <span>{nameTag3}</span>
                        </div>
                    </S.Tags>
            </div>
            </a>
        </S.Card>   
        </>
    )
}

export default CardProject;
