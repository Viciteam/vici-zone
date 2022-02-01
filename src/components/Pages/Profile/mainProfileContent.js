import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import './../../styles/profiles.css';
import SideProfile from './Segments/SideProfile'

import WallofAchievements from './Segments/WallofAchievements'
import TopActivities from './Segments/TopActivities'
import Challenge from './Segments/Challenge'
import Timeline from './Segments/Timeline'
// import DailyChallenge from './Segments/DailyChallenge'
// import OngoingChallenge from './Segments/OngoingChallenge'
// import PopularClans from '../Clan/PopularClans'
import WhoToFollow from '../Clan/WhoToFollow';
import Friends from '../Clan/Friends';
import auth from '../../../services/auth';
import LoginModal from '../Auth/LoginModal';

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
            },
            openModal: false,
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ openModal: true });
    }

    handleCloseModal () {
        this.setState({ openModal: false });
    }

    render(){
        const user_information = this.state.userinfo;
        return (
            <div className="container mx-auto mt-20">
                <div className="main-content">
                    <div className="profile-part pt-4">
                        <SideProfile uinfo={user_information} />
                    </div>
                    <div className="content-part">
                        <div className="content-inner">
                            <div className="timeline">
                                <div className="top-part">
                                    {
                                        auth.isAuthenticated() ? 
                                        <div>
                                            <div className="wall-of-achievement">
                                                <WallofAchievements />
                                            </div>
                                            <div className="top-activities">
                                                <TopActivities />
                                            </div>
                                            <br className="clear"/>
                                        </div>
                                        :
                                        <div>
                                            <div className='flex w-full h-36 justify-center pt-14 border border-medium_gray rounded-xl'>
                                                Log in to Vici to create and participate in challenges. <span onClick={this.handleOpenModal} className="font-bold cursor-pointer pl-1">Login</span> 
                                            </div>
                                            {this.state.openModal && <LoginModal closeModal={this.handleCloseModal } />}
                                        </div>
                                    }
                                    

                                </div>
                                <div className="middle-part">
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
                            <div className="srightnotif">
                                <div className="sr-inner">
                                    {/* <DailyChallenge />
                                    <OngoingChallenge /> */}
                                    {/* <PopularClans /> */}
                                    <WhoToFollow />
                                    <Friends />
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
