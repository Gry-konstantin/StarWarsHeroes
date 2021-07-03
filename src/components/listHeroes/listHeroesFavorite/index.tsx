import React from 'react'
import useLocalStorage from 'react-use-localstorage'
import { StyledCardHeroes, StyledCardHeroesImage, StyledBoard, StyledHeroName,StyledCardText } from '../styled'


export const ListHeroesFavorite: React.FC = () => {
  const [favoriteHeroes, setFavoriteHeroes] = useLocalStorage('favoriteHeroes', JSON.stringify([]))
  return (
    <StyledBoard>
      {JSON.parse(favoriteHeroes).map((hero: any, index: number) => {
        return (
          <StyledCardHeroes key={index}>
            <StyledCardHeroesImage
              key={index}
              src={`https://starwars-visualguide.com/assets/img/characters/${hero.url.replace(/[^+\d]/g, '')}.jpg`}
            />
            <StyledCardText>
              <StyledHeroName>{hero .name}</StyledHeroName>
            </StyledCardText>
          </StyledCardHeroes>
        )
      })}
    </StyledBoard>
  )
}
