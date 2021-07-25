import React from 'react'
import useLocalStorage from 'react-use-localstorage'
import {
  StyledCardHeroes,
  StyledCardHeroesImage,
  StyledBoard,
  StyledHeroName,
  StyledCardText,
  StyledHeart
} from '../listHeroes/styled'


export const ListHeroesFavorite: React.FC = () => {
  const [favoriteHeroes, setFavoriteHeroes] = useLocalStorage('favoriteHeroes', JSON.stringify([]))
  const removeFavoriteHeroes = (name: string, index: number) => (event:any) => {
    const favoriteHeroesCopy = JSON.parse(favoriteHeroes)
    favoriteHeroesCopy.splice(index, 1)
    setFavoriteHeroes(JSON.stringify(favoriteHeroesCopy))
  }
  return (
    <StyledBoard>
      {JSON.parse(favoriteHeroes).map((hero:any, index: number) => {
        return (
          <StyledCardHeroes key={index}>
            <StyledHeart isFavoriteHero = {true} onClick={removeFavoriteHeroes(hero.name, index)}> ♥ </StyledHeart>
            <StyledCardHeroesImage
              key={index}
              src={`https://starwars-visualguide.com/assets/img/characters/${hero.url.replace(/[^+\d]/g, '')}.jpg`}
            />
            <StyledCardText>
              <StyledHeroName>{hero.name}</StyledHeroName>
            </StyledCardText>
          </StyledCardHeroes>
        )
      })}
    </StyledBoard>
  )
}
