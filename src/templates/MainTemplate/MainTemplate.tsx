import React from 'react'
import { StyledMainTemplate, StyledMainTemplateContent } from './styled'
import { Header } from '../../components/Header'
import { Route, Switch } from 'react-router-dom'
import { Stars } from '../../components/stars'
import { CardHeroes } from '../../components/cardHeroes'
import { CardHeroesFavorite } from '../../components/cardHeroes/cardHeroesFavorite'
import { endPoints } from '../../router'

// function func():string {
//   return ""
// }
// type f = () => void

// const fun:f = () => {return}

export const MainTemplate: React.FC = () => {
  return (
    <StyledMainTemplate>
      <Stars />
      <StyledMainTemplateContent>
        <Header />
        <Switch>
          <Route path={endPoints.main} exact>
            <CardHeroes />
          </Route>
          <Route path={endPoints.favoriteHeroes} exact>
            <CardHeroesFavorite />
          </Route>
        </Switch>
      </StyledMainTemplateContent>
    </StyledMainTemplate>
  )
}
