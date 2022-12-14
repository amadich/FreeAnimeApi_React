import React, { Component } from "react";
export default class Ul_title extends Component {
   render() {
      return(
         <ul>
            <a href="#homeup"><li id="home_btn">Home</li> </a>
            <a href="https://www.github.com/amadich"><li>Our Discord Server</li> </a>
            <a href="https://www.github.com/amadich"><li>Github</li></a>
            <li id="cis_btn">Create An Issue</li>
         </ul>
      )
   }
}