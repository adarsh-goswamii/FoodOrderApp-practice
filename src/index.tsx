import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import PizzaCard from './components/PizzaCard';
import CardContainer from './components/CardContainer';
import FoodContainer from './components/FoodContainer';
import { StateContextProvider } from './store/state-context';
import Footer from './components/Footer';
import Drawer from './components/Drawer';

import PIZZA from './resources/italianpizza.jpg'

ReactDOM.render(
  <StateContextProvider>
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <Drawer />
      <Header></Header>
      <Banner></Banner>
      <CardContainer />
      <FoodContainer>
        <>
          <PizzaCard name='Italian Pizza' image={PIZZA} />
          <PizzaCard name='Neapolitan Pizza' image={PIZZA} />
          <PizzaCard name='California Pizza' image={PIZZA} />
        </>
      </FoodContainer>
      <Footer />
    </ div>
  </StateContextProvider>,
  document.getElementById('root')
);
