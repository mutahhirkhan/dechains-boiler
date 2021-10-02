import React from 'react'
import { Button } from 'antd';

const CreateBlogButton = () => {
    const handleCreateBlogCLick =  () => {
        console.log("HANDLE CREATE BUTTON CALLED")
    }
    return (
        <div className="create-btn">
            <span className="side-text"> Your Blogs</span>
            <Button onClick={handleCreateBlogCLick} type="primary">
                Create New
            </Button>
        </div >
    )
}

export default CreateBlogButton
