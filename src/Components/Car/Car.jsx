import "./Car.css";
import img from "../Images/dp.jpg";
import { useState } from "react";

export default function Car() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (className) => {
    if (className === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="car">
      <div className="carArrow_left">
        <img
          src={img}
          alt=""
          className="left CImg"
          onClick={() => handleClick("left")}
        />
      </div>
      <div className="carim" slideIndex={slideIndex}>
        <div className="slide">
          <div className="ImgContainer">
            <img
              src="https://www.maqaami.com/public/uploads/all/bqc0aQxgjT9lC9tZP76VJlHViE0HDMNaKyit1NfD.png"
              alt=""
              className="styledImg"
            />
          </div>
        </div>

        {/*  */}

        <div className="slide">
          <div className="ImgContainer">
            <img
              src="https://www.maqaami.com/public/uploads/all/bqc0aQxgjT9lC9tZP76VJlHViE0HDMNaKyit1NfD.png"
              alt=""
              className="styledImg"
            />
          </div>
        </div>
        {/*  */}
        <div className="slide">
          <div className="ImgContainer">
            <img
              src="https://www.maqaami.com/public/uploads/all/bqc0aQxgjT9lC9tZP76VJlHViE0HDMNaKyit1NfD.png"
              alt=""
              className="styledImg"
            />
          </div>
        </div>
        {/*  */}

        <div className="slide">
          <div className="ImgContainer">
            <img
              src="https://www.maqaami.com/public/uploads/all/bqc0aQxgjT9lC9tZP76VJlHViE0HDMNaKyit1NfD.png"
              alt=""
              className="styledImg"
            />
          </div>
        </div>
      </div>
      <div className="carArrow_right">
        <img
          src={img}
          alt=""
          className="right CImg"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
