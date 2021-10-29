import React, { useState, useEffect } from "react";
import { Table, Space, Modal } from "antd";
import defaultImage from "../../assets/img/user.png";
import moment from "moment";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getApplicationsList, putApplicantCVDocument, uploadFile } from "./service";
import { jsonToQueryString } from "../../utils/helper";
import SendEmailForm from "./SendEmailForm";

const ApplicationsList = ({ queryParams, isRequestedApplications, applicationsList, setApplicationsList }) => {
    const [editCVModal, setEditCVModal] = useState(false);
    const [CVDocument, setCVDocument] = useState(null);
    const [statusId, setStatusId] = useState(null);
    const [selectedApplications, setSelectedApplications] = useState([]);

    const getFullName = (firstName, lastName) => {
        if (!firstName) {
            return " ";
        }
        return firstName + " " + lastName;
    };
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
            setCVDocument(info);
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

    const handleEditCV = (id) => {
        // uploadFile
        console.log("handleEditCV");
        setStatusId(id);
        setEditCVModal(true);
    };

    useEffect(() => {
        console.log("CVDocument", CVDocument);
    }, [CVDocument]);

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

    const handleUploadCV = async () => {
        try {
            console.log("HANDLE CV UPLOAD");
            const payload = new FormData();
            payload.append("file", CVDocument.file.originFileObj, CVDocument.file.name);
            const res = await uploadFile(payload);
            const body = {
                cvURL: res.data.url,
            };
            console.log("body", body);
            console.log("ID", statusId);
            const putSuccess = await putApplicantCVDocument({ id: statusId, body: body });
            getApplications();
            console.log("putSuccess", putSuccess);
            setEditCVModal(false);
        } catch (error) {
            console.log("error", error);
        }
    };
    const columns = [
        {
            title: "Applicant name",
            dataIndex: "applicantDetails",
            key: "blogAuthor",
            render: (data, record) => {
                return (
                    <div className="user-name-cell">
                        <span className="username">
                            <img className="user-image" src={record?.dpURL || defaultImage} />
                            <p
                                className="pointer"
                                // onClick={() =>
                                //   handleProfile(record)
                                // }
                            >
                                {getFullName(record.firstName, record.lastName)}
                            </p>
                        </span>
                    </div>
                );
            },
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "blogsCategory",
            render: (text, record) => (
                <Space size="middle">
                    <p>{text?.title}</p>
                </Space>
            ),
        },
        {
            title: "Application Posted At",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (text, record) => (
                <Space size="middle">
                    <p>{moment(record.updatedAt).format("DD/MM/YYYY")}</p>
                    {/* <img src={require("../../assets/img/icons/eye.svg")} fontSize="20px" /> */}
                </Space>
            ),
        },
        {
            title: "Download",
            dataIndex: "CVDetails",
            key: "tags",
            render: (text, record) => (
                <Space size="middle">
                    <a href={record.cvURL} download>
                        Download
                    </a>
                    {isRequestedApplications && (
                        <p style={{ cursor: "pointer", margin: "0px" }} onClick={() => handleEditCV(record.id)}>
                            Edit
                        </p>
                    )}
                </Space>
            ),
        },
    ];
    return (
        <>
            <div className="application-table-main">
                {selectedApplications.length > 0 && (
                    <div className="send-email-div">
                        <SendEmailForm selectedApplications={selectedApplications} />
                    </div>
                )}
                <Table
                    rowKey="id"
                    rowSelection={checkRowSelection(isRequestedApplications)}
                    pagination={false}
                    columns={columns}
                    dataSource={applicationsList}
                ></Table>
                <Modal
                    title="Upload CV"
                    centered
                    visible={editCVModal}
                    onOk={() => {
                        handleUploadCV();
                    }}
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
