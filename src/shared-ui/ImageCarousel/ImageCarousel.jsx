import React, { useEffect, useContext, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BlogContext } from "../../BlogContext/BlogContext";
import { showTempImgFromBaseURL } from "../../utils/helper";

const ImageCarousel = () => {
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he
    const [images, setImages] = useState([]);
    const org = images?.[0];
    const org1 = images?.[1];
    console.log(org, org1);
    useEffect(() => {
        blogState.blogImgaes.length && setImages(blogState.blogImgaes);
    }, []);
    return (
        <div>
            <Carousel infiniteLoop={true} className="main-slide">
                {images.map((img, index) => (
                    <div>
                        <img className={`img${index}`} src={img?.thumbUrl} height="500px" width="200px" />
                    </div>
                ))}
                {/* <div>
                    <img src={require("./../../assets/tempImages/image1.jpeg")} height="500px" width="200px" />
                </div>
                <div>
                    <img src={require("./../../assets/tempImages/image3.jpeg")} height="500px" width="200px" />
                </div>
                <div>
                    <img src={require("./../../assets/tempImages/image4.jpeg")} height="500px" width="200px" />
                </div> */}
                {/* <div>
                    <img className="org1" src={showTempImgFromBaseURL(org?.originFileObj, `.org1`)} height="500px" width="200px" />
                </div>
                <div>
                    <img className="org2" src={showTempImgFromBaseURL(org1?.originFileObj, `.org2`)} height="500px" width="200px" />
                </div> */}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;
