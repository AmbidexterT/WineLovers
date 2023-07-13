import React from 'react';

import { AboutUs, Founder, FindUs, Footer, Gallery, Header, Intro, Awards, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Intro />
    <Founder />
    <Gallery />
    <Awards />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
