import React from 'react'
import { Table, Tag, Space } from 'antd';
import defaultImage from "../../assets/img/user.png"
const columns = [
    {
        title: 'Author Name',
        dataIndex: 'name',
        key: 'name',
        render: (data, record) => {
            return (
                <div className="user-name-cell">
                    <span className="username">
                        <img
                            // onClick={() => handleProfile(record)}
                            className="user-image"
                            src={data?.profilePhoto || defaultImage}
                        />
                        <p
                            className="pointer"
                        // onClick={() =>
                        //   handleProfile(record)
                        // }
                        >
                            {/* {`${data?.user?.firstName} ${data?.user?.lastName}`} */}
                            Starfish
                        </p>
                    </span>
                </div>
            );
        },
    },
    {
        title: 'Blog Name',
        dataIndex: 'blogTitle',
        key: 'blogTitle',
    },
    {
        title: 'Category',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Subcategory',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Date posted',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];


const data = [
    {
        key: '1',
        name: 'John Brown',
        blogTitle: "lorem Epsom bh kya cheese hai",
        address: 'New',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        blogTitle: "lorem Epsom bh kya cheese hai",
        address: 'London',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        blogTitle: "lorem Epsom bh kya cheese hai",
        address: 'Sidney',
        tags: ['cool', 'teacher'],
    },
];
const ListTable = () => {
    return (
        <div className="list-table-main">
            <Table
                rowSelection={{
                    type: "checkbox",
                }}
                pagination={false}
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}

export default ListTable
