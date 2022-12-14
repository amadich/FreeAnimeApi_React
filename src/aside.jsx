import React, { Component } from "react";
import Data_img from "./components/data_img";
import './css/aside.css';
import Asia from './img/chars/asia.png';
import Akeno from './img/chars/akeno.png';
import Irina from './img/chars/irina.png';
import Koneko from './img/chars/koneko.png';
import Rias from './img/chars/rias.png';


export default class aside extends Component {

   render() {

      let num = Math.floor(Math.random() * 5);
      const info = 
      
      [
         {name : "Asia",  img: Asia, width: 350},
         {name : "Akeno",  img: Akeno,width: 250},
         {name : "Irina",  img: Irina,width: 250},
         {name : "Koneko",  img: Koneko,width: 250},
         {name : "Rias",  img: Rias,width: 250}

         
      ]

      

      return(
         <aside>
               <Data_img img={info[num].img} alt={ info[num].name } width={ info[num].width } />
         </aside>
      )
   }
}