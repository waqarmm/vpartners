import React from "react";
import "../Catalogs/Catlog.css";
import ImgOne from "../Catalogs/assets/PVCFloor.jpg";
import ImgTwo from "../Catalogs/assets/PVCMarble.jpg";
import ImgThree from "../Catalogs/assets/PVCWall.jpg";

const Cards = () => {
  const handleClick = () => {
    // Redirect to the next page when the card is clicked
    window.location.href = "/next-page-url";
  };

  return (
    <div className="container">
      <div className="catlog-container">
        <div className="catlog-heading">
          <p>Transforming Spaces with Timeless Elegance</p>
        </div>
        <div className="card-container">
          <div className="cards-box">
            {/* Card 1 */}
            <div className="first-card" onClick={handleClick}>
              <img src={ImgTwo} alt="Image 1" />
              <p> PVC Marble Sheets →</p>
            </div>
            <div className="cards-right">
              {/* Card 2 */}
              <div className="card-two" onClick={handleClick}>
                <img src={ImgThree} alt="Image 2" />
                <p>PVC Wall Panels for Every Vision →</p>
              </div>

              {/* Card 3 */}
              <div className="card-three" onClick={handleClick}>
                <img src={ImgOne} alt="Image 3" />
                <p>PVC Flooring, Where Comfort Meets Durability →</p>
              </div>

              {/* Card 4 */}
              {/* <div className="card-four" onClick={handleClick}>
                <img src={ImgOne} alt="Image 4" />
                <p>PVC Solutions: Innovating for Your Every Need  →</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
