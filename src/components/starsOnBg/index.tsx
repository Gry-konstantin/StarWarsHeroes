import React from 'react'
import { StyledStar, StyledStars } from './styled'

export const Stars = function Stars() {
  const allStars = Array.from({ length: 8 })
  return (
    <StyledStars>
      {allStars.map((item, index) => {
        return <StyledStar index={index + 1} />
      })}
    </StyledStars>
  )
}

// export const MainTemplate: React.FC = () => {
