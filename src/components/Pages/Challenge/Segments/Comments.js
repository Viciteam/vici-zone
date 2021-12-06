import './../../../styles/challenge.css';
import React from 'react';

import ShowComment from './ShowComment'; 
import ShowActivity from './ShowActivity'; 

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faImage, faLink, faPaperPlane, faEllipsisV, faThumbsUp, faThumbsDown, faCommentAlt} from '@fortawesome/free-solid-svg-icons'

class Comments extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isactive: this.props.isactive,
            userComments: [
                {
                    id: 1,
                    name: 'John snow',
                    type: 'notif',
                    time: '5m ago',
                    action: 'join_challenge'
                },
                {
                    id: 1,
                    name: 'Lorem Ipsum',
                    type: 'notif',
                    time: '5m ago',
                    action: 'failed_challenge'
                },
                {
                    id: 1,
                    name: 'John snow',
                    type: 'comment',
                    time: '5m ago',
                    action: 'failed_challenge',
                    text: 'Morning Routine let’s go!',
                    like: 20,
                    dislike: 10
                }
            ]
        }
    }

    render () {
        const activities = this.state.userComments;
        const renderComments = activities.map(item => {
            if(item.type == 'comment'){
                return <ShowComment info={item} key={item.id} />
            }
                
            return <ShowActivity info={item} key={item.id} />
        });
        return (
            <div className="updates-comments-inner">
                <div className="dheadpart">
                    <h2>Updates & Comments</h2>
                    <div className="dsidepart">
                        <button>All Post</button>
                    </div>
                </div>
                <div className="daddpost">
                    <div className="dpostinput">
                        <div className="dpic">
                            <img src="/img/user_main.jpg" alt="" />
                        </div>
                        <div className="daddpostarea">
                            <textarea placeholder="Write something..."></textarea>
                        </div>
                    </div>
                    <div className="dpostops">
                        <div className="dopsleft">
                            <button className="dimagepart"><FontAwesomeIcon icon={faImage} /></button>
                            <button className="dlinkpart"><FontAwesomeIcon icon={faLink} /></button>
                        </div>
                        <div className="dopsright">
                            <button className="dsendpost"><FontAwesomeIcon icon={faPaperPlane} /></button>
                        </div>
                    </div>
                </div>
                <div className="dpostlist">
                    {renderComments}
                </div>
            </div>
        )
    }
}

export default Comments