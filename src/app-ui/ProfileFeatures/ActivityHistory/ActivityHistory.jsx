import React from 'react'
import ActivityListItem from './ActivityListItem';

const ActivityHistory = () => {
    const dummyActivityList = [
        {
            title: "Any thing dummy content",
            date: "10/10/2020",
            id: 12
        },
        {
            title: "Any thing dummy content",
            date: "20/20/2020",
            id: 123
        },
        {
            title: "Any thing dummy content",
            date: "30/30/2020",
            id: 124
        }
    ]
    return (
        <>
            <ActivityListItem dummyActivityList={dummyActivityList} />
        </>
    )
}

export default ActivityHistory
