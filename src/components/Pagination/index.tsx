import React, {useMemo, FC, memo} from 'react'
import {StyledNavigation,StyledPageLink,StyledPageItem,StyledPagination} from './styled'

interface IPaginationProps {
    heroesPerPage: number
    heroesCount: number
    paginate: Function
    selectedPage: number
}

export const Pagination: FC<IPaginationProps> = memo(({heroesCount, heroesPerPage, paginate, selectedPage}) => {
    const amountPage = useMemo(() => Math.ceil(heroesCount / heroesPerPage), [heroesCount,heroesPerPage]);
    const isSelected = (page:number) => {
      return selectedPage === page
    }


    return (
        <StyledNavigation>
            <StyledPagination>
                {Array.from({length: amountPage}).map((item, index)=>
                    <StyledPageItem key = {index}>
                        <StyledPageLink isSelected = {isSelected(index+1)} onClick = {()=>paginate(index+1)}>{index + 1}</StyledPageLink>
                    </StyledPageItem>
                )}
            </StyledPagination>
        </StyledNavigation>
    )
})