import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageCarouselModalView = ({blogImages}) => {
    console.log("blogImages",blogImages)
    return (
        <div>
            <Carousel infiniteLoop={true} className="main-slide">
                {blogImages.map((img, index) => (
                    <div>
                        <img className={`img${index}`} src={img?.photo} height="500px" width="200px" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageCarouselModalView
