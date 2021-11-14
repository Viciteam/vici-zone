import './../../../styles/challenge.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faImage, faLink, faPaperPlane, faEllipsisV, faThumbsUp, faThumbsDown, faCommentAlt} from '@fortawesome/free-solid-svg-icons'

class ShowComment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isactive: this.props.isactive
        }
    }

    render () {
        return (
            <div className="dpost-list-item comment-item">
                <div className="dpost-list-item">
                    <div className="dpost-list-item-header">
                        <div className="dpost-list-image">
                            <img src="/img/user_main.jpg" alt="" />
                        </div>
                        <div className="dpost-list-text">
                            <h3>Daphne Winter - Joined the challenge</h3>
                            <div className="dnumber">1hr ago</div>
                        </div>
                        <div className="dpost-list-dots">
                            <FontAwesomeIcon icon={faEllipsisV} />
                        </div>
                    </div>
                    <div className="dpost-list-item-post">
                        Morning Routine let’s go!
                    </div>
                    <div className="dpost-list-item-ops">
                        <div className="dpost-list-left">
                            <div className="likebtn">
                                <span className="dicon"><FontAwesomeIcon icon={faThumbsUp} /></span>
                                <span className="dnum">0</span>
                            </div>
                            <div className="likebtn">
                                <span className="dicon"><FontAwesomeIcon icon={faThumbsDown} /></span>
                                <span className="dnum">0</span>
                            </div>
                        </div>
                        <div className="dpost-list-right">
                            <FontAwesomeIcon icon={faCommentAlt} />
                        </div>
                    </div>
                </div> 
            </div> 
        )
    }
}

export default ShowComment