import React, { useEffect, useState } from 'react'
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

  

export const ListHeroes: React.FC = () => {
  const [favoriteHeroes, setFavoriteHeroes] = useLocalStorage('favoriteHeroes', JSON.stringify([]))
  const [pageNumber, setPageNumber] = useState(1)
  const [heroesCount, setHeroesCount] = useState<number>(0)
  const [heroes, setHeroes] = useState<any>([])
  const [isFetchingHeroes, setIsFetchingHeroes] = useState<boolean>(false)
  const [searchStr, setSearchStr] = useState('')


// new
  const queryClient = useQueryClient()
  const { isLoading, data, error, isFetching, isPreviousData } = useQuery(
    ['heroes', pageNumber, searchStr],
    () => getInitHeroes(pageNumber,searchStr),
    { keepPreviousData: true }
  )
  // console.log(searchStr)




  useEffect(() => {
    if (data) {
      queryClient.prefetchQuery(['projects', pageNumber], () =>
      getInitHeroes(pageNumber)
      )
    }
  }, [isLoading, data, pageNumber, queryClient])


  const getInitHeroes = async (page = 0,searchStr = '') => {
    if (searchStr === ''){
      const { data } = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
      setIsFetchingHeroes(true)
      setHeroes(data.results)
      setHeroesCount(data.count)
      setIsFetchingHeroes(false)
      return data;
    }else{
      const { data } = await axios.get(`https://swapi.dev/api/people/?search=${searchStr}`)
      setHeroes(data.results)
      return data;
    }
  }
  console.log(isLoading, data, error, isFetching, isPreviousData, heroes)
  // const searchPeople = async (e:string) => {
  //   const { data } = await axios.get(`https://swapi.dev/api/people/?search=${e}`)
  //   setHeroes(data.results)
  // }



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

        <StyledNextButton
        onClick={() => {
          setPageNumber(old => ( old + 1 ))
        }}
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
