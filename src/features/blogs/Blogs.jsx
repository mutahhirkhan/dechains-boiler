import React, { useState, useEffect } from "react";
import { Table } from "antd"
import ListTable from "./ListTable";
import BlogHeader from './BlogHeader';
import BlogProvider from "../../BlogContext/BlogContext";


const Blogs = () => {
  const [selectedBlogs, setSelectedBlogs] = useState(null);
  return (
    <BlogProvider>
      <BlogHeader selectedBlogs={selectedBlogs} />
      <ListTable selectedBlogs={selectedBlogs} handleSelectedBlogs={setSelectedBlogs} />
    </BlogProvider>
  );
};

export default Blogs;
