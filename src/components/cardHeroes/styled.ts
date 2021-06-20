import styled,{css} from 'styled-components'


export const StyledHeart = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:black;
    display:none;
    opacity:0.5;
    color:red;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    cursor:pointer
`
export const StyledCardHeroes = styled.div`
    :hover ${StyledHeart}{
        display:flex;
    }
    width: calc(20% - 20px);
    height: 100%;
    padding: 0 10px;
    position:relative;
    
`
export const StyledCardHeroesImage = styled.img<{src:string}>`
    width:100%;
    ${({ src }) => css`
    src: ${src};
    `}
`
export const StyledBoard = styled.div`
    display:flex;
    flex-wrap: wrap;
`