import React from 'react'
import { StyledHeader } from './styled/StyledHeader'
import { Link, Route, Switch } from 'react-router-dom'
import { endPoints } from '../../router'

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Switch>
        <Route path={endPoints.main} exact>
          <div>PAGE 1</div>
          <Link to={endPoints.favoriteHeroes}>GO TO PAGE 2</Link>
        </Route>
        <Route path={endPoints.favoriteHeroes} exact>
          <div>Page 2</div>
          <Link to={endPoints.main}>GO TO PAGE 1</Link>
        </Route>
      </Switch>
    </StyledHeader>
  )
}
