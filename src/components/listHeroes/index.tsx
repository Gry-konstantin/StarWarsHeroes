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

  

export const ListHeroes: React.FC = () => {

  const [favoriteHeroes, setFavoriteHeroes] = useLocalStorage('favoriteHeroes', JSON.stringify([]))
  const [pageNumber, setPageNumber] = useState(1)
  const [heroesCount, setHeroesCount] = useState<number>(0)
  const [heroes, setHeroes] = useState<any>([])
  const [isFetchingHeroes, setIsFetchingHeroes] = useState<boolean>(false)
  const [searchStr, setSearchStr] = useState('')
  const [heroesPerPage, setHeroesPerPage] = useState<number>(10) 

  
  const callbackGetInitHeroes = useCallback(() => {
    getInitHeroes(pageNumber,searchStr)
  }, [pageNumber,searchStr])


// new
  const queryClient = useQueryClient()
  const { isLoading, data, error, isFetching, isPreviousData } = useQuery(
    ['heroes', pageNumber, searchStr],
    callbackGetInitHeroes,
    { keepPreviousData: true }
  )




  useEffect(() => {
    if (data) {
      queryClient.prefetchQuery(['projects', pageNumber], () =>
      getInitHeroes(pageNumber)
      )
    }
  }, [isLoading, data, pageNumber, queryClient])


  const getInitHeroes = async (page = 0,searchString = '') => {
    
    
    if (searchStr === ''){
      const { data } = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
      setIsFetchingHeroes(true)
      setHeroes(data.results)
      setHeroesCount(data.count)
      setIsFetchingHeroes(false)
      return data;
    }
      const { data } = await axios.get(`https://swapi.dev/api/people/?search=${searchString}`)
      setHeroes(data.results)
      return data;
    
  }



  const addFavorireHeroes = (name: string, index: number) => (e: any) => {
    const favoriteHeroesCopy = JSON.parse(favoriteHeroes)

    const heroIndex = favoriteHeroesCopy.findIndex((hero:any) => hero.name === name)
    if (heroIndex !== -1) {
      favoriteHeroesCopy.splice(heroIndex, 1)
      e.target.removeAttribute('style', 'color:gray')
    } else {

      favoriteHeroesCopy.push({ ...heroes[index] })
      e.target.setAttribute('style', 'color:gray')
    }
    setFavoriteHeroes(JSON.stringify(favoriteHeroesCopy))
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
      <StyledPagination>
        <StyledPrevButton
          onClick={() => setPageNumber(old => Math.max(old - 1, 1))}
          disabled={pageNumber === 1}
        >
          Prev
        </StyledPrevButton>
        <Pagination heroesPerPage = {heroesPerPage} heroesCount = {heroesCount} paginate={paginate}/>
        <StyledNextButton
        onClick={() => {setPageNumber(old => ( old + 1 ))}}
        disabled={pageNumber === Math.ceil(heroesCount/heroesPerPage)}
        >
          Next
        </StyledNextButton>
      </StyledPagination>
      <StyledBoard>
      {!isFetching?(
        heroes.map((hero:any, index:number) => {
          return (
            <StyledCardHeroes key={index}>
              <StyledHeart onClick={addFavorireHeroes(hero.name, index)}> ♥ </StyledHeart>
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
