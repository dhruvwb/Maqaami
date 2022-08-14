import React from "react";
import "./header.css";
import img from "../Images/dp.jpg";

export default function Header() {
  return (
    <div className="H1">
      <div className="himg">
        <img
          src="https://www.maqaami.com/public/uploads/all/SJ1ligDWaFAxOlGWu88ZyFqoW6OqJqymDO6H4dfY.png"
          alt="img"
          srcset=""
          className="Himg"
        />
      </div>
      <div className="h2">
        <img
          src="https://www.maqaami.com/public/assets/img/flags/ae.svg"
          alt=""
          srcset=""
          className="h2img"
        />
        <p>
          Deliver to <br />
          <b>Dubai</b>
        </p>
      </div>
      <div className="h3">
        <input type="text" className="h3i" placeholder="I am shopping for..." />
        <img src={img} alt="" />
      </div>
      <div className="h4">
        <img src={img} alt="" />
        <p>login</p>
        {/*  */}
        <img src={img} alt="" />
        <p>sign up</p>
      </div>
    </div>
  );
}
