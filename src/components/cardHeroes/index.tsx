import React, { ReactElement } from 'react'
import { StyledCardHeroes, StyledCardHeroesImage, StyledBoard, StyledHeart } from './styled'
import useLocalStorage from 'react-use-localstorage';

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

export const CardHeroes: React.FC = () => {
    const [favoriteHeroes, setFavoriteHeroes] = useLocalStorage('favoriteHeroes', JSON.stringify([]))
    
    const addFavorireHeroes = (name: string, index: number) => (e:any) => {
        const favoriteHeroesCopy:HeroData[] = JSON.parse(favoriteHeroes)
        const heroIndex = favoriteHeroesCopy.findIndex(hero => hero.name === name)
        if (heroIndex!== -1) {
            favoriteHeroesCopy.splice(heroIndex, 1)
            e.target.removeAttribute('style','color:gray')
        }
        else{
            favoriteHeroesCopy.push({ ...allHeroes[index]})
            e.target.setAttribute('style','color:gray')
        }
        setFavoriteHeroes(JSON.stringify(favoriteHeroesCopy))
    }
    return (
        <StyledBoard>
            {allHeroes.map((hero, index) => {
                return (
                    <StyledCardHeroes key={index}>
                        <StyledHeart onClick={addFavorireHeroes(hero.name, index)}> ♥ </StyledHeart>
                        <StyledCardHeroesImage key={index} src={'https://starwars-visualguide.com/assets/img/characters/' + `${index + 1}` + '.jpg'} />
                    </StyledCardHeroes>)
            })}
        </StyledBoard>
    )

}