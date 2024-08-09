// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Slider from './components/slider';
import Banner from './components/Banner';
import ComentAndBlog from './components/ComentAndBlog';

const App: React.FC = () => {
  return (
    <>
      <div className="container mx-auto w-full max-w-full px-4 ">
        <Header />
        <Nav />
        <Main />
        <Banner />
        <ComentAndBlog />
        <Slider />
      </div>
    </>
  );
}

export default App;
