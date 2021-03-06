import React from 'react'
import Banner from '../components/Banner'
import './HomeScreen.css'
import Nav from '../components/Nav'
import requests from '../backend/requests'
import Row from '../components/Row'

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <Nav />
      <Banner />

      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixoriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horrer Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen
