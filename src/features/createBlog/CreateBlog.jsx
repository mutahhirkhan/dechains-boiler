import React,{useEffect, useContext} from "react";
import CreateBlogLeft from "../../app-ui/CreateBlogLeft/CreateBlogLeft";
import CreateBlogRight from "../../app-ui/CreateBlogRight/CreateBlogRight";
import { BlogContext } from '../../BlogContext/BlogContext';

const CreateBlog = ({setIsCreateVisible}) => {
  const { blogState, blogActions } = useContext(BlogContext); //ye as a connect function kaam krrha he
  
  useEffect(() => {
    blogActions.getCategories()
  },[])

    return (
      <div className="create-blog-container">
        <CreateBlogLeft />
        <CreateBlogRight setIsCreateVisible={setIsCreateVisible} />
      </div>
    )
};

export default CreateBlog;
