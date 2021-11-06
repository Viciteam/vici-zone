import './../../../styles/profiles.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-regular-svg-icons'

class Timeline extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo,
            postMessage: '',
            postComments: '',
            posts: [
                {
                    id: 1,
                    avatar: '/img/user_main.jpg',
                    name: 'John Peter Doe',
                    time: '5m ago',
                    message: [
                        {
                            text: 'Think i wanna do the bookwork challenge soon, haven\'t read a book since! Who wants to join?',
                            image: '',
                        }
                    ],
                    comments: [
                        {
                            id: 1,
                            avatar: '/img/prof_icon.png',
                            name: 'John S. White',
                            time: '3m ago',
                            message: 'Sound like fun! Count me in!',
                        },
                        {
                            id: 1,
                            avatar: '/img/prof_icon.png',
                            name: 'Black S. Panther',
                            time: '3m ago',
                            message: 'Sound like fun! Count me in!',
                        },
                    ]
    
                }
            ]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
    }

    handleChange (event) {
        this.setState({postMessage: event.target.value});
    }

    handleCommentChange (event) {
        this.setState({postComments: event.target.value});
    }

    _handleComment = (e, index) => {
        if (e.key === 'Enter') {
            let array = [...this.state.posts]; // make a separate copy of the array
            const newComment = {
                avatar: '/img/prof_icon.png',
                name: 'John S. White',
                time: '3m ago',
                message: this.state.postComments,
            }
            if (index !== -1) {
                array.forEach((elem, i) =>{
                    if(index == i){
                        const data = {
                            avatar: '/img/user_main.jpg',
                            name: 'John Peter Doe',
                            time: '5m ago',
                            message: [...elem.message],
                            comments: [...elem.comments, newComment],
                        }
                        array.splice(index, 1, data);
                    }
                })
                //array.splice(index, 1);
                this.setState({posts: array});
                this.setState({postComments: ''});
            }
          }
    }

    _handleKeyDown = (e) => { 
            const data = {
                avatar: '/img/user_main.jpg',
                name: 'John Peter Doe',
                time: '5m ago',
                message: [
                    {
                        text: this.state.postMessage
                    }
                ],
                comments: []
            }
            this.setState({ 
                posts: [data, ...this.state.posts],
                postMessage: ''
            })       
    }

    render () {
        const { posts } = this.state
        return (
            <div className="timeline-inner">
                {/* BOF add post */}
                <div className="tm-onmind">
                    <div className="om-inner">
                        <div className="dprofpic">
                            <img src="/img/user_main.jpg"/>
                        </div>
                        <div className="dtextarea">
                            <textarea value={this.state.postMessage} onChange={this.handleChange} placeholder="Write Something.."></textarea>
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
                                <button onClick={this._handleKeyDown} className="ditmone">
                                    <img src="/img/send.png"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* EOF add post */}
                {/* BOF post list */}

                {
                   posts.map((post, i) => (
                        <div className="dtimelinemain" key={i}>
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
                                                    <h3>{ post.name }</h3>
                                                    <div className="subinfo">{ post.time }</div>
                                                </div>
                                            </div>
                                            <br className="clear" />
                                        </div>
                                        <div className="dtm-content">
                                            {
                                                post.message.map((mess, index) => (
                                                    <div className="dtm-content-inner" key={index}>
                                                        { mess.text }
                                                    </div>
                                                ))
                                            }
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
                                            {
                                                post.comments.map((comment, index) => (
                                                    <div className="dtm-comment-inner">
                                                        <div className="dtm-comment-image">
                                                            <img src={comment.avatar} />
                                                        </div>
                                                        <div className="dtm-comment-content">
                                                            <div className="dpagetitle">{ comment.name }<span className="dtime">{ comment.time }</span></div>
                                                            <div className="dcommentcontent">
                                                                <div className="dcm-text">{ comment.message }</div>
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
                                                ))
                                            }


                                            {/* <div className="dtm-comment-inner">
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
                                            </div> */}
                                            <div className="dreplypart">
                                                <div className="dr-inner">
                                                    <div className="dpartimage">
                                                        <div className="dpimage"><img src="/img/user_main.jpg"/></div>
                                                    </div>
                                                    <div className="dformpart">
                                                        <div className="dforminner">
                                                            <div className="dftextarea">
                                                                <textarea value={this.state.postComments} onKeyDown={(e) => this._handleComment(e, i)} onChange={this.handleCommentChange} name="" id="" placeholder="Leave a comment"></textarea>
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
                    ))
                }

                {/* EOF post list */}
            </div>
        )
    }
}

export default Timeline