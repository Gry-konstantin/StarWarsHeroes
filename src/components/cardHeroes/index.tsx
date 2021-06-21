import React, { ReactElement, useState } from 'react'
import { StyledCardHeroes, StyledCardHeroesImage, StyledBoard, StyledHeart ,StyledHeroName ,StyledCardText,StyledSearchHero,StyledSearchHeroInput} from './styled'
import useLocalStorage from 'react-use-localstorage';
import ReactPaginate from 'react-paginate';

type HeroData = {
    urlId: number
    name: string

}

const allHeroes:HeroData[] = [
    {
        urlId: 0,
        name: 'Luke Skywalker',
    },
    {
        urlId: 1,
        name: 'C3PO',
    },
    {
        urlId: 2,
        name: 'R2-D2',
    },
    {
        urlId: 3,
        name: 'Darth Vader',
    },
    {
        urlId: 4,
        name: 'Lela Organa',
    },
    {
        urlId: 5,
        name: 'Owen Lars',
    },
    {
        urlId: 6,
        name: 'Beru Whitesun Lars',
    },
    {
        urlId: 7,
        name: 'R5-D4',
    },
    {
        urlId: 8,
        name: 'Biggs Darklighter',
    },
    {
        urlId: 9,
        name: 'Obi-Wan Kenobi',
    }, {
        urlId: 10,
        name: 'Anakin Skywalker',
    }
]

export const CardHeroes: React.FC = () => {
    const [favoriteHeroes, setFavoriteHeroes] = useLocalStorage('favoriteHeroes', JSON.stringify([]))
    const [pageNumber,setPageNumber] = useState(0)

    const [value, setValue] = useState('')

    const usersPerPage = 10
    const pageVisited = usersPerPage * pageNumber
    const pageCount = Math.ceil(allHeroes.length/usersPerPage)

    
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
    
    const changePage = ({selected}:any) => {
        setPageNumber(selected)
    }

    const filteredHeroes = allHeroes.filter(hero =>{
        return hero.name.toLowerCase().includes(value.toLowerCase())
    })


        return (
            <StyledBoard>
                <StyledSearchHero>
                    <StyledSearchHeroInput
                        type="text"
                        placeholder = "Search in the heroes"
                        onChange = {(e)=>setValue(e.target.value)}
                    />
                </StyledSearchHero>
                {filteredHeroes.slice(pageVisited,pageVisited + usersPerPage ).map((hero, index) => {
                    return (
                        <StyledCardHeroes key={index}>
                            <StyledHeart onClick={addFavorireHeroes(hero.name, index)}> ♥ </StyledHeart>
                            <StyledCardHeroesImage key={index} src={'https://starwars-visualguide.com/assets/img/characters/' + `${hero.urlId + 1}` + '.jpg'} />
                            <StyledCardText><StyledHeroName>{hero.name}</StyledHeroName></StyledCardText>
                        </StyledCardHeroes>)
                })}
                <ReactPaginate
                    pageCount = {pageCount}
                    pageRangeDisplayed = {5}
                    marginPagesDisplayed = {2}
                    previousLabel = {"Previos"}
                    nextLabel = {"Next"}
                    onPageChange = {changePage}
                    // containerClassName = {'paginationButtons'}
                    // previousClassName = {'nextBtn'}
                    // nextLinkClassName = {'nextBtn'}
                    // disabledClassName = {'paginationDisabled'}
                    // activeClassName = {'paginationActive'}
                />
            </StyledBoard>
        )

}