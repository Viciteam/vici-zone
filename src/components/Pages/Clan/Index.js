import './../../styles/profiles.css';
import React, { useState, useContext } from 'react';

import BreadCrumbs from './BreadCrumbs'
import ClanInfo from './ClanInfo'
import Leaderboard from './Components/Leaderboard';
import Badge from './Components/Badge';
import ClanMembers from './Components/ClanMembers';
import UserLevel from './Components/UserLevel';
import Newsfeed from '../Components/Newsfeed';
import { JoinContext } from './JoinedContext';

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo,
        }
    }
    static contextType = JoinContext;

    render () {

        const {isJoined, joinedUser} = this.context;

        return (
            <div className="clan-inner container mx-auto mt-20">
                <div className="main-content">
                    <div className="clan-home">
                        <div className="cc-inner">
                            <div className="dbreadcrumbs">
                                <BreadCrumbs active="home"  />
                            </div>
                            <div className="dcontent">
                                <div className="dcontentinner">
                                    <ClanInfo />
                                    {
                                        isJoined ?
                                        <div className="dinfostats">
                                            <div className="creator">
                                                <div className="dimage"><img src="/img/user_main.jpg"/></div>
                                                <div className="dname">Joined 10/06/2021</div>
                                            </div>
                                            <div className="rank">Rank 1</div>
                                            <div className="role">Role <span>Member</span></div>
                                        </div>
                                        :
                                        <div className="dinfostats">
                                            <div className="creator">
                                                <div className="dimage"><img src="/img/user_main.jpg"/></div>
                                                <div className="dname">Creator</div>
                                            </div>
                                            <div className="rank">Rank/Level --</div>
                                            <div className="role">Role <span>Leader</span></div>
                                        </div>
                                    }
                                    <div className="ddetails">
                                        <div className="dd-inner">
                                            <div className="dd-left">
                                                <div className="dd-left-inner">
                                                    <div className="ddl-item">
                                                        <div className="ddl-item-inner">
                                                            {
                                                                isJoined ?
                                                                <Badge />
                                                                :
                                                                <div>
                                                                    <h4>Clan Badges</h4>
                                                                    <div className="ddesc">You do not have an achievement game for badges. Enable archivement game in your clan to create badges.</div>
                                                                </div>
                                                            }
                                                            
                                                        </div>
                                                        <div className="timeline-inner">
                                                            <div className="tm-onmind">
                                                                <div className="om-inner">
                                                                    <div className="dprofpic">
                                                                        <img src="/img/user_main.jpg"/>
                                                                    </div>
                                                                    <div className="dtextarea">
                                                                        <textarea placeholder="Write Something.."></textarea>
                                                                    </div>
                                                                    <div className="doptions">
                                                                        <div className="leftops">
                                                                            <div className="ditmone">
                                                                                <img src="/img/addimage.png"/>
                                                                            </div>
                                                                            <div className="ditmone">
                                                                                <img src="/img/clip.png"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="rightops">
                                                                            <div className="ditmone">
                                                                                <img src="/img/send.png"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dtimelineinfo">
                                                            {
                                                                isJoined ?
                                                                <Newsfeed />
                                                                :
                                                                <div className="dt-info">
                                                                    <div className="dnomessage">Newsfeed</div>
                                                                    <div className="dnosubmessage">Nothing to see here. Let's post something</div>
                                                                </div>
                                                            }
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dd-right">
                                                <UserLevel />
                                                {
                                                    isJoined ?
                                                    <div>
                                                        <Leaderboard />
                                                        <ClanMembers />
                                                    </div>
                                                    :
                                                    <div className="dd-right-inner">
                                                        <div className="achievement-game">
                                                            <h3>Enable Achievement Game</h3>
                                                            <div className="ddescinfo">Create achievement system to your clan members! Learn more about it <strong>here</strong></div>
                                                            <div className="dachievename">
                                                                <button>Achievement Game</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index