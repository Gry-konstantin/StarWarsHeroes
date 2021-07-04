import styled from 'styled-components'
export const StyledNavigation = styled.nav`
    display:inline-block;
    height:27px;
`
export const StyledPagination = styled.ul`
    list-style: none;
    display: inline-block;
    padding: 0;
    margin: 0px;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
`
export const StyledPageItem = styled.li`
    display: inline;
    text-align: center;
`
export const StyledPageLink = styled.a`
    :hover {
        color: #333;
        background-color: #eee;
    }
    color: #fbea56;
    background: #333;
    padding: 5px 10px;
    float: left;
    display: block;
    font-size: 10px;
    text-decoration: none;
    margin-left: -1px;
    border: 1px solid #000;
    line-height: 1.5;
`