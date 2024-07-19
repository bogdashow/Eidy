import React from 'react';
import ScrollToTop from '../components/ScrollToTop'
import { HashLink } from 'react-router-hash-link';


import Hero from '../components/Hero';
import KeyFutures from '../components/KeyFutures'
import ScreenApp from '../components/ScreenApp';
import Benefits from '../components/Benefits';
import ShowCase from '../components/ShowCase';
import Supporter from '../components/Supporter';


function Home() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <KeyFutures />
      <ScreenApp />
      <Benefits />
      <ShowCase />
      <Supporter />
    </>
  );
}

export default Home;