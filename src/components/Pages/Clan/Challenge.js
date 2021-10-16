import './../../styles/profiles.css';
import React from 'react';

import BreadCrumbs from './BreadCrumbs'
import NewChallenge from './Components/NewChallenge';
import DailyChallenges from './Components/DailyChallenges';

class Challenge extends React.Component {
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
                    <div className="clan-challenges">
                        <div className="cc-inner">
                            <div className="dbreadcrumbs">
                                <BreadCrumbs active="challenges"  />
                            </div>
                            <div className="dcontent">
                                <div className="dcontentinner">
                                    <div className="dc-left">
                                        <div className="dcl-inner">
                                            <h3>Clan Challenges</h3>
                                            <div className="dsubtitle">Challenges created in the clan</div>
                                            {/* <div className="cc-list">
                                                <div className="cc-list-inner">
                                                    <div className="nochallenge">No Challenges have been created yet.</div>
                                                    <div className="nochallengenomessage">Create a new challenge for your clan</div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="dc-right">
                                        <div className="dcr-inner flex justify-end">
                                            <button className="bg-btn_bgcolor px-6 py-3 font-bold rounded-md text-white_color">New Challenge</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <div>
                                        <NewChallenge />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div>
                                        <DailyChallenges />
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

export default Challenge