import React,{useEffect, useState} from "react";
import StatusAccordian from "../../shared-ui/StatusAccordian/StatusAccordian";
import CategoryAccordian from "../../shared-ui/CategoryAccordian/CategoryAccordian";
import TagsAccordian from "../../shared-ui/TagsAccordian/TagsAccordian";
import { withRouter,  } from 'react-router';
import { useAppSelector } from "../../store/hooks";
import { selectBlogsList } from '../../features/blogs/slice';

const CreateBlogLeft = ({location}) => {
    const [selectedBlog, setSelectedBlog] = useState(null)
    const selectAllBlogs = useAppSelector(selectBlogsList)

    useEffect(() => {
        if(location.state && selectAllBlogs.length) {
            setSelectedBlog(selectAllBlogs.find(blog => blog.id === location.state ))
        }
        // else history.goBack()
    },[])
    // useEffect(() => {
    //     console.log("selectedBlog", selectedBlog)
    // },[selectedBlog])
    return (
        <div>
            <StatusAccordian selectedBlog={selectedBlog}/>
            <CategoryAccordian selectedBlog={selectedBlog} />
            <TagsAccordian selectedBlog={selectedBlog} />
        </div>
    );
};

export default withRouter(CreateBlogLeft);
