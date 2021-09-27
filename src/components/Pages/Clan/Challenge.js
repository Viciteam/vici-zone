import './../../styles/profiles.css';
import React from 'react';

import BreadCrumbs from './BreadCrumbs'

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
                                            <div className="cc-list">
                                                <div className="cc-list-inner">
                                                    <div className="nochallenge">No Challenges have been created yet.</div>
                                                    <div className="nochallengenomessage">Create a new challenge for your clan</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dc-right">
                                        <div className="dcr-inner">
                                            <button className="newchallenge">New Challenge</button>
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

export default Challenge