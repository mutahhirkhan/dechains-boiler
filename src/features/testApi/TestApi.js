import React, { useState } from "react";
import { Drawer, Button, Tabs, Space } from "antd";
import Info from '../../app-ui/ProfileFeatures/Info/Info';
import PersonalProfile from '../../app-ui/ProfileFeatures/PersonalProfile/PersonalProfile';
import Notes from '../../app-ui/ProfileFeatures/Notes/Notes';
import Flags from '../../app-ui/ProfileFeatures/Flags/Flags';
import Stats from '../../app-ui/ProfileFeatures/Stats/Stats';
import Settings from '../../app-ui/ProfileFeatures/Settings/Settings';
import ActivityHistory from '../../app-ui/ProfileFeatures/ActivityHistory/ActivityHistory';

function TestApi() {
    const [visible, setVisible] = useState(false);
    const [size, setSize] = useState();
    const { TabPane } = Tabs;
    const showLargeDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <div>
                <Button type="primary" onClick={showLargeDrawer}>
                    Open
                </Button>
            </div>
            <Drawer
                title={`${size} Drawer`}
                placement="right"
                size="large"
                onClose={onClose}
                visible={visible}
                width={736}
                // footer={<div>xvbkdjbvksdfhbvksud</div>}
                closeIcon={<p>X</p>}
            >
                <Tabs defaultActiveKey="1" onChange={()=>{console.log("ON CHANGED ")}}>
                    <TabPane tab="Info" key="1">
                        <Info/>
                    </TabPane>
                    <TabPane tab="Personal profile" key="2">
                      <PersonalProfile/>
                    </TabPane>
                    <TabPane tab="Notes" key="3">
                      <Notes/>
                    </TabPane>
                    <TabPane tab="Flags" key="4">
                        <Flags/>
                    </TabPane>
                    <TabPane tab="Stats" key="5">
                        <Stats/>
                    </TabPane>
                    <TabPane tab="Settings" key="6">
                        <Settings/>
                    </TabPane>
                    <TabPane tab="Activity history" key="7">
                        <ActivityHistory/>
                    </TabPane>
                </Tabs>
            </Drawer>
        </>
    );
}
export default TestApi;
