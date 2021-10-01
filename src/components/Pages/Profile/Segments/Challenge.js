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
                <div className="dchallemgeheader">
                    <div className="dc-inner">
                        <div className="dci-left">
                            <button>Join a Challenge</button>
                        </div>
                        <div className="dci-right">
                            <button>New Challenge</button>
                        </div>
                    </div>
                </div>
                <div className="dchallenge-list">
                    <div className="dch-inner">
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