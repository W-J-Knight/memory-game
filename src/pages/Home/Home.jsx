import React from 'react'
import { useGlobalContext } from '../../context/cardDeckContext'
const Home = () => {
  const {name} = useGlobalContext()
  return (
  <>
    <h1>Home</h1>
    <p>{name}</p>
  </>
  )
}

export default Home