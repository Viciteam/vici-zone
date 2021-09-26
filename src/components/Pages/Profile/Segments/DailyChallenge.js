import './../../../styles/profiles.css';
import React from 'react';

import ChallengeList from './ChallengeList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

class DailyChallenge extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showContent: false,
            contentStatus: false,
            isOpenClass: 'close_content',
            diconbrace: faChevronDown
        }

        this.showInfo = this.showInfo.bind(this);
    }

    showInfo() {

        if(this.state.contentStatus == false){
            this.setState({ contentStatus : true })
            this.setState({ isOpenClass : 'close_content' })
            this.setState({ diconbrace : faChevronUp })
        } else {
            this.setState({ contentStatus : false })
            this.setState({ isOpenClass : 'open_content' })
            this.setState({ diconbrace : faChevronDown })
        }

        console.log(this.state.contentStatus);
        // this.setState({ showContent : true })
    }

    render () {
        return (
            <div className={"sr-item daily_goals " + (this.state.contentStatus ? 'open_content' : 'close_content')}>
                <div className="sri-title">
                    <div class="dtitle">Daily Goals</div>
                    <div class="dcloseicon" onClick={this.showInfo}><FontAwesomeIcon icon={this.state.diconbrace} /></div>
                </div>
                <div className={"sri_content"}> 
                    <div class="sri_inner">
                        <div class="dicon">
                            <img src="/img/cursor.png"/>
                        </div>
                        <div class="dcontent">
                            <h2>Healthy Spirits!</h2>
                            <div class="ddesc">Drink at least 8 glasses of water per day</div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <div class="dprogressvalue">&nbsp;</div>
                        <div class="dvaltext">7/8</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DailyChallenge