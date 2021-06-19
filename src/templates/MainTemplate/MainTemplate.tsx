import React from 'react'
import { StyledMainTemplate, StyledMainTemplateContent } from './styled'
import { Header } from '../../components/Header'
import { Link, Route, Switch } from 'react-router-dom'
import { endPoints } from '../../router'
import {Stars} from '../../components/starsOnBg'

// function func():string {
//   return ""
// }
// type f = () => void

// const fun:f = () => {return}

export const MainTemplate: React.FC = () => {
  return (
    <StyledMainTemplate>
      <Stars></Stars>
      <StyledMainTemplateContent>
        <Header/>
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
      </StyledMainTemplateContent>
    </StyledMainTemplate>
  )
}
