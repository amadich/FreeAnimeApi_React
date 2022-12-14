import react from 'react';
import ReactDom from 'react-dom';
import './css/main.css';
import Header from './header';
import Nav from './nav';
import Section from './section';
import Aside from './aside';
import Footer from './footer';
ReactDom.render(
   <div>
      <Header />
      <Nav />
      <Section />
      <Aside />
      <Footer />
   </div>
   ,
   document.getElementById("root")
);