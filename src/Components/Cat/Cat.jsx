import React from "react";
import "./cat.css";
import img from "../Images/dp.jpg";

export default function Cat() {
  return (
    <div className="C">
      <div className="c1">
        <b>ALL CATEGORIES</b>
        <img src={img} alt="" />
      </div>
      <div className="c2">
        <ul className="h2u">
          <li className="h2l">ELECTRONICS</li>
          <li className="h2l">FASHION</li>
          <li className="h2l">MEN</li>
          <li className="h2l">WOMEN</li>
          <li className="h2l">BEAUTY</li>
          <li className="h2l">KITCHEN</li>
          <li className="h2l">
            BATH & <br /> BODY
          </li>
          <li className="h2l">SPORTS</li>
          <li className="h2l">TOYS</li>
          <li className="h2l">VIDEO GAMES</li>
        </ul>
      </div>
    </div>
  );
}
