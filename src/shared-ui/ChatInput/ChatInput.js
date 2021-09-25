// import React, { useState } from "react";
// import { Upload, Form } from "antd";
// import TextArea from "antd/lib/input/TextArea";
// import Button from "../Button/Buttons";

// const { Dragger } = Upload;

// const ChatInput = () => {
//   const [fileList, setFileList] = useState([]);

//   return (
//     <>
//       <div className="text-field-container">
//         <div className="text-field">
//           <Form
//             tabIndex={0}
//             // onKeyDown={(e) => enterToSend(e)}
//             // ref={chatInputFormRef}
//             // form={form}
//             // onFinish={onFinish}
//             autoComplete="off">
//             <div className="items">
//               <div className="buttons-wrapper">
//                 <div className="chat-btns-left">
//                   {/* <button
//                       onClick={() => alert("working")}
//                       className="text-field-btns">
//                       <img
//                         src={require("../../assets/images/icons/pin.svg")}
//                         alt="file"
//                       />
//                     </button> */}
//                   <Dragger
//                     className="text-field-btns"
//                     showUploadList={false}
//                     fileList={fileList}
//                     name="file"
//                     // onRemove={onRemove}
//                     // beforeUpload={beforeUpload}
//                     // onChange={(info) => {
//                     //   const { status } = info.file;
//                     //   if (status !== "uploading") {
//                     //     console.log(info.file, info.fileList);
//                     //   }
//                     //   if (status === "done") {
//                     //     message.success(
//                     //       `${info.file.name} file uploaded successfully.`
//                     //     );
//                     //   } else if (status === "error") {
//                     //     message.error(`${info.file.name} file upload failed.`);
//                     //   }
//                     // }}
//                   >
//                     <img
//                       //   src={require("../../assets/images/icons/pin.svg")}
//                       alt="file"
//                     />
//                   </Dragger>

//                   {/* <button
//                       onClick={() => alert("working")}
//                       className="text-field-btns">
//                       <img
//                         src={require("../../assets/images/icons/emoji.svg")}
//                         alt="emoji"
//                       />
//                     </button> */}
//                   <button
//                     type="button"
//                     className="text-field-btns"
//                     // onClick={toggleEmojiPicker}
//                   >
//                     <img
//                       //   src={require("../../assets/images/icons/emoji.svg")}
//                       alt="emoji"
//                     />
//                   </button>
//                 </div>
//               </div>

//               <Form.Item name="message" style={{ width: "100%" }}>
//                 <TextArea
//                   autoFocus={true}
//                   autoSize={{ minRows: 1, maxRows: 4 }}
//                   className="type-text"
//                   size="small"
//                   type="text"
//                   placeholder="Type something"
//                 />
//               </Form.Item>

//               <div className="buttons-wrapper">
//                 <div className="chat-btns-right">
//                   {/* <button
//                       onClick={() => alert("working")}
//                       className="text-field-btns">
//                       <img
//                         className="voice-icon"
//                         src={require("../../assets/images/icons/voice.svg")}
//                         alt="voice"
//                       />
//                     </button> */}
//                   {/* <button type="button" className="text-field-btns">
//                         <Popover content="coming soon">
//                           <img
//                             src={require("../../assets/images/icons/voice.svg")}
//                             alt="voice"
//                           />
//                         </Popover>
//                       </button> */}
//                   <Button htmlType="submit" className="text-field-btns">
//                     <img
//                       //   src={require("../../assets/images/icons/send.svg")}
//                       alt="send"
//                     />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </Form>
//         </div>
//       </div>
//     </>
//   );
// };
// export default ChatInput;
