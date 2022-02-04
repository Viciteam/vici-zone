import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Challenge from '../Profile/Segments/Challenge'
import Timeline from '../Profile/Segments/Timeline'
// import { useHistory } from 'react-router-dom';

class MainContent extends React.Component {
    render () {
        return (
            <div>
                <div className="w-full h-40 border border-bottom_gray rounded-xl p-6 flex justify-center justify-items-center">
                    <div className="text-vici_secondary_text text-sm mt-10">Log in to Vici to access other features.
                        <button className="font-bold text-vici_secondary ml-1"> Login</button>
                    </div>
                </div>
                <div className="middle-part mt-12">
                    <div className="mp-inner">
                        <Tabs defaultIndex={0}>
                            <TabList className="tabtitles">
                                <Tab>Challenges & Achievements</Tab>
                                <Tab>Timeline</Tab>
                            </TabList>

                            <TabPanel>
                                <Challenge />
                            </TabPanel>
                            <TabPanel>
                                <Timeline />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContent