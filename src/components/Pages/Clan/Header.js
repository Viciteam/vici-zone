import './../../styles/profiles.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faBell, faSearch } from '@fortawesome/free-solid-svg-icons'

class ClanHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo
        }
    }

    render () {
        return (
            <div className="clan-header-main">
                <div className="clan-header-inner">
                    <div className="dlogo">
                        <img src="/img/vici.png"/>
                    </div>
                    <div className="ditems">
                        <div className="dmenu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Explore</a></li>
                                <li><a href="#">Learn</a></li>
                            </ul>
                        </div>
                        <div className="dsearch">
                            <span><FontAwesomeIcon icon={faSearch} /></span>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="dnotif">
                            <div className="dmessage"><FontAwesomeIcon icon={faComment} /><span className="notifone">&nbsp;</span></div>
                            <div className="dalarm"><FontAwesomeIcon icon={faBell} /><span className="notifone">&nbsp;</span></div>
                        </div>
                        <div className="dproficon">
                            <img src="/img/user_main.jpg"/>
                        </div>
                        <div className="dcoin">
                            <div className="dcoin-inner"><img src="/img/coil.png"/> <span>250</span></div>
                        </div>
                        <div className="dmedals">
                            <div className="dmedal-inner"><img src="/img/medal.png"/> <span>10</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClanHeader