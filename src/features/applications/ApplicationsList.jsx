import React, { useState, useEffect } from "react";
import { Table, Space, Modal } from "antd";
import defaultImage from "../../assets/img/user.png";
import moment from "moment";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getApplicationsList } from "./service";
import { jsonToQueryString } from "../../utils/helper";

const ApplicationsList = ({ isRequestedApplications, setSelectedApplications, selectedApplications }) => {
    const [editCVModal, setEditCVModal] = useState(false);
    const [CVDocument, setCVDocument] = useState(null);
    const [applicationsList, setApplicationsList] = useState([]);
    const [queryParams, setqueryParams] = useState({ page: 1, limit: 10, Status: true });

    const getApplications = async () => {
        try {
            const query = jsonToQueryString(queryParams);
            const res = await getApplicationsList(query);
            setApplicationsList(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const props = {
        name: "file",
        headers: {
            authorization: "authorization-text",
        },
        onChange(info) {
            const { file } = info;
            setCVDocument(file);
            console.log("INFO", info);
            if (info.file.status !== "uploading") {
                console.log("UPLOADING", info.file, info.fileList);
            }
            if (info.file.status === "done") {
                message.success(`${info.file.name} file uploaded successfully`);
                console.log("SUCCESS", info.file, info.fileList);
            }
        },
    };

    useEffect(() => {
        getApplications();
    }, []);

    const handleEditCV = (id) => {
        console.log("record", id);
        setEditCVModal(true);
    };

    const checkRowSelection = (isRequestedApplications) => {
        if (isRequestedApplications) return false;
        else
            return {
                selectedRowKeys: selectedApplications,
                onChange: (selectedRowKeys) => {
                    setSelectedApplications(selectedRowKeys);
                },
                onSelectNone: () => {
                    setSelectedApplications(null);
                },
                hideSelectAll: false,
            };
    };
    const dummyData = [
        {
            id: "11",
            applicantDetails: {
                name: "anything",
                displayPhoto: "https://jobsmideat-dev.s3.amazonaws.com/cb27b03d-ee80-4997-aacd-8967c9fb0949-image2.jpeg",
            },
            jotTitle: "TITLE",
            location: {
                title: "blogsCategoryTITLE",
            },
            CVDetails: {
                title: "blogsSubCategory TITLE",
            },
            createdAt: "2021-10-14T10:13:29.603Z",
        },
        {
            id: "22",
            applicantDetails: {
                name: "anything",
                displayPhoto: "https://jobsmideat-dev.s3.amazonaws.com/cb27b03d-ee80-4997-aacd-8967c9fb0949-image2.jpeg",
            },
            jotTitle: "TITLE",
            location: {
                title: "blogsCategoryTITLE",
            },
            CVDetails: {
                title: "blogsSubCategory TITLE",
            },
            createdAt: "2021-10-14T10:13:29.603Z",
        },
        {
            id: "33",
            applicantDetails: {
                name: "anything",
                displayPhoto: "https://jobsmideat-dev.s3.amazonaws.com/cb27b03d-ee80-4997-aacd-8967c9fb0949-image2.jpeg",
            },
            jotTitle: "TITLE",
            location: {
                title: "blogsCategoryTITLE",
            },
            CVDetails: {
                title: "blogsSubCategory TITLE",
            },
            createdAt: "2021-10-14T10:13:29.603Z",
        },
    ];
    const columns = [
        {
            title: "Applicant name",
            dataIndex: "applicantDetails",
            key: "blogAuthor",
            render: (data, record) => {
                return (
                    <div className="user-name-cell">
                        <span className="username">
                            <img className="user-image" src={data?.displayPhoto || defaultImage} />
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
            title: "Job-title",
            dataIndex: "jotTitle",
            key: "title",
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "blogsCategory",
            render: (text, record) => (
                <Space size="middle">
                    <p>{text.title}</p>
                </Space>
            ),
        },
        {
            title: "Download",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (text, record) => (
                <Space size="middle">
                    <p>{moment(text).format("DD/MM/YYYY")}</p>
                    {/* <img src={require("../../assets/img/icons/eye.svg")} fontSize="20px" /> */}
                </Space>
            ),
        },
        {
            title: "Application Posted At",
            dataIndex: "CVDetails",
            key: "tags",
            render: (text, record) => (
                <Space size="middle">
                    <p>Download</p>
                    <p onClick={() => handleEditCV(record.id)}>Edit</p>
                </Space>
            ),
        },
    ];
    return (
        <>
            <div className="application-table-main">
                <Table
                    rowKey="id"
                    rowSelection={checkRowSelection(isRequestedApplications)}
                    pagination={false}
                    columns={columns}
                    dataSource={dummyData}
                ></Table>
                <Modal
                    title="Modal 1000px width"
                    centered
                    visible={editCVModal}
                    onOk={() => setEditCVModal(false)}
                    onCancel={() => setEditCVModal(false)}
                    width={500}
                >
                    <Upload
                        accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        multiple={false}
                        maxCount={1}
                        {...props}
                    >
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Modal>
            </div>
        </>
    );
};

export default ApplicationsList;
