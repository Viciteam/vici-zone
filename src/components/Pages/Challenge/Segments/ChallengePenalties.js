import './../../../styles/challenge.css';
import React from 'react';

import Switch from "react-switch";
import ReactModal from 'react-modal';
import ReactTooltip from 'react-tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBars, faEllipsisV, faGlobeEurope, faMapMarkerAlt, faImage, faCrosshairs, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

class ChallengePenalties extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isactive: this.props.isactive
        }

        this.toogleAllowPenalty = this.toogleAllowPenalty.bind(this);
    }

    toogleAllowPenalty(){
        this.setState({allowPenalty: !this.state.allowPenalty});
    }

    render () {
        
        return (
            <div className="goal-menu-inner">
                <div className="cg-label">
                        <div className="cgl-name">Penalty</div>
                        <div className="cgl-doptions"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleAllowPenalty} checked={this.state.allowPenalty} /></div>
                    </div>
                    <div className="cg-input dactivity">
                        <div className="subheader">Add penalty if goal has not been met.</div>
                        <div className="activity-list">
                            <div className="activity-items">
                                <div className="ac-item">
                                    <div className="dleftitems">
                                        <span className="dicon"><FontAwesomeIcon icon={faBars} /></span>
                                        <span className="dtext">Drink 8 glasses of water everyday</span>
                                    </div>
                                    <div className="drightitems">
                                        <span className="doptions"><FontAwesomeIcon icon={faEllipsisV} /></span>
                                    </div>
                                </div>
                                <div className="ac-item">
                                    <div className="dleftitems">
                                        <span className="dicon"><FontAwesomeIcon icon={faBars} /></span>
                                        <span className="dtext">Drink 8 glasses of water everyday</span>
                                    </div>
                                    <div className="drightitems">
                                        <span className="doptions"><FontAwesomeIcon icon={faEllipsisV} /></span>
                                    </div>
                                </div>
                                <div className="ac-item">
                                    <div className="dleftitems">
                                        <span className="dicon"><FontAwesomeIcon icon={faBars} /></span>
                                        <span className="dtext">Drink 8 glasses of water everyday</span>
                                    </div>
                                    <div className="drightitems">
                                        <span className="doptions"><FontAwesomeIcon icon={faEllipsisV} /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="activity-add-button">
                                <div className="daddactions" onClick={() => this.addActivity()}>
                                    <span className="dicon"><FontAwesomeIcon icon={faPlus} /></span>
                                    <span className="dtext">Add penalty action</span>
                                </div>
                                <div className="daddactions" onClick={() => this.addActivity()}>
                                    <span className="dicon"><FontAwesomeIcon icon={faPlus} /></span>
                                    <span className="dtext">Add social action</span>
                                </div>
                                <div className="daddactions" onClick={() => this.addActivity()}>
                                    <span className="dicon"><FontAwesomeIcon icon={faPlus} /></span>
                                    <span className="dtext">Lose Vici tokens</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default ChallengePenalties