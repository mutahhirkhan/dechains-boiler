import React from 'react'
import authorImg from  "./../../assets/img/user.png"
import "./AuthorBio.scss"

const AuthorBio = () => {
    return (
        <div className="author-bio">
        <div className="bio-center ">
            <div className="bio-image">
                <img className="preview-author-img"  src={authorImg} />
            </div>
            <div className="bio-content">
                <h1>Amy Adams</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis hic, possimus, voluptatibus commodi cupiditate voluptate vero, aperiam vitae nobis perspiciatis vel voluptatem nemo! Commodi eligendi dignissimos sapiente facilis natus dolores nisi repellat officiis,</p>
            </div>
        </div>
        </div>
    )
}

export default AuthorBio
