import React, { useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Nav from './components/nav/Nav.jsx';
import WallOfWins from './components/wallOfWins/WallOfWins.jsx';
import About from './components/about/About.jsx';
import MyInfo from './components/myInfo/myInfo.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Books from './components/books/Books.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <MyInfo />
      <About />
      <Portfolio />
      <Books />
      <WallOfWins />  
      <Footer />
    </>
  );
};

export default App;