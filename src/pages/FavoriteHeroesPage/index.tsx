import React from 'react'
import { Route } from 'react-router-dom'
import { ListHeroesFavorite } from '../../components/listHeroes/listHeroesFavorite'
import { endPoints } from '../../router'



export const FavoriteHeroesPage: React.FC = () => {
  return (
      <ListHeroesFavorite/>
  )
}