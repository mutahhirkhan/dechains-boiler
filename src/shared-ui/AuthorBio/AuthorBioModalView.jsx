
import React, { useContext, useState, useEffect } from "react";
import defaultAuthorImg from "./../../assets/img/user.png";
import "./AuthorBio.scss";

const AuthorBioModalView = ({ authorDetails }) => {
    console.log("authorDetails", authorDetails)
    const { name, displayPhoto, aboutMe } = authorDetails
    return (
        <div className="author-bio">
            <div className="bio-center ">
                <div className="bio-image">
                    <img className="preview-author-img" src={displayPhoto ?? defaultAuthorImg} />
                </div>
                <div className="bio-content">
                    <h1>{name ?? "Add author "}</h1>
                    <p>{aboutMe ?? "Add author bio from previous page"}  </p>
                </div>
            </div>
        </div>
    )
}

export default AuthorBioModalView
