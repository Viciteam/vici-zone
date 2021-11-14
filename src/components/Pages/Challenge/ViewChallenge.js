import './../../styles/challenge.css';
import React from 'react';

import WatchRewards from './Segments/WatchRewards'
import Comments from './Segments/Comments'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEye, faTimes } from '@fortawesome/free-solid-svg-icons'


class ViewChallenge extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo,
            isWatching: false,
            isWatchingText: 'Watch Challenge'
        }

        this.watchChallenge = this.watchChallenge.bind(this);
    }

    watchChallenge(){
        
        this.setState({ isWatching: !this.state.isWatching });

        if(this.state.isWatching){
            this.setState({ isWatchingText: 'Watch Challenge'});
        } else {
            this.setState({ isWatchingText: 'Stop Watching'});
        }

        

        // this.state.isWatching = !this.state.isWatching;
    }

    render () {
        
        return (
            <div className="challenges-page-inner">
                <div className="dview-left">
                    <div className="dv-left-inner">
                        <div className="dvl-main-sidebar">
                            <div className="main-sidebar-inner">
                                <div className="dshageimage">
                                    <img src="/img/share.png" alt="" />
                                </div>
                                <h2>Morning Routine</h2>
                                <div className="subtitle">Goal</div>
                                <div className="ms-main-image">
                                    <img src="/img/watch_main.png" alt="" />
                                </div>
                                <div className="ms-sub-title">A morning routine challenge for those who want to start their day with a healthy mindset!</div>
                                <div className="dinfodetails">
                                    <div className="dinfoitem">
                                        <div className="din-left">CREATED BY:</div>
                                        <div className="din-right"><span className="dimagepart"><img src="/img/dummy/1.png" alt="" /></span><span className="dtextpart">John S. White</span></div>
                                    </div>
                                    <div className="dinfoitem">
                                        <div className="din-left">PEOPLE JOINED:</div>
                                        <div className="din-right"><img src="/img/dummy/Group.png" alt="" /></div>
                                    </div>
                                    <div className="dinfoitem">
                                        <div className="din-left">DURATION:</div>
                                        <div className="din-right">Daily</div>
                                    </div>
                                    <div className="dinfoitem">
                                        <div className="din-left">INSTRUCTIONS:</div>
                                        <div className="din-right">Do the completed set of actions daily</div>
                                    </div>
                                </div>
                                <div className="ms-join-button">
                                    <button>Join Challenge</button>
                                </div>
                                <div className="ms-button-options">
                                    <div className="ms-button-optleft">
                                        <button onClick={() => this.watchChallenge()}><span className="diconbase"><FontAwesomeIcon icon={faEye} /></span><span className="dtextbase">{this.state.isWatchingText}</span></button>
                                    </div>
                                    <div className="ms-button-optright">
                                        <button>Invite Friends</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dvl-main-sidebar">
                            <WatchRewards />
                        </div>
                        <div className="dvl-main-sidebar">
                            <div className="dvl-invite-link">
                                <h2>Invite link</h2>
                                <div className="dlinkfield">
                                    <div className="dlinkinput" >
                                        <input type="text" value="https://invitelink" style={{backgroundImage: 'url(/img/link.png)'}}/>
                                    </div>
                                    <div className="dlinkbutton">
                                        <button>Copy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dview-right">
                    <div className="dview-right-inner">
                        <div className="dvr-notif-bar">
                            <span className="dvr-notif-eye"><FontAwesomeIcon icon={faEye} /></span>
                            <span className="dvr-notif-text">You are watching the challenge with 230 other people.</span>
                            <span className="dvr-notif-close"><FontAwesomeIcon icon={faTimes} /></span>
                        </div>
                        <div className="dvr-item dvr-main-action">
                            <div className="dvr-action-inner">
                                <h2>Actions</h2>
                                <div className="dvr-item-content">
                                    <ul>
                                        <li>
                                            <div className="dradiobutton"><input type="radio" name="" id="" /></div>
                                            <div className="dtextlist">Run 1 km - Due today</div>
                                            <div className="ddoaction">Do Action</div>
                                        </li>
                                        <li>
                                            <div className="dradiobutton"><input type="radio" name="" id="" /></div>
                                            <div className="dtextlist">Lorem Ipsum another action - Due today</div>
                                            <div className="ddoaction">Do Action</div>
                                        </li>
                                        <li>
                                            <div className="dradiobutton"><input type="radio" name="" id="" /></div>
                                            <div className="dtextlist">Eat a healthy breakfast - Due today</div>
                                            <div className="ddoaction">Do Action</div>
                                        </li>
                                        <li>
                                            <div className="dradiobutton"><input type="radio" name="" id="" /></div>
                                            <div className="dtextlist">Eat a healthy breakfast - Due today</div>
                                            <div className="ddoaction">Do Action</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="dvr-item dvr-main-progress">
                            <div className="dleftpart">
                                <img src="/img/user_main.jpg" alt="" />
                            </div>
                            <div className="drightpart">
                                <div className="dchartpart">
                                    <div className="donut-chart-block"> 
                                        <div className="donut-chart" style={{backgroundColor: this.state.selectedColor+"70"}}>
                                            <div id="part1" className="portion-block"><div className="circle" style={{backgroundColor: this.state.selectedColor}}></div></div>
                                            <p className="center"><span className="dnum">0</span><br /><span className="dsubtext">Actions</span></p>        
                                        </div>
                                    </div>
                                </div>
                                <div className="dprogressinfo">
                                    <h3>23% progess</h3>
                                    <div className="dpi-join-button">Join Challenge</div>
                                </div>
                            </div>
                        </div>
                        <div className="dvr-item dvr-main-participants-progress">
                            <div className="dvr-participants-inner">
                                <h2><span className="dheadertitle">Participant Progress</span><span className="dviewall">View All ></span></h2>
                                <div className="dvr-item-content">
                                    <div className="dvr-participants-list">
                                        <div className="dvr-participants-header">
                                            <div className="dvr-title-participants">Participant</div>
                                            <div className="dvr-title-clan">Clan</div>
                                            <div className="dvr-title-progress">Progress</div>
                                        </div>
                                        <div className="dvr-participant-items">
                                            <div className="dvr-participant dvr-done-item">
                                                <div className="dvr-item-participant">
                                                    <div className="dvr-participant-photo">
                                                        <img src="/img/prof_icon.png" alt="" />
                                                    </div>
                                                    <div className="dvr-participant-name">Lorem Ipsum</div>
                                                </div>
                                                <div className="dvr-item-clan">Sample Clan</div>
                                                <div className="dvr-item-progress">
                                                    <div className="dprogressbar">
                                                        <div className="dprogressbase">
                                                            <div className="dprogressvalues" style={{width: 100 + '%'}}>&nbsp;</div>
                                                        </div>
                                                    </div>
                                                    <div className="dvectorpagrt"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                                </div>
                                            </div>
                                            <div className="dvr-participant dvr-failed-item">
                                                <div className="dvr-item-participant">
                                                    <div className="dvr-participant-photo">
                                                        <img src="/img/prof_icon.png" alt="" />
                                                    </div>
                                                    <div className="dvr-participant-name">Lorem Ipsum</div>
                                                </div>
                                                <div className="dvr-item-clan">Sample Clan</div>
                                                <div className="dvr-item-progress">
                                                    <div className="dprogressbar">
                                                        <div className="dprogressbase">
                                                            <div className="dprogressvalues" style={{width: 75 + '%'}}>&nbsp;</div>
                                                        </div>
                                                    </div>
                                                    <div className="dvectorpagrt">failed</div>
                                                </div>
                                            </div>
                                            <div className="dvr-participant">
                                                <div className="dvr-item-participant">
                                                    <div className="dvr-participant-photo">
                                                        <img src="/img/prof_icon.png" alt="" />
                                                    </div>
                                                    <div className="dvr-participant-name">Lorem Ipsum</div>
                                                </div>
                                                <div className="dvr-item-clan">Sample Clan</div>
                                                <div className="dvr-item-progress">
                                                    <div className="dprogressbar">
                                                        <div className="dprogressbase">
                                                            <div className="dprogressvalues" style={{width: 75 + '%'}}>&nbsp;</div>
                                                        </div>
                                                    </div>
                                                    <div className="dvectorpagrt">2/5</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dvr-item dvr-main-comments no-shadow">
                            <Comments />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewChallenge