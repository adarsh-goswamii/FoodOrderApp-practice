import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Card from './components/Card';

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Banner></Banner>
    <Card></Card>
  </React.StrictMode>,
  document.getElementById('root')
);
