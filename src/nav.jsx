import React, { Component } from "react";
import './css/nav.css';
import Nav_title from './components/nav_title';
export default class nav extends Component {
   render() {
      return(
         <nav id="homeup">
               <Nav_title />
         </nav>
      )
   }
}