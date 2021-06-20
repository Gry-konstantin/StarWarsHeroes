import React from 'react'
import useLocalStorage from 'react-use-localstorage';
import { StyledCardHeroes, StyledCardHeroesImage, StyledBoard, StyledHeart } from '../styled'

type HeroData = {
    name: string
}

const allHeroes:HeroData[] = [
    {
        name: 'Luke Skywalker',
    },
    {
        name: 'C3PO',
    },
    {
        name: 'R2-D2',
    },
    {
        name: 'Darth Vader',
    },
    {
        name: 'Lela Organa',
    },
    {
        name: 'Owen Lars',
    },
    {
        name: 'R5-D4',
    },
    {
        name: 'Biggs Darklighter',
    },
    {
        name: 'Biggs Darklighter',
    },
    {
        name: 'Obi-Wan Kenobi',
    }, {
        name: 'Anakin Skywalker'
    }
]
export const CardHeroesFavorite: React.FC = () => {

    const [favoriteHeroes, setFavoriteHeroes] = useLocalStorage('favoriteHeroes', JSON.stringify([]))
    console.log(favoriteHeroes)
    
    return (
        <StyledBoard>
            {allHeroes.map((hero, index) => {
                return 
                (
                    <StyledCardHeroes key={index}>
                        {/* <StyledHeart onClick={addFavorireHeroes(hero.name, index)}> ♥ </StyledHeart> */}
                        <StyledCardHeroesImage key={index} src={'https://starwars-visualguide.com/assets/img/characters/' + `${index + 1}` + '.jpg'} />
                    </StyledCardHeroes>
                )
            })}
        </StyledBoard>
    )

}