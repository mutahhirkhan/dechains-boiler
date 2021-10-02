import React from "react";
import { Table } from "antd"
import ListTable from "./ListTable";
import BlogHeader from './BlogHeader';

const Blogs = () => {
  return (
    <div>

      <BlogHeader />

      <ListTable />

    </div>
  );
};

export default Blogs;
