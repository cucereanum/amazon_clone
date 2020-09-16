import React from "react";
import "./styles/Home.css";
import Product from "./Product";
import ImagesShow from "./ImagesShow";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <ImagesShow />

        <div className="home__row">
          <Product
            id="12314151"
            title="Logitech M220 Silent Wireless Mobile Mouse (Charcoal)"
            price={13.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51oljV8nj1L._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            id="74522351"
            title="
            Apple AirPods Pro -- Lightweight, Noise Cancellation, Water Resistant"
            price={299.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41JusTSe%2BvL._AC_SL1000_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="81239123"
            title="Fitbit FB415SRLV Versa Lite Smartwatch, Lilac/Silver"
            price={198.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61kbzeS-P7L._AC_SL1500_.jpg"
          />
          <Product
            id="912305123"
            title="Wireless Mechanical Keyboard Ergonomic, Velocifire VM02WS 104-key Full Size with Quiet Brown Switches White Backlit "
            price={93.88}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61-3yV%2BBbcL._AC_SL1200_.jpg"
          />
          <Product
            id="9123021"
            title="English Grammar in Use Book with Answers and Interactive eBook: A Self-study Reference and Practice Book for Intermediate Learners of English "
            price={47.28}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81K+KhRUkQL.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="2512304"
            title="ASUS ROG Strix XG49VQ Super Ultra-Wide HDR Gaming Monitor 49.0 inch 32:9 (3840 x 1080) 144Hz FreeSync 2 HDR"
            price={1649.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41f5ijTSAwL._AC_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
