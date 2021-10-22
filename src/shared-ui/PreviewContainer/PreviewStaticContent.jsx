import React from 'react';
import AuthorBio from '../AuthorBio/AuthorBio';
import { createMarkup } from "../../utils/powerFunctions";
import ImageCarouselModalView from '../ImageCarousel/ImageCarouselModalView';
import AuthorBioModalView from '../AuthorBio/AuthorBioModalView';


const PreviewStaticContent = ({ blogData, modalView = true }) => {
    console.log("MODAL VIEW", modalView)
    console.log("blogData", blogData)
    const { bannerPhoto, title, content, description, blogsPhoto, blogAuthor } = blogData
    return (

        <>
            <div className="container">
                <div className="banner">
                    <img className="preview-banner" src={bannerPhoto ?? require("./../../assets/img/job-banner.png")} alt="" width={"100%"} height={"70%"} />
                </div>
                <div className="time">{new Date().toLocaleDateString("default", { month: "long", day: "numeric", year: "numeric" })}</div>
                <div className="content-wrapper">
                    <div className="heading title">
                        <h1> {title ?? "Blog title here"}</h1>
                    </div>
                    <div className="heading sub-title">
                        <p>{content ?? "Blog subtitle here"}</p>
                    </div>
                    <br />
                    <br />
                    {!description ? (
                        <div className="heading description">
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, nihil expedita quis excepturi eum sit facere
                            porro error officiis deleniti mollitia adipisci illum iste eos provident hic harum atque temporibus quaerat nobis ea
                            ex enim? Ab fugiat ex saepe a iusto aut, ducimus adipisci facere ipsa similique. Itaque, eius dolorem.
                        </div>
                    ) : (
                        <div className="heading description" dangerouslySetInnerHTML={createMarkup(description)}></div>
                    )}
                </div>
                <div className="carousel">
                    <ImageCarouselModalView blogImages={blogsPhoto} />
                    <AuthorBioModalView authorDetails={blogAuthor} />
                </div>
            </div>
        </>
    )
}

export default PreviewStaticContent
