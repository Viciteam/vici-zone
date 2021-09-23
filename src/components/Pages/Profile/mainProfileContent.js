import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import './../../styles/profiles.css';
import SideProfile from './Segments/SideProfile'

import WallofAchievements from './Segments/WallofAchievements'
import TopActivities from './Segments/TopActivities'
import Challenge from './Segments/Challenge'
import Timeline from './Segments/Timeline'


class mainProfileContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userinfo: {
                name: 'Daphne Winter',
                level: 11,
                clan: 'Fitness Clan',
                stats: {
                    gold: 250,
                    purple: 0,
                    copper: 0
                },
                social_info: {
                    followers: 50,
                    following: 2,
                    friends: 98
                }
            }
        }
    }

    render(){
        const user_information = this.state.userinfo;
        return(
            <div className="container mx-auto mt-20">
                <div className="main-content">
                    <div className="profile-part">
                        <SideProfile uinfo={user_information} />
                    </div>
                    <div className="content-part">
                        <div className="content-inner">
                            <div className="timeline">
                                <div className="top-part">
                                    <div className="wall-of-achievement">
                                        <WallofAchievements />
                                    </div>
                                    <div className="top-activities">
                                        <TopActivities />
                                    </div>
                                    <br className="clear"/>
                                </div>
                                <div className="middle-part">
                                    <div className="mp-inner">
                                        <Tabs defaultIndex={1}>
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
                            <div className="srightnotif">
                                <div className="sr-inner">
                                    <div className="sr-item">
                                        <div className="sri-title">this is the title</div>
                                        <div className="sri_content">this is the content</div>
                                    </div>
                                    <div className="sr-item">
                                        <div className="sri-title">this is the title</div>
                                        <div className="sri_content">this is the content</div>
                                    </div>
                                </div>
                            </div>
                            <br className="clear"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default mainProfileContent
