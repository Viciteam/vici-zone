import './../../../styles/profiles.css';
import React from 'react';

import ChallengeList from './ChallengeList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

class OngoingChallenge extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showContent: false,
            contentStatus: true,
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
            <div className={"sr-item ongoing_challenge " + (this.state.contentStatus ? 'open_content' : 'close_content')}>
                <div className="sri-title">
                    <div class="dtitle">Ongoing Challenges</div>
                    <div class="dcloseicon" onClick={this.showInfo}><FontAwesomeIcon icon={this.state.diconbrace} /></div>
                </div>
                <div className={"sri_content " + (this.props.showContent ? 'open_content' : 'close_content')}> 
                    <div class="sri_inner dlistitem">
                        <div class="dicon">
                            <img src="/img/purple_thrp.png"/>
                        </div>
                        <div class="dcontent">
                            <h2>Run Run Run!</h2>
                            <div class="ddesc">Win by being the one who ran the longest in a week!</div>
                        </div>
                    </div>
                    <div class="sri_inner dlistitem">
                        <div class="dicon">
                            <img src="/img/purple_thrp.png"/>
                        </div>
                        <div class="dcontent">
                            <h2>Muscle Man</h2>
                            <div class="ddesc">How many weights can you carry?</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OngoingChallenge