import React from 'react'
import useLocalStorage from 'react-use-localstorage'
import { StyledCardHeroes, StyledCardHeroesImage, StyledBoard, StyledHeart } from '../styled'

type HeroData = {
  urlId: number
  name: string
}

const allHeroes: HeroData[] = [
  {
    urlId: 1,
    name: 'Luke Skywalker',
  },
  {
    urlId: 1,
    name: 'C3PO',
  },
  {
    urlId: 1,
    name: 'R2-D2',
  },
  {
    urlId: 1,
    name: 'Darth Vader',
  },
  {
    urlId: 1,
    name: 'Lela Organa',
  },
  {
    urlId: 1,
    name: 'Owen Lars',
  },
  {
    urlId: 1,
    name: 'R5-D4',
  },
  {
    urlId: 1,
    name: 'Biggs Darklighter',
  },
  {
    urlId: 1,
    name: 'Biggs Darklighter',
  },
  {
    urlId: 1,
    name: 'Obi-Wan Kenobi',
  },
  {
    urlId: 1,
    name: 'Anakin Skywalker',
  },
]
export const CardHeroesFavorite: React.FC = () => {
  const [favoriteHeroes, setFavoriteHeroes] = useLocalStorage('favoriteHeroes', JSON.stringify([]))

  return (
    <StyledBoard>
      {JSON.parse(favoriteHeroes).map((hero: any, index: number) => {
        return (
          <StyledCardHeroes key={index}>
            <StyledCardHeroesImage
              key={index}
              src={'https://starwars-visualguide.com/assets/img/characters/' + `${hero.urlId + 1}` + '.jpg'}
            />
          </StyledCardHeroes>
        )
      })}
    </StyledBoard>
  )
}
