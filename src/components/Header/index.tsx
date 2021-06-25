import React from 'react'
import { StyledHeader ,StyledTitleYellow,StyledLogo, StyledSubtitle,StyledNavigation} from './styled/StyledHeader'
import { Link, Route, Switch } from 'react-router-dom'
import { endPoints } from '../../router'

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <StyledTitleYellow >star</StyledTitleYellow>
        <StyledSubtitle >A VISUAL GUIDE</StyledSubtitle>
        <StyledTitleYellow >wars</StyledTitleYellow>
      </StyledLogo>
      <Switch>
        <StyledNavigation>
          <Route path={endPoints.main} exact>
            <div>Characters / &nbsp;</div>
            <Link to={endPoints.favoriteHeroes}>Favorite characters</Link>
          </Route>
          <Route path={endPoints.favoriteHeroes} exact>
          <Link to={endPoints.main}>Characters / &nbsp;</Link>
            <div>Favorite characters</div>
          </Route>
        </StyledNavigation>
      </Switch>
    </StyledHeader>
  )
}
