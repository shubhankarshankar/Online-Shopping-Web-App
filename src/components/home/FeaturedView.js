import React from "react";

const FeaturedView = props => {
  return (
    <div className="featured-view-wrapper">
      <div className="featured-view">
        <div className="offer-banner">
          <div className="hashtag">#elite</div>
          <div className="tag-line">all the trends you need this season</div>
          <button className="offer-avail-button">shop now</button>
        </div>
        <div className="product-banner">
          <img
            src="http://cosy.la-studioweb.com/wp-content/uploads/2017/03/m-3-slide-1-1.jpg"
            alt="watch"
            className="product-banner-img"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedView;
