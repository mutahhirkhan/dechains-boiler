import React, { useState, useEffect } from "react";
import { Table } from "antd"
import ListTable from "./ListTable";
import BlogHeader from './BlogHeader';

const Blogs = () => {
  const [selectedBlogs, setSelectedBlogs] = useState(null);
  return (
    <div>
      <BlogHeader selectedBlogs={selectedBlogs} />
      <ListTable selectedBlogs={selectedBlogs} handleSelectedBlogs={setSelectedBlogs} />
    </div>
  );
};

export default Blogs;
