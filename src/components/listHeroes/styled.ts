import styled, { css } from 'styled-components'

export const StyledSearchHero = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
`

export const StyledSearchHeroInput = styled.input``

export const StyledHeart = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: none;
  opacity: 0.5;
  color: red;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  cursor: pointer;
`
export const StyledPagination = styled.div`
text-align: end;
`
export const StyledNextButton = styled.button`
`
export const StyledPrevButton = styled.button`
`
export const StyledCardHeroes = styled.div`
  :hover ${StyledHeart} {
    display: flex;
  }
  padding-top: 30px;
  width: calc(20% - 15px);
  height: 100%;
  position: relative;
`
export const StyledHeroName = styled.span`
  color: #757575;
`
export const StyledCardText = styled.div`
  width: 100%;
  background: #fff;
  padding: 16px;
  box-sizing: border-box;
  font-family: fantasy;
`

export const StyledCardHeroesImage = styled.img<{ src: string }>`
  width: 100%;
  ${({ src }) => css`
    src: ${src};
  `}
`
export const StyledBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom:40px;
`

