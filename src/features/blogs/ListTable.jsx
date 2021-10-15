
import React, { useState, useEffect } from 'react'
import { Table, Tag, Space, Modal } from 'antd';
import defaultImage from "../../assets/img/user.png"
import { getBlogLists } from './thunk';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectBlogsList } from './slice';
import moment from "moment";
import PreviewStaticContent from '../../shared-ui/PreviewContainer/PreviewStaticContent';





const ListTable = ({ selectedBlogs, handleSelectedBlogs }) => {
    const dispatch = useAppDispatch();
    const blogList = useAppSelector(selectBlogsList)
    const [visible, setVisible] = useState(false);
    console.log("blogList", blogList)

    const handlePreviewBlog = () => {
        console.log("handlePreviewBlog")
        setVisible(true)
    }

    useEffect(() => {
        dispatch(getBlogLists());
    }, [])
    useEffect(() => {
        console.log("selectedRowKeys", selectedBlogs)

    }, [selectedBlogs])

    const columns = [
        {
            title: 'Author Name',
            dataIndex: 'blogAuthor',
            key: 'blogAuthor',
            render: (data, record) => {
                return (
                    <div className="user-name-cell">
                        <span className="username">
                            <img
                                className="user-image"
                                src={data?.photo || defaultImage}
                            />
                            <p
                                className="pointer"
                            // onClick={() =>
                            //   handleProfile(record)
                            // }
                            >
                                {data.name}
                            </p>
                        </span>
                    </div>
                );
            },
        },
        {
            title: 'Blog Name',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Category',
            dataIndex: 'blogsCategory',
            key: 'blogsCategory',
            render: (text, record) => (
                <Space size="middle">
                    <p>{text.title}</p>
                </Space>
            )
        },
        {
            title: 'Subcategory',
            dataIndex: 'blogsSubCategory',
            key: 'tags',
            render: (text, record) => (
                <Space size="middle">
                    <p>{text.title}</p>
                </Space>
            )
        },
        {
            title: 'Date posted',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text, record) => (
                <Space size="middle">
                    <p>{moment(text).format("DD/MM/YYYY")}</p>
                    <img
                        src={require("../../assets/img/icons/eye.svg")}
                        onClick={() => handlePreviewBlog()}
                        fontSize="20px"
                    />
                </Space>
            ),
        },
    ];
    return (
        <>
            <div className="list-table-main">
                <Table
                    rowKey="id"
                    rowSelection={{
                        type: "checkbox",
                        selectedRowKeys: selectedBlogs,
                        onChange: (selectedRowKeys) => {
                            console.log(selectedRowKeys)
                            handleSelectedBlogs(selectedRowKeys);
                        },
                        onSelectNone: () => {
                            console.log("onSelectNone")
                            handleSelectedBlogs(null);
                        },
                    }}
                    pagination={false}
                    columns={columns}
                    dataSource={blogList}
                />
            </div>
            <Modal
                title="Modal 1000px width"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                {/* <PreviewStaticContent /> */}
            </Modal>
        </>
    )
}

export default ListTable
