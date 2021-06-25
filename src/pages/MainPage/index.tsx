import React from 'react'
import { Route } from 'react-router-dom'
import { ListHeroes } from '../../components/listHeroes'
import { endPoints } from '../../router'



export const MainPage: React.FC = () => {
  return (
    <ListHeroes />
  )
}