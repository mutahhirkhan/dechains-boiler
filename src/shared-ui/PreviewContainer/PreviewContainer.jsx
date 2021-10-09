import React, { useContext, useState, useEffect } from "react";
import { BlogContext } from "../../BlogContext/BlogContext";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import AuthorBio from "../AuthorBio/AuthorBio";
import { Button } from "antd";
import { showTempImgFromBaseURL } from "../../utils/helper";
import { createMarkup } from "../../utils/powerFunctions";

const PreviewContainer = ({ setIsCreateVisible }) => {
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he
    // cont [tempBanner, setTempBanner] = useState(null)
    console.log(blogState);
    useEffect(() => {
        // console.log(blogState.blogBanner);
        Object.keys(blogState.blogBanner).length && showTempImgFromBaseURL(blogState.blogBanner, ".preview-banner");
    }, []);
    return (
        <div className="container">
            <div className="banner">
                <img className="preview-banner" src={require("./../../assets/img/job-banner.png")} alt="" width={"100%"} height={"70%"} />
            </div>
            <div className="time">{new Date().toLocaleDateString("default", { month: "long", day: "numeric", year: "numeric" })}</div>
            <div className="content-wrapper">
                <div className="heading title">
                    <h1> {blogState?.blogTitle ?? "Blog title here"}</h1>
                </div>
                <div className="heading sub-title">
                    <p>{blogState?.blogSubTitle ?? "Blog subtitle here"}</p>
                </div>
                <br />
                <br />
                {!blogState?.blogDescription ? (
                    <div className="heading description">
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, nihil expedita quis excepturi eum sit facere
                        porro error officiis deleniti mollitia adipisci illum iste eos provident hic harum atque temporibus quaerat nobis ea
                        ex enim? Ab fugiat ex saepe a iusto aut, ducimus adipisci facere ipsa similique. Itaque, eius dolorem.
                    </div>
                ) : (
                    <div className="heading description" dangerouslySetInnerHTML={createMarkup(blogState?.blogDescription)}></div>
                )}
            </div>
            <div className="carousel">
                <ImageCarousel />
                <AuthorBio />
                <div className="edit-post-blog-btns">
                    <Button className="edit-blog-btn" onClick={() => setIsCreateVisible(true)} type="default">
                        Edit
                    </Button>
                    <Button type="primary">Post</Button>
                </div>
            </div>
        </div>
    );
};

export default PreviewContainer;
