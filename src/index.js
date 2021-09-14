import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import pho1 from './circle1.png';
import pho2 from './tri.png';
import pho7 from './rectangle1.png';
import pho3 from './parallelogram.png';
import pho4 from './square.png';
import pho5 from './semi.png';
import pho6 from './oval1.png';
import pho8 from './TRAPZ.png';
import pho9 from './hexagon1.png';
import pho10 from './penta.png';




ReactDOM.render(
  <>
<h1><span>Shapes</span> <span>Using </span> <span>Css</span></h1>
  <div className="con">
      <App title="Circle" val=".circle {
  height: 50px;
  width: 50px;
  background-color: #555;
  border-radius: 50%;
}" id="1" img={pho1} />
      <App title="Triangle" val=".triangle-up {
	width: 0;
	height: 0;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	border-bottom: 50px solid #555;
}" id="2"img={pho2} />
      <App title="Rectangle"
       val=".rectangle {
  height: 50px;
  width: 100px;
  background-color: #555;
}" id="3" img={pho7} />
      <App title="Square" val=".square {
  height: 50px;
  width: 50px;
  background-color: #555;
}" id="4"img={pho4} />
      <App title="Semicircle" val=".semicircle{
          height: 100px;
          width: 200px;
          border-radius: 150px 150px 0 0;
      }" id="5" img={pho5}/>
      <App title="Oval" val=".oval {
  height: 50px;
  width: 100px;
  background-color: #555;
  border-radius: 50%;
}" id="6" img={pho6}/>
      <App title="Parallelogram" val=".parallelogram {
	width: 100px;
	height: 50px;
	transform: skew(20deg);
	background: #555;
}" id="7" img={pho3}/>
      <App title="Trapezoid" val=".trapezoid {
	border-bottom: 50px solid #555;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	height: 0;
	width: 125px;
}" id="8" img={pho8}/>
      <App title="Hexagon" 
      val=" .hexagon {
        width: 100px;
        height: 55px;
        position: relative;
      
      }
      .hexagon, 
      .hexagon:before, 
      .hexagon:after {
        background:#555;
        
      }
      
      .hexagon:before,
      .hexagon:after {
        content:
        position: absolute;
        left: 22px;
        width: 57px;
        height: 57px;
        transform: rotate(145deg) skew(22.5deg);
      }
      
      .hexagon:before {
        top: -29px;
      }
      
      .hexagon:after {
        top: 27px;
      }"
       id="9"
        img={pho9}/>
      <App title="Pentagon" 
      val="   .pentagon {
        position: relative;
        width: 54px;
        box-sizing: content-box;
        border-width: 50px 18px 0;
        border-style: solid;
        border-color: red transparent;
      }
      .pentagon:before {
        content: 
        position: absolute;
        height: 0;
        width: 0;
        top: -85px;
        left: -18px;
        border-width: 0 45px 35px;
        border-style: solid;
        border-color: transparent transparent red;
      }" id="10" img={pho10}/>

      
  </ div>

</>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

