import React, { Component } from "react";
import './css/header.css';
import Ul_title from './components/Ul_title';
export default class header extends Component {
   render() {
      return(
         <header>
            <Ul_title />
         </header>
      )
   }
}