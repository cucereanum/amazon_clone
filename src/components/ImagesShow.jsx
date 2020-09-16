import React from "react";
import { Carousel } from "react-responsive-carousel";

const ImagesShow = () => {
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      showThumbs={false}
      showStatus={false}
    >
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/prime/Gateway/new_ft_hero_vanv2._CB430308772_.jpg"
        alt=""
      />
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/AmazonMusic/2020/Marketing/012020_AMHD_Q1/UK-EN_012020_AMUHD_Q1promo_OS_GW_Hero_D_3000x1200_2X_CV2A._CB426601587_.jpg"
        alt=""
      />
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/AMAZON-FASHION/2020/FASHION/CML/JULY/04_MERCH/MEN/GW_HERO_DESKTOP_3000x1200._CB428700682_.jpg"
        alt=""
      />
    </Carousel>
  );
};

export default ImagesShow;
