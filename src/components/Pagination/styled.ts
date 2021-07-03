import styled from 'styled-components'
export const StyledNavigation = styled.nav`

`
export const StyledPagination = styled.ul`
    list-style: none;
    display: inline-block;
    padding: 0;
    margin-top: 10px;
    -moz-box-shadow: 0 2px 2px #333;
    -webkit-box-shadow: 0 2px 2px #333;
    box-shadow: 0 2px 2px #333;
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
        color: #E34E48;
        background-color: #eee;
    }
    color: #999;
    background: #fff;
    padding: 10px 15px;
    float: left;
    display: block;
    font-size: 14px;
    text-decoration: none;
    margin-left: -1px;
    border: 1px solid #ddd;
    line-height: 1.5;
`