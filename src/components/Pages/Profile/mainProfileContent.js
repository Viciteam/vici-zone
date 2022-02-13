import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
// import 'react-tabs/style/react-tabs.css';

import './../../styles/profiles.css';
import './../../styles/calendar-sidebar.css'
import SideProfile from './Segments/SideProfile'

import WallofAchievements from './Segments/WallofAchievements'
import TopActivities from './Segments/TopActivities'
import Challenge from './Segments/Challenge'
import Timeline from './Segments/Timeline'
// import DailyChallenge from './Segments/DailyChallenge'
// import OngoingChallenge from './Segments/OngoingChallenge'
// import PopularClans from '../Clan/PopularClans'
import WhoToFollow from '../Clan/WhoToFollow';
import PersonalAgenda from '../Clan/PersonalAgenda';
import AllChallengesSidebar from '../Clan/AllChallengesSidebar';
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
            openLeftScroll: false,
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.boxRef = React.createRef();
    }

    handleOpenModal () {
        this.setState({ openModal: true });
    }

    handleCloseModal () {
        this.setState({ openModal: false });
    }

   scroll = (scrollOffset) => {
       console.log(scrollOffset)
        this.boxRef.current.scrollLeft += scrollOffset;
        if(scrollOffset == 160){
            this.setState({ openLeftScroll: true });
        }else{
            this.setState({ openLeftScroll: false });
        }
        
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
                                        <div className="relative">
                                            <div className="text-2xl font-bold">Good morning, start your day with:</div>
                                            <div ref={this.boxRef} className="flex w-full overflow-x-hidden">
                                                <div className="flex">
                                                    <div className="w-36 bg-primary_color h-52 flex justify-center rounded-lg p-3 shadow-vici">
                                                        <div className="text-center mt-12 cursor-pointer">
                                                            <div className="flex justify-center"><img src="/img/new_challenge.png" /></div>
                                                            <div className="text-sm text-white_color">New Challenge</div>
                                                        </div>
                                                    </div>
                                                    <div className="w-36 h-52 flex justify-center rounded-lg mx-3 p-3 shadow-vici">
                                                        <div className="text-center mt-12 cursor-pointer">
                                                            <div className="flex justify-center"><img src="/img/bi_sun-fill.png" /></div>
                                                            <div className="text-sm mt-3 font-bold text-vici_secondary">Make my day</div>
                                                        </div>
                                                    </div>

                                                    <div className="w-36 h-52 flex justify-center rounded-lg shadow-vici">
                                                        <img src="/img/dummy/Frame 1693.png" className="w-34" />
                                                    </div>
                                                    <div className="w-36 h-52 flex justify-center rounded-lg mx-3 shadow-vici">
                                                        <img src="/img/dummy/Frame 294.png" className="w-34"/>
                                                    </div>
                                                    <div className="w-36 h-52 flex justify-center rounded-lg shadow-vici">
                                                        <img src="/img/dummy/Frame 1692.png" className="w-34"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute right-0 top-32 -mr-3 z-10">
                                                <button onClick={() => this.scroll(160)} className="bg-white_color p-1 rounded-full text-vici_secondary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {
                                                this.state.openLeftScroll &&
                                                <div className="absolute left-0 top-32 -ml-3 z-10">
                                                    <button onClick={() => this.scroll(-160)} className="bg-white_color p-1 rounded-full text-vici_secondary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            }
                                            {/* <div className="wall-of-achievement">
                                                <WallofAchievements />
                                            </div>
                                            <div className="top-activities">
                                                <TopActivities />
                                            </div>
                                            <br className="clear"/> */}
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
                                    {/* <WhoToFollow /> */}
                                    <PersonalAgenda />
                                    <AllChallengesSidebar />
                                    <div className="bg-white_color p-3 rounded-xl shadow-vici mt-6">
                                        <Calendar />
                                    </div>
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
