import './../../../styles/profiles.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

class ChallengeList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo
        }
    }

    render () {
        return (
            <div class="dch-item">
                <div class="ditm-inner">
                    <div class="dchallengeheadpart">
                        <div class="dpartimage">
                            <div class="dpimageinner">
                                <img src="/img/user_main.jpg"/>
                            </div>
                        </div>
                        <div class="dheadtile">
                            <h3><span class="dusername">John Peter Doe</span> created a <span class="dactivity">Challenge for herself!</span></h3>
                            <div class="dtime">5m ago</div>
                            <div class="dtags">
                                <span>health</span>
                                <span>productibity</span>
                            </div>
                        </div>
                    </div>
                    <div class="challange_content">
                        <div class="cc_inner">
                            <div class="dimage">
                                <div class="dimg-inner">
                                    <img src="/img/cards.JPG"/>
                                </div>
                            </div>
                            <div class="dinfo">
                                <div class="dinfo-inner">
                                    <div class="dfreq">Daily</div>
                                    <div class="dtitle">Healthy Spirits!</div>
                                    <div class="ddesc">Discipline yourself to drink water more ofter. Begin a healthy life with a small step</div>
                                    <div class="dstatus">
                                        <span>Current milestone:</span> 40 Glasses
                                    </div>
                                    <div class="dprogress">
                                        <div class="douter">
                                            <div class="dorange">&nbsp;</div>
                                        </div>
                                    </div>
                                    {/* <div class="dpeople">
                                        list of people
                                    </div> */}
                                    <div class="dbuttons">
                                        <button>View Challenge</button>
                                        <button class="dwhitebg">Join Challenge</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="challengebuttom">
                        <div class="dcb-inner">
                            <div class="dcleft">
                                <div class="dc-left-item">
                                    <div class="dicon">
                                        <div class="dclikable">
                                            <img src="/img/like.png"/>
                                        </div>
                                    </div>
                                    <div class="dvals">
                                        <div class="dv-inner">
                                            0
                                        </div>
                                    </div>
                                </div>
                                <div class="dc-left-item">
                                    <div class="dicon">
                                        <div class="dclikable">
                                            <img src="/img/dislike.png"/>
                                        </div>
                                    </div>
                                    <div class="dvals">
                                        <div class="dv-inner">
                                            0
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dcright">
                                <div class="dccomment">
                                    <img src="/img/comment.png"/>
                                </div>
                            </div>
                            <br class="clear" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChallengeList