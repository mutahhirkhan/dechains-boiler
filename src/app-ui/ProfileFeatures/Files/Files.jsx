import React from 'react'
import FilesTilesItems from './FilesTilesItems';


const Files = () => {
    const dummyProfileFiles = [
        {
            userName: "Name",
            filesDesc: "Any random text here for section",
        },
        {
            userName: "Name 2",
            filesDesc: "Any random text here for blogs",
        },
        {
            userName: "Name",
            filesDesc: "Any random text here for articles",
        }
    ]
    return (
        <>
            <FilesTilesItems dummyProfileFiles={dummyProfileFiles}/>
        </>
    )
}

export default Files
