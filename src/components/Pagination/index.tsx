import React,{useState, useMemo, FC} from 'react'
import {StyledNavigation,StyledPageLink,StyledPageItem,StyledPagination} from './styled'

interface IPaginationProps {
    heroesPerPage: number
    heroesCount: number
    paginate: Function
}

export const Pagination: FC<IPaginationProps> = ({heroesCount, heroesPerPage, paginate}) => {
    const amountPage = useMemo(() => Math.ceil(heroesCount / heroesPerPage), [heroesCount,heroesPerPage]);

    return (
    <StyledNavigation>
        <StyledPagination>
            {Array.from({length: amountPage}).map((item, index)=>
                <StyledPageItem key = {index}>
                    <StyledPageLink onClick = {()=>paginate(index+1)}>{index + 1}</StyledPageLink>
                </StyledPageItem>
            )}
        </StyledPagination>
    </StyledNavigation>)
}