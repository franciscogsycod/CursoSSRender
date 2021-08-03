import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const App = () => {
  const API = 'http://localhost:3000/initialState/';
  const initialState = useInitialState(API);
  if(initialState.length === 0) {
    return (
    <>
      <h1>Loading...</h1>
    </>
    )
  }
  <>
  <html lang="en">
    <div className="App">
      <Header />
      <Search />
        {initialState.mylist.length > 0 &&
          <Categories title="Mi Lista">
            <Carousel>
              {initialState.mylist.map(item =>
                <CarouselItem key={item.id} {...item} />
              )}
            </Carousel>
          </Categories>
        }
      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {initialState.originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  </html>
  </>
}

export default App;