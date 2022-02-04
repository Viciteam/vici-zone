import './../../styles/challenge.css';
import React from 'react';


class NewChallenge extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo
        }
    }

    render () {
        return (
            <div className="challenges-page-inner">
                <h2>New Challenge</h2>
                <div className="dtopnavs">
                    <div className="leftsubnav">
                        <a href="/">Home</a>
                    </div>
                    <div className="centersubnav">
                        <h3>Select Challenge Type</h3>
                    </div>
                    <div className="rightsubnav">
                        <a href="#">View Templates</a>
                    </div>
                </div>
                <div className="diconitems">
                    <div className="dic-inner">
                        <div className="dic-item">
                            <a href="/challenge/goal">
                                <div className="dic-item-inner">
                                    <div className="dic-icon">
                                        <img alt="" src="/img/ch_goal.png"/>
                                    </div>
                                    <div className="dtiletext">goal</div>
                                    <div className="dshowtext">
                                        <h2 className="greenbg">Goal Challenge</h2>
                                        <div class="ddesc">anyone who achieves a goal/milestone wins.</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="dic-item">
                            <div className="dic-item-inner">
                                <div className="dic-icon">
                                    <img alt="" src="/img/ch_leaderboard.png"/>
                                </div>
                                <div className="dtiletext">leaderboard</div>
                                <div className="dshowtext">
                                    <h2 className="purplebg">LEADERBOARD</h2>
                                    <div class="ddesc">Anyone with the highest score wins.</div>
                                </div>
                            </div>
                        </div>
                        <div className="dic-item">
                            <div className="dic-item-inner">
                                <div className="dic-icon">
                                    <img alt="" src="/img/ch_contest.png"/>
                                </div>
                                <div className="dtiletext">contest</div>
                                <div className="dshowtext">
                                    <h2 className="bluebg">CONTEST</h2>
                                    <div class="ddesc">Winner is decided by votes or by a judge.</div>
                                </div>
                            </div>
                        </div>
                        <div className="dic-item">
                            <div className="dic-item-inner">
                                <div className="dic-icon">
                                    <img alt="" src="/img/ch_challenge_yourself.png"/>
                                </div>
                                <div className="dtiletext">challenge yourself</div>
                                <div className="dshowtext">
                                    <h2 className="yellowbg">CHALLENGE YOURSELF</h2>
                                    <div class="ddesc">Create goals and keep yourself accountable</div>
                                </div>
                            </div>
                        </div>
                        <div className="dic-item">
                            <div className="dic-item-inner">
                                <div className="dic-icon">
                                    <img alt="" src="/img/ch_debate.png"/>
                                </div>
                                <div className="dtiletext">debate</div>
                                <div className="dshowtext">
                                    <h2 className="redbg">DEBATE</h2>
                                    <div class="ddesc">Build consensus on a topic and win with better reasoning</div>
                                </div>
                            </div>
                        </div>
                        <div className="dic-item">
                            <div className="dic-item-inner">
                                <div className="dic-icon">
                                    <img alt="" src="/img/challenge_question.png"/>
                                </div>
                                <div className="dtiletext">Quick win</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewChallenge