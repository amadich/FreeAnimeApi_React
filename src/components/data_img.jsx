import React, { Component } from "react";
import image from '../img/chars/asia.png';
export default class data_img extends Component {
   render() {
      return(
         <div id="data">
            <img src={this.props.img} alt={this.props.alt} width={this.props.width} />
         </div>
      )
   }
}