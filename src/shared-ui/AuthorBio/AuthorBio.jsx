import React, { useContext, useState, useEffect } from "react";
import defaultAuthorImg from "./../../assets/img/user.png";
import "./AuthorBio.scss";
import { BlogContext } from "../../BlogContext/BlogContext";
import { showTempImgFromBaseURL } from "../../utils/helper";

const AuthorBio = () => {
    const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he
    const [authorInfo, setAuthorInfo] = useState({ name: null, aboutMe: null, displayPhoto: null });
    useEffect(() => {
        async function getAuthor(id) {
            let { data } = await blogActions.getAuthorById(id);
            setAuthorInfo(data);
        }
        blogState.blogAuthorId && getAuthor(blogState.blogAuthorId);
    }, []);

    return (
        <div className="author-bio">
            <div className="bio-center ">
                <div className="bio-image">
                    <img className="preview-author-img" src={authorInfo.displayPhoto ?? defaultAuthorImg} />
                </div>
                <div className="bio-content">
                    <h1>{authorInfo.name ?? "Add author "}</h1>
                    <p>{authorInfo.aboutMe ?? "Add author bio from previous page"} </p>
                </div>
            </div>
        </div>
    );
};

export default AuthorBio;
