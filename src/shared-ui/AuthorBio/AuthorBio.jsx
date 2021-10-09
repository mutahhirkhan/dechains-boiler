import React, { useContext } from "react";
import authorImg from "./../../assets/img/user.png";
import "./AuthorBio.scss";
import { BlogContext } from "../../BlogContext/BlogContext";
import { showTempImgFromBaseURL } from "../../utils/helper";

const AuthorBio = () => {
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he

    return (
        <div className="author-bio">
            <div className="bio-center ">
                <div className="bio-image">
                    <img className="preview-author-img" src={showTempImgFromBaseURL(blogState.authorImage, ".preview-author-img") ?? authorImg} />
                </div>
                <div className="bio-content">
                    <h1>{blogState.authorName ?? "Add author "}</h1>
                    <p>{blogState.AuthorBio ?? "Add author bio from previous page"}  </p>
                </div>
            </div>
        </div>
    );
};

export default AuthorBio;
