import CatCard from "../Categories/CatCard";
import "./heading.css";

export const Heading = () => {
  return (
    <div className="Heading">
      <h2>Electronic Products at cheapest price</h2>
      <div className="Product">
        <div className="ProdLeft">
          {/* <div className="HeadMain"> */}
          <div className="Pspan">
            <span>Categories</span>
          </div>
          <hr />

          <ul className="PLul">
            <b>All Categories</b>
            <br />
            <b>Electronics</b>

            <li className="PLli">Mobiles</li>
            <li className="PLli">Laptop and accessories</li>
            <li className="PLli">Video games</li>
            <li className="PLli">Televisions </li>
            <li className="PLli">Headphones and Earphones</li>
            <li className="PLli">Power Banks</li>
            <li className="PLli">Speakers</li>
            <li className="PLli">Wearables</li>
            <li className="PLli">Camera photo & videos</li>
            <li className="PLli">Lightbulbs</li>
            <li className="PLli">Tablet and accessories</li>
          </ul>
          <div className="PriceRange">
            <b className="Pspan">Price Range</b>
            <br />
            <br />
            <hr />
          </div>
        </div>
        {/* </div> */}

        <div className="ProdRight">
          {/* This is the small div */}
          <div className="PRdiv">
            <small className="PRsmall">Home /</small>
            <small className="PRsmall">All Categories / </small>
            <small>
              <b>"Electronics"</b>{" "}
            </small>
          </div>
          {/* This is the dropdown part */}
          <div className="PRdd">
            <div>
              <span className="Pspan">Electronics</span>
            </div>

            <div className="DropDown">
              <div>
                <span>Brands</span>
                <br />
                <select name="All Brands" id="">
                  <option value="">All Brands</option>
                  <option value="">Nike</option>
                  <option value="">Reebok</option>
                  <option value="">Apple</option>
                  <option value="">Samsung</option>
                  <option value="">Fem</option>
                </select>
              </div>
              {/*This is the second dropdown */}
              <div>
                <span>Sort by</span>
                <br />
                <select name="Newest" id="">
                  <option value="">Newest</option>
                  <option value="">Oldest</option>
                  <option value="">Price from lown to high </option>
                  <option value="">Price from high to low</option>
                </select>
              </div>
            </div>
          </div>
          <CatCard />
          <div className="HeadingCircle">
            <ul className="Headingul">
              <li className="Headingli">1</li>
              <li className="Headingli">2</li>
              <li className="Headingli">3</li>
              <li className="Headingli">4</li>
              <li className="Headingli">5</li>
              <li className="Headingli">6</li>
              <li className="Headingli">7</li>
              <li className="Headingli">8</li>
              <li className="Headingli">9</li>
              <li className="Headingli">10</li>
              <li className="Headingli">...</li>
              <li className="Headingli">21</li>
              <li className="Headingli">22</li>
              <li className="Headingli">23</li>
              <li className="Headingli">24</li>
            </ul>
          </div>

          <div className="Other">
            <b className="Otherb">Other Electronic Related Products:</b>
            {/* <br /> */}
            {/* <br /> */}
            <small>
              Headphone- Wireless And Bluetooth Headphones- Buy Earbuds-
              Mobiles- Laptop & Accessories- Headphones and Earphones- Buy
              Speaker Wired and Bluetooth- Mini Bluetooth Speaker- Power Bank-
              Wireless Bluetooth Speaker- Camera, Wifi Camera, Night Vission
              Camera- Dongle- Television & Accessories- Tablet & Accessories
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
