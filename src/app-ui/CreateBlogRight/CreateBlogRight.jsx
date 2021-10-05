import React from 'react'
import CreateBlogBanner from '../../shared-ui/CreateBlogBanner/CreateBlogBanner';
import CreateBlogDetailsForm from '../../shared-ui/CreateBlogDetailsForm/CreateBlogDetailsForm';

const CreateBlogRight = () => {
    return (
        <div className="create-blog-right-contianer">
            <CreateBlogBanner/>
            <CreateBlogDetailsForm/>
        </div>
    )
}

export default CreateBlogRight
