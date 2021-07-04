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
  display:flex;
  justify-content: flex-end;
  padding-top: 30px;
`
export const StyledNextButton = styled.button`
  :disabled{opacity:0.6;}
  color: #fbea56;
  background: #333;
  padding: 3px 10px;
  font-size:15px;
`
export const StyledPrevButton = styled.button`
  :disabled{opacity:0.6;}
  color: #fbea56;
  background: #333;
  padding: 3px 10px;
  font-size:15px;
`
export const StyledCardHeroes = styled.div`
  :nth-child(5n){
    padding-right:0px
  }
  :nth-child(1){padding-top:10px;}
  :nth-child(2){padding-top:10px;}
  :nth-child(3){padding-top:10px;}
  :nth-child(4){padding-top:10px;}
  :nth-child(5){padding-top:10px;}
  :hover ${StyledHeart} {
    display: flex;
  }
  padding: 30px 15px 0 0;
  width: calc(20% - 12px);
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
  padding-bottom:40px;
`

