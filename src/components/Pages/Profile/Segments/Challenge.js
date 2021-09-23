import './../../../styles/profiles.css';
import React from 'react';

import ChallengeList from './ChallengeList'

class Challenge extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo
        }
    }

    render () {
        return (
            <div className="challenges-inner">
                <div class="dchallemgeheader">
                    <div class="dc-inner">
                        <div class="dci-left">
                            <button>Join a Challenge</button>
                        </div>
                        <div class="dci-right">
                            <button>New Challenge</button>
                        </div>
                    </div>
                </div>
                <div class="dchallenge-list">
                    <div class="dch-inner">
                        <ChallengeList />
                        <ChallengeList />
                        <ChallengeList />
                    </div>
                </div>
            </div>
        )
    }
}

export default Challenge