import React, { useContext, useState, useEffect } from "react";
import defaultAuthorImg from "./../../assets/img/user.png";
import "./AuthorBio.scss";
import { BlogContext } from "../../BlogContext/BlogContext";
import { showTempImgFromBaseURL } from "../../utils/helper";

const AuthorBio = () => {
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he
    const [authorImage, setAuthorImage] = useState(null)
    useEffect(() => {
        if(blogState.authorImage) {
            showTempImgFromBaseURL(blogState.authorImage, setAuthorImage)
        }
    },[])
    

    return (
        <div className="author-bio">
            <div className="bio-center ">
                <div className="bio-image">
                    <img className="preview-author-img" src={authorImage ?? defaultAuthorImg} />
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
