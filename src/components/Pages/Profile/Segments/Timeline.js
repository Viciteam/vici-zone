import './../../../styles/profiles.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-regular-svg-icons'

class Timeline extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo
        }
    }

    render () {
        return (
            <div className="timeline-inner">
                {/* BOF add post */}
                <div class="tm-onmind">
                    <div class="om-inner">
                        <div class="dprofpic">
                            <img src="/img/user_main.jpg"/>
                        </div>
                        <div class="dtextarea">
                            <textarea placeholder="Write Something.."></textarea>
                        </div>
                        <div class="doptions">
                            <div class="leftops">
                                <div class="ditmone">
                                    <img src="/img/addimage.png"/>
                                </div>
                                <div class="ditmone">
                                    <img src="/img/clip.png"/>
                                </div>
                            </div>
                            <div class="rightops">
                                <div class="ditmone">
                                    <img src="/img/send.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* EOF add post */}
                {/* BOF post list */}
                <div class="dtimelinemain">
                    <div class="dtm-inner">
                        {/* BOF post item */}
                        <div class="dtm-item">
                            <div class="dtm-item-inner">
                                <div class="dtm-header">
                                    <div class="dtm-item-image">
                                        <div class="dtm-item-image-inner">
                                            <img src="/img/user_main.jpg"/>
                                        </div>
                                    </div>
                                    <div class="dtm-item-info">
                                        <div class="dtm-item-info-inner">
                                            <h3>John Peter Doe</h3>
                                            <div class="subinfo">5m ago</div>
                                        </div>
                                    </div>
                                    <br class="clear" />
                                </div>
                                <div class="dtm-content">
                                    <div class="dtm-content-inner">
                                        Think i wanna do the bookwork challenge soon, haven't read a book since! Who wants to join?
                                    </div>
                                </div>
                                <div class="challengebuttom dtimeline">
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
                            <div class="dtm-comments">
                                <div class="drm-comments-inner">
                                    <div class="dtm-comment-inner">
                                        <div class="dtm-comment-image">
                                            <img src="/img/prof_icon.png"/>
                                        </div>
                                        <div class="dtm-comment-content">
                                            <div class="dpagetitle">John S. White <span class="dtime">3m ago</span></div>
                                            <div class="dcommentcontent">
                                                <div class="dcm-text">Sound like fun! Count me in!</div>
                                                <div class="dcm-options">
                                                    <div class="doptleft">
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
                                                    <div class="doptright">
                                                        <button>Reply</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dtm-comment-inner">
                                        <div class="dtm-comment-image">
                                            <img src="/img/prof_icon.png"/>
                                        </div>
                                        <div class="dtm-comment-content">
                                            <div class="dpagetitle">Black S. Panther <span class="dtime">3m ago</span></div>
                                            <div class="dcommentcontent">
                                                <div class="dcm-text">Sound like fun! Count me in!</div>
                                                <div class="dcm-options">
                                                    <div class="doptleft">
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
                                                    <div class="doptright">
                                                        <button>Reply</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dreplypart">
                                        <div class="dr-inner">
                                            <div class="dpartimage">
                                                <div class="dpimage"><img src="/img/user_main.jpg"/></div>
                                            </div>
                                            <div class="dformpart">
                                                <div class="dforminner">
                                                    <div class="dftextarea">
                                                        <textarea name="" id="" placeholder="Leave a comment"></textarea>
                                                    </div>
                                                    <div class="demoticons">
                                                        <button><FontAwesomeIcon icon={faSmile} /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* EOF post item */}
                    </div>
                </div>
                {/* EOF post list */}
            </div>
        )
    }
}

export default Timeline