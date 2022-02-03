import './../../styles/profiles.css';
import React from 'react';

import BreadCrumbs from './BreadCrumbs'
import ClanInfo from './ClanInfo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

class Members extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo
        }
    }

    render () {
        return (
            <div className="clan-inner container mx-auto mt-20">
                <div className="main-content">
                    <div className="clan-members">
                        <div className="cc-inner">
                            <div className="dbreadcrumbs">
                                <BreadCrumbs active="members"  />
                            </div>
                            <div className="dcontent">
                                <div className="dcontentinner">
                                    <ClanInfo />
                                    <div className="ddetails">
                                        <div className="dd-inner">
                                            <div className="infobase">
                                                <div className="topinfo">
                                                    <div className="tp-left">
                                                        <strong>Members</strong> • 1
                                                    </div>
                                                    <div className="tp-right">
                                                        <button className="dinvitefriends"><span>+</span> invite friends</button>
                                                    </div>
                                                </div>
                                                <div className="memberlist">
                                                    <div className="mem-inner">
                                                        <div className="searchpart">
                                                            <div className="dsearch">
                                                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                                                <input type="text" name="" id="" placeholder="Find a member" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mem-list-items">
                                                        <div className="mem-list-item">
                                                            <div className="dprofimage">
                                                                <div className="dprofimage-inner">
                                                                    <img alt="" src="/img/user_main.jpg"/>
                                                                </div>
                                                            </div>
                                                            <div className="dinfo">
                                                                <div className="dmem-info"><strong>Daphne Winter</strong> <span>•</span> Rank 1</div>
                                                                <div className="role">Leader</div>
                                                            </div>
                                                            <div className="dops">
                                                                <div className="dops-inner">
                                                                    <FontAwesomeIcon icon={faEllipsisV} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mem-list-item">
                                                            <div className="dprofimage">
                                                                <div className="dprofimage-inner">
                                                                    <img alt="" src="/img/user_main.jpg"/>
                                                                </div>
                                                            </div>
                                                            <div className="dinfo">
                                                                <div className="dmem-info"><strong>Daphne Winter</strong> <span>•</span> Rank 1</div>
                                                                <div className="role">Leader</div>
                                                            </div>
                                                            <div className="dops">
                                                                <div className="dops-inner">
                                                                    <FontAwesomeIcon icon={faEllipsisV} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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

export default Members