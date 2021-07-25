import React from 'react'
import { StyledStar, StyledStars } from './styled'

export const Stars = function () {
  const allStars = Array.from({ length: 8 })
  return (
    <StyledStars>
      {allStars.map((item, index) => {
        return <StyledStar key={index} index={index + 1} />
      })}
    </StyledStars>
  )
}
