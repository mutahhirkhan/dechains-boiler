import React, { useContext, useState, useEffect } from "react";
import { BlogContext } from "../../BlogContext/BlogContext";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import AuthorBio from "../AuthorBio/AuthorBio";
import { Button } from "antd";
import { showTempImgFromBaseURL, isObjectFilled } from "../../utils/helper";
import { createMarkup } from "../../utils/powerFunctions";

const PreviewContainer = ({ setIsCreateVisible }) => {
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he
    const [tempBanner, setTempBanner] = useState(null);
    console.log(blogActions);

    // cont [tempBanner, setTempBanner] = useState(null)
    // console.log(blogState);
    useEffect(() => {
        isObjectFilled(blogState.bannerPhoto) && showTempImgFromBaseURL(blogState.bannerPhoto, setTempBanner);
    }, []);
    return (
        <div className="container">
            <div className="banner">
                <img
                    className="preview-banner"
                    src={tempBanner ?? require("./../../assets/img/job-banner.png")}
                    alt=""
                    width={"100%"}
                    height={"70%"}
                />
            </div>
            <div className="time">{new Date().toLocaleDateString("default", { month: "long", day: "numeric", year: "numeric" })}</div>
            <div className="content-wrapper">
                <div className="heading title">
                    <h1> {blogState?.title ?? "Blog title here"}</h1>
                </div>
                <div className="heading sub-title">
                    <p>{blogState?.content ?? "Blog subtitle here"}</p>
                </div>
                <br />
                <br />
                {!blogState?.description ? (
                    <div className="heading description">
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, nihil expedita quis excepturi eum sit facere
                        porro error officiis deleniti mollitia adipisci illum iste eos provident hic harum atque temporibus quaerat nobis ea
                        ex enim? Ab fugiat ex saepe a iusto aut, ducimus adipisci facere ipsa similique. Itaque, eius dolorem.
                    </div>
                ) : (
                    <div className="heading description" dangerouslySetInnerHTML={createMarkup(blogState?.description)}></div>
                )}
            </div>
            <div className="carousel">
                <ImageCarousel />
                <AuthorBio />
                <div className="edit-post-blog-btns">
                    <Button className="edit-blog-btn" onClick={() => setIsCreateVisible(true)} type="default">
                        Edit
                    </Button>
                    <Button loading={blogState.postAuthorLoading} type="primary" onClick={() => blogActions.uploadBannerAndImages()}>
                        Post
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PreviewContainer;


