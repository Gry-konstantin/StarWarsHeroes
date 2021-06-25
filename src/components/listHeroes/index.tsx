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
  StyledPagination
} from './styled'
import axios from 'axios'
import useLocalStorage from 'react-use-localstorage'
import { 
  useQuery,
  useQueryClient,
} from "react-query";

  

export const ListHeroes: React.FC = () => {
  const [favoriteHeroes, setFavoriteHeroes] = useLocalStorage('favoriteHeroes', JSON.stringify([]))
  const [pageNumber, setPageNumber] = useState(1)

  const [heroesCount, setHeroesCount] = useState<number>(0)
  const [heroes, setHeroes] = useState<any>([])
  const [isFetchingHeroes, setIsFetchingHeroes] = useState<boolean>(false)

// new
  const queryClient = useQueryClient()
  const { status, data, error, isFetching, isPreviousData } = useQuery(
    ['heroes', pageNumber],
    () => getInitHeroes(pageNumber),
    { keepPreviousData: true }
  )

  // console.log(status, data, error, isFetching, isPreviousData)

  useEffect(() => {
    if (data) {
      queryClient.prefetchQuery(['projects', pageNumber], () =>
      getInitHeroes(pageNumber)
      )
    }
  }, [data, pageNumber, queryClient])


  const getInitHeroes = async (page = 0) => {
    const { data } = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
    setIsFetchingHeroes(true)
    setHeroes(data.results)
    setHeroesCount(data.count)
    setIsFetchingHeroes(false)
    return data;
  }





  const [value, setValue] = useState('')



  const addFavorireHeroes = (name: string, index: number) => (e: any) => {
    const favoriteHeroesCopy = JSON.parse(favoriteHeroes)

    const heroIndex = favoriteHeroesCopy.findIndex((hero:any) => hero.name === name)
    if (heroIndex !== -1) {
      favoriteHeroesCopy.splice(heroIndex, 1)
      e.target.removeAttribute('style', 'color:gray')
    } else {

      heroes[index].srcId = srcCounter(index)

      favoriteHeroesCopy.push({ ...heroes[index] })
      e.target.setAttribute('style', 'color:gray')
    }
    setFavoriteHeroes(JSON.stringify(favoriteHeroesCopy))
  }

  // const filteredHeroes = heroes.filter((hero:any) => {
  //   return hero.name.toLowerCase().includes(value.toLowerCase())
  // })


  const srcCounter = (index:number) =>{
    const srcId = (index:number) =>{return (pageNumber-1)*10 + index + 1}
    if (srcId(index) >= 17){
      return srcId(index+1)
    }
    else {
      return srcId(index)
    }
  }



  return (
    <React.Fragment>
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
        <StyledSearchHero>
          <StyledSearchHeroInput
            type="text"
            placeholder="Search in the heroes"
            onChange={(e) => setValue(e.target.value)}
          />
        </StyledSearchHero>
        {heroes.map((hero:any, index:number) => {
          return (
            <StyledCardHeroes key={index}>{console.log(hero.name,favoriteHeroes)}
              <StyledHeart onClick={addFavorireHeroes(hero.name, index)}> ♥ </StyledHeart>
              <StyledCardHeroesImage
                key={index}
                src={`https://starwars-visualguide.com/assets/img/characters/${srcCounter(index)}.jpg`}
              />
              <StyledCardText>
                <StyledHeroName>{hero .name}</StyledHeroName>
              </StyledCardText>
            </StyledCardHeroes>
          )
        })}
      </StyledBoard>
    </React.Fragment>
  )
}
