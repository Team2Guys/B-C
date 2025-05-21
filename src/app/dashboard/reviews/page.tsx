import React from 'react'
import MainPage from './MainPage'
import { fetchReviews } from 'config/fetch'


async function  Page() {
  const  reviews=await fetchReviews()
  return (
    <MainPage reviews={reviews} />
  )
}

export default Page