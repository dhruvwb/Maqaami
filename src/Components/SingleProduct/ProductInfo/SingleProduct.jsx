import "./singleproduct.css";
import img from "./dp.jpg";
import { Desc } from "../Desc/Desc";
import TopSell from "../TopSellingP/TopSell";

const SingleProduct = () => {
  return (
    <div className="ProductMain">
      <div className="ProductSec">
        <div className="LeftProdt">
          <div className="lProdtsm">
            <img
              src="https://www.maqaami.com/public/uploads/all/uQ9dMUT2YQtiu5mTlbmG6n3gu4OQEKUHlfzLjEVu.jpeg"
              alt=""
            />
            <img
              src="https://www.maqaami.com/public/uploads/all/2zx2lNQtuyUiWRnLW72mo5vqpb5bZdNhqpuHWkbs.jpeg"
              alt=""
            />
            <img
              src="https://www.maqaami.com/public/uploads/all/2zx2lNQtuyUiWRnLW72mo5vqpb5bZdNhqpuHWkbs.jpeg"
              alt=""
            />
            <img
              src="https://www.maqaami.com/public/uploads/all/uQ9dMUT2YQtiu5mTlbmG6n3gu4OQEKUHlfzLjEVu.jpeg"
              alt=""
            />
            <img
              src="https://www.maqaami.com/public/uploads/all/uQ9dMUT2YQtiu5mTlbmG6n3gu4OQEKUHlfzLjEVu.jpeg"
              alt=""
            />
          </div>
          {/* This is big img */}
          <div className="lProdtlg">
            <img
              src="https://www.maqaami.com/public/uploads/all/uQ9dMUT2YQtiu5mTlbmG6n3gu4OQEKUHlfzLjEVu.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="RightPrdt">
          <div className="RightProdtLeft">
            <span>
              TUOYE 3.6V Rechargeable Battery Electric Screwdriver Household
              Power Tool Kit with 4 Drill Bits
            </span>
            <div className="Was">
              <small>Was :</small>
              <del>
                <small>AED 80.00</small>
              </del>
            </div>
            <div className="Now">
              <small>Now :</small>
              <b>AED 1.00</b>
            </div>
            <div className="Saving">
              <small>Saving :</small>
              <b>
                AED 79.00 <span> 99% OFF</span>
              </b>
            </div>
            <div className="DeliveredBy">
              <small>
                Delivery by <b> Thu, Aug 25</b>
              </small>
            </div>
            <div className="Share">
              <small>Share :</small>
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
            </div>
          </div>
          <div className="RightProdtRight">
            <div className="Sold">
              <img
                src="https://www.maqaami.com/public/assets/img/seller.svg"
                alt=""
              />
              <small>
                Sold By <b>Maqaami</b>
              </small>
            </div>
            <div className="Soldhr">
              <hr />
            </div>
            <div className="Customer">
              <small>Customer Reviews</small>
              <i></i>
            </div>
            <div className="Advan">
              <img
                src="https://www.maqaami.com/public/assets/img/free_returns_usp.svg"
                alt=""
              />
              <div className="AdvanText">
                <small>
                  <b>FREE RETURNS</b>
                </small>
                <small>Get free returns on eligible items </small>
              </div>
            </div>
            {/* Secnod Part */}
            <div className="Advan">
              <img
                src="https://www.maqaami.com/public/assets/img/trusted_shipping_usp_v2.svg"
                alt=""
              />
              <div className="AdvanText">
                <small>
                  <b>TRUSTED SHIPPING</b>
                </small>
                <small>
                  Free shipping when you spend AED 100 and above on express
                  items
                </small>
              </div>
            </div>
            {/* Secnod Part Ends here */}
            {/* Third Part starts here */}
            <div className="Advan">
              <img
                src="https://www.maqaami.com/public/assets/img/contactless_delivery_usp.svg"
                alt=""
              />
              <div className="AdvanText">
                <small>
                  <b>CONTACTLESS DELIVERY</b>
                </small>
                <small>
                  Your delivery will be left at your door, valid on prepaid
                  orders only.
                </small>
              </div>
            </div>
            {/* Buttons Part starts here */}
            <div className="btn">
              <button className="AddToCart">ADD TO CART</button>
              <button className="AddToCart">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
      <Desc />
      <TopSell />
    </div>
  );
};

export default SingleProduct;
