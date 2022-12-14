import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
export default class nav_title extends Component {
   render() {
     // animataion texteur !
     setTimeout(() => {
         let t = document.getElementById("title_nav");
         let text = 'Anime-Images API'
         let i = 0;
         let type = () => {
         if (i < text.length) {
               t.innerHTML += text.charAt(i);
               i++;
               setTimeout(type, 100)
         }
  
         }
         type();
      },500)

  
      // fin animation
      return(
         
         <h1 id="title_nav"></h1>
         
         
      )
      
   }
}