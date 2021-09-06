import './../../../styles/profiles.css';
import React from 'react';

// add avatar component
import Avatar from "./Avatar.jsx";

class SideProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo
        }
        this.data_initialize = this.data_initialize.bind(this);
    }

    data_initialize(){
        console.log('stats', this.state.uinfo.stats);
    }

    render () {
        const data_i = () => {
            // this.data_initialize()
            // return this.state.uinfo;
            const dstats = this.state.uinfo;

            console.log('dinfo', dstats);
        }
        const user_info = this.state.uinfo;
        return (
            <div className="sd-inner">
                { data_i() }
                <div className="main-profile">
                    <div className="header">
                        <div className="header-inner">
                            <div className="hi-left">
                                <div className="levelrate">Lvl {user_info.level}</div>
                                <div className="dshowclan">{user_info.clan}</div>
                            </div>
                            <div className="hi-right">
                                <div className="dcreatechallenge">
                                    <div className="dimage"><img src="/img/challenge_question.png"/></div>
                                    <div className="dtext">Challenge</div>
                                </div>
                            </div>
                            <br className="clear"/>
                        </div>
                    </div>
                    <div className="avatar">
                        <Avatar />
                    </div>
                    <div className="user-details">
                        <div className="ud-inner">
                            <h3>{user_info.name}</h3>
                            <div className="stats">
                                <ul>
                                    <li>
                                        <div className="dpointicon" style={{background: "#ffca28"}}>&nbsp;</div>
                                        <div className="dpointtext">250</div>
                                    </li>
                                    <li>
                                        <div className="dpointicon" style={{background: "#9b51e0"}}>&nbsp;</div>
                                        <div className="dpointtext">0</div>
                                    </li>
                                    <li>
                                        <a href="">visit store</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="dinfo">
                                <ul>
                                    {Object.keys(user_info.social_info).map( (key, item) => 
                                        <li key={key}>
                                            <div className="dnum">{user_info.social_info[key]}</div>
                                            <div className="dtext">{key}</div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideProfile