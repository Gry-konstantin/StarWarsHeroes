import React from 'react'
import { StyledMainTemplate, StyledMainTemplateContent } from './styled'
import { Header } from '../../components/Header'
import { Switch,Route } from 'react-router-dom'

import { endPoints } from '../../router'

import { Stars } from '../../components/StarrySky'
import {MainPage} from '../../pages/MainPage'
import { FavoriteHeroesPage } from '../../pages/FavoriteHeroesPage'



export const MainTemplate: React.FC = () => {
  return (
    <StyledMainTemplate>
      <Stars />
      <StyledMainTemplateContent>
        <Header />
        <Switch>
          <Route path={endPoints.main} exact>
            <MainPage/>
          </Route>
          <Route path={endPoints.favoriteHeroes} exact>
            <FavoriteHeroesPage/>
          </Route>
        </Switch>
      </StyledMainTemplateContent>
    </StyledMainTemplate>
  )
}
