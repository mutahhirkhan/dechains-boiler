import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = () => {
    return (
        <div>
            <Carousel infiniteLoop={true} className="main-slide">
                <div>
                    <img  src={require("./../../assets/tempImages/image1.jpeg")} height="500px" width="200px" />
                </div>
                <div>
                    <img src={require("./../../assets/tempImages/image2.jpeg")} height="500px" width="200px" />
                </div>
                <div>
                    <img src={require("./../../assets/tempImages/image3.jpeg")} height="500px" width="200px" />
                </div>
                <div>
                    <img src={require("./../../assets/tempImages/image4.jpeg")} height="500px" width="200px" />
                </div>
            </Carousel>
        </div>
    );
};

export default ImageCarousel;
