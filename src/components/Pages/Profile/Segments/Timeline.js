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
                <div className="tm-onmind">
                    <div className="om-inner">
                        <div className="dprofpic">
                            <img src="/img/user_main.jpg"/>
                        </div>
                        <div className="dtextarea">
                            <textarea placeholder="Write Something.."></textarea>
                        </div>
                        <div className="doptions">
                            <div className="leftops">
                                <div className="ditmone">
                                    <img src="/img/addimage.png"/>
                                </div>
                                <div className="ditmone">
                                    <img src="/img/clip.png"/>
                                </div>
                            </div>
                            <div className="rightops">
                                <div className="ditmone">
                                    <img src="/img/send.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* EOF add post */}
                {/* BOF post list */}
                <div className="dtimelinemain">
                    <div className="dtm-inner">
                        {/* BOF post item */}
                        <div className="dtm-item">
                            <div className="dtm-item-inner">
                                <div className="dtm-header">
                                    <div className="dtm-item-image">
                                        <div className="dtm-item-image-inner">
                                            <img src="/img/user_main.jpg"/>
                                        </div>
                                    </div>
                                    <div className="dtm-item-info">
                                        <div className="dtm-item-info-inner">
                                            <h3>John Peter Doe</h3>
                                            <div className="subinfo">5m ago</div>
                                        </div>
                                    </div>
                                    <br className="clear" />
                                </div>
                                <div className="dtm-content">
                                    <div className="dtm-content-inner">
                                        Think i wanna do the bookwork challenge soon, haven't read a book since! Who wants to join?
                                    </div>
                                </div>
                                <div className="challengebuttom dtimeline">
                                    <div className="dcb-inner">
                                        <div className="dcleft">
                                            <div className="dc-left-item">
                                                <div className="dicon">
                                                    <div className="dclikable">
                                                        <img src="/img/like.png"/>
                                                    </div>
                                                </div>
                                                <div className="dvals">
                                                    <div className="dv-inner">
                                                        0
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dc-left-item">
                                                <div className="dicon">
                                                    <div className="dclikable">
                                                        <img src="/img/dislike.png"/>
                                                    </div>
                                                </div>
                                                <div className="dvals">
                                                    <div className="dv-inner">
                                                        0
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dcright">
                                            <div className="dccomment">
                                                <img src="/img/comment.png"/>
                                            </div>
                                        </div>
                                        <br className="clear" />
                                    </div>
                                </div>
                            </div>
                            <div className="dtm-comments">
                                <div className="drm-comments-inner">
                                    <div className="dtm-comment-inner">
                                        <div className="dtm-comment-image">
                                            <img src="/img/prof_icon.png"/>
                                        </div>
                                        <div className="dtm-comment-content">
                                            <div className="dpagetitle">John S. White <span className="dtime">3m ago</span></div>
                                            <div className="dcommentcontent">
                                                <div className="dcm-text">Sound like fun! Count me in!</div>
                                                <div className="dcm-options">
                                                    <div className="doptleft">
                                                        <div className="dc-left-item">
                                                            <div className="dicon">
                                                                <div className="dclikable">
                                                                    <img src="/img/like.png"/>
                                                                </div>
                                                            </div>
                                                            <div className="dvals">
                                                                <div className="dv-inner">
                                                                    0
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dc-left-item">
                                                            <div className="dicon">
                                                                <div className="dclikable">
                                                                    <img src="/img/dislike.png"/>
                                                                </div>
                                                            </div>
                                                            <div className="dvals">
                                                                <div className="dv-inner">
                                                                    0
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doptright">
                                                        <button>Reply</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dtm-comment-inner">
                                        <div className="dtm-comment-image">
                                            <img src="/img/prof_icon.png"/>
                                        </div>
                                        <div className="dtm-comment-content">
                                            <div className="dpagetitle">Black S. Panther <span className="dtime">3m ago</span></div>
                                            <div className="dcommentcontent">
                                                <div className="dcm-text">Sound like fun! Count me in!</div>
                                                <div className="dcm-options">
                                                    <div className="doptleft">
                                                        <div className="dc-left-item">
                                                            <div className="dicon">
                                                                <div className="dclikable">
                                                                    <img src="/img/like.png"/>
                                                                </div>
                                                            </div>
                                                            <div className="dvals">
                                                                <div className="dv-inner">
                                                                    0
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dc-left-item">
                                                            <div className="dicon">
                                                                <div className="dclikable">
                                                                    <img src="/img/dislike.png"/>
                                                                </div>
                                                            </div>
                                                            <div className="dvals">
                                                                <div className="dv-inner">
                                                                    0
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doptright">
                                                        <button>Reply</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dreplypart">
                                        <div className="dr-inner">
                                            <div className="dpartimage">
                                                <div className="dpimage"><img src="/img/user_main.jpg"/></div>
                                            </div>
                                            <div className="dformpart">
                                                <div className="dforminner">
                                                    <div className="dftextarea">
                                                        <textarea name="" id="" placeholder="Leave a comment"></textarea>
                                                    </div>
                                                    <div className="demoticons">
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