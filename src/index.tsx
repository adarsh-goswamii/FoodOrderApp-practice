import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import PizzaCard from './components/PizzaCard';
import CardContainer from './components/CardContainer';
import FoodContainer from './components/FoodContainer';
import StateContext, { StateContextProvider } from './store/state-context';
import Footer from './components/Footer';
import Drawer from './components/Drawer';
import Overlay from './components/Overlay';
import OrderCard from './components/OrderCard';

import PIZZA from './resources/italianpizza.jpg'

const Index: React.FC<{}> = () => {
  const context= useContext(StateContext);
  return (
    <StateContextProvider>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <Overlay></Overlay>
        <Drawer />
        <OrderCard />
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
    </StateContextProvider>
  )
}

ReactDOM.render(<Index/>,document.getElementById('root'));
