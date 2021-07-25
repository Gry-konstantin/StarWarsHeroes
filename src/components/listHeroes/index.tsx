import React, { useEffect, useState, useCallback } from 'react'
import {
  StyledCardHeroes,
  StyledCardHeroesImage,
  StyledBoard,
  StyledHeart,
  StyledHeroName,
  StyledCardText,
  StyledSearchHero,
  StyledSearchHeroInput,
  StyledPrevButton,
  StyledNextButton,
  StyledPagination,
} from './styled'
import axios from 'axios'
import useLocalStorage from 'react-use-localstorage'
import {
  useQuery,
  useQueryClient,
} from "react-query";
import { LoadingIndicator } from '../LoadingIndicator';
import {Pagination} from '../Pagination'

const heroesPerPage = 10

export const ListHeroes: React.FC = () => {

  const [favoriteHeroes, setFavoriteHeroes] = useLocalStorage('favoriteHeroes', JSON.stringify([]))
  const [pageNumber, setPageNumber] = useState(1)
  const [heroesCount, setHeroesCount] = useState<number>(0)
  const [heroes, setHeroes] = useState<any>([]) //
  const [searchStr, setSearchStr] = useState('')

  
  const callbackGetInitHeroes = useCallback(() => {
    const getInitHeroes = async (page = 0,searchString = '') => {
      if (!searchStr){
        const { data } = await axios.get(`https://swapi.dev/api/people/?page=${page}`)//error handler
        setHeroes(data.results)
        setHeroesCount(data.count)
        return data;
      }
      const { data } = await axios.get(`https://swapi.dev/api/people/?search=${searchString}`)
      setHeroes(data.results)
      setHeroesCount(data.count)
      return data;
    }
    return getInitHeroes(pageNumber,searchStr)
  }, [pageNumber,searchStr])
 

// new
  const queryClient = useQueryClient()
  const { isLoading, data, isFetching } = useQuery(
    ['heroes', pageNumber, searchStr],
    callbackGetInitHeroes,
    { keepPreviousData: true }
  )




  useEffect(() => {
    if (data) {
      queryClient.prefetchQuery(['projects', pageNumber], () =>
      callbackGetInitHeroes
      )
    }
  }, [isLoading, data, pageNumber, queryClient,callbackGetInitHeroes])




  const addFavorireHeroes = (name: string, index: number) => (e: any) => {
    const favoriteHeroesCopy = JSON.parse(favoriteHeroes)

    const heroIndex = favoriteHeroesCopy.findIndex((hero:any) => hero.name === name)
    if (heroIndex !== -1) {
      favoriteHeroesCopy.splice(heroIndex, 1)
    } else {

      favoriteHeroesCopy.push({ ...heroes[index] })
    }
    setFavoriteHeroes(JSON.stringify(favoriteHeroesCopy))
  }
  const isFavoriteHero = (hero:any) => {
    return (JSON.parse(favoriteHeroes).some( (item:any) => {return item.name === hero.name}))
  }
  
  const paginate = (numberOfPage:number) => setPageNumber(numberOfPage)

  return (
    <React.Fragment>
      <StyledSearchHero>
        <StyledSearchHeroInput
          type="text"
          placeholder="Search in the heroes"
          onChange={(e) => setSearchStr(e.target.value)}
        />
      </StyledSearchHero>
      {searchStr===''?(
        <StyledPagination>
          <StyledPrevButton
            onClick={() => setPageNumber(old => Math.max(old - 1, 1))}
            disabled={pageNumber === 1}
          >
            &#171;
          </StyledPrevButton>
          <Pagination selectedPage={pageNumber} heroesPerPage = {heroesPerPage} heroesCount = {heroesCount} paginate={paginate}/>
          <StyledNextButton
          onClick={() => {setPageNumber(old => ( old + 1 ))}}
          disabled={pageNumber === Math.ceil(heroesCount/heroesPerPage)}
          >
            &#187;
          </StyledNextButton>
        </StyledPagination>
        ):(
          <StyledPagination/>
        )}
      <StyledBoard>
      {!isFetching?(
        heroes.map((hero:any, index:number) => {
          return (
            <StyledCardHeroes key={index}>
              <StyledHeart
                isFavoriteHero = {isFavoriteHero(hero)}
                onClick={addFavorireHeroes(hero.name, index)}
              > ♥ </StyledHeart>
              <StyledCardHeroesImage
                key={index}
                src={`https://starwars-visualguide.com/assets/img/characters/${hero.url.replace(/[^+\d]/g, '')}.jpg`}
              />
              <StyledCardText>
                <StyledHeroName>{hero.name}</StyledHeroName>
              </StyledCardText>
            </StyledCardHeroes>
          )
        })
      ):(
        <LoadingIndicator/>
      )}
      </StyledBoard>
    </React.Fragment>
  )
}
