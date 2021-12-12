import './../../../styles/challenge.css';
import React from 'react';

import ReactModal from 'react-modal';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'

class WatchRewards extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isRewardSent: false,
            isactive: this.props.isactive
        }

        this.openRewardSent = this.openRewardSent.bind(this);
        this.closeRewardSent = this.closeRewardSent.bind(this);
    }

    openRewardSent(){
        this.setState({isRewardSent: true})
    }

    closeRewardSent(){
        this.setState({isRewardSent: false})
    }
    

    render () {
        const updateRewardStepsButtons = () => {
            return (
                <div className="d-reward-settings-ops">
                    <button className="cancelReward" onClick={() => this.closeRewardSent()}>Cancel</button>
                    <button className="saveReward">View Reward</button>
                </div>
            );
        }

        return (
            <div className="watch-rewards-inner">
                <div className="watch-rewards-header">Rewards</div>
                <div className="watch-rewards-items">
                    <div className="wr-item">
                        <div className="diconpart"><img src="/img/coil.png" alt="" /></div>
                        <div className="dtextpart">10 Vici Tokens</div>
                        <div className="dlockpart"><FontAwesomeIcon icon={faLock} /></div>
                    </div>
                    <div className="wr-item">
                        <div className="diconpart"><img src="/img/coil.png" alt="" /></div>
                        <div className="dtextpart">10 Vici Tokens</div>
                        <div className="dlockpart"><FontAwesomeIcon icon={faLock} /></div>
                    </div>
                    <div className="wr-item allow-click" onClick={() => this.openRewardSent()}>
                        <div className="diconpart"><img src="/img/rewards_gift.png" alt="" /></div>
                        <div className="dtextpart">Ipad Pro 2020</div>
                        <div className="dlockpart"><img src="/img/reward_box.png" alt="" /></div>
                    </div>
                </div>
                <div className="watch-penalty-header">Penalty</div>
                <div className="watch-penalty-items">
                    <div className="wr-item">
                        <div className="diconpart"><img src="/img/coil.png" alt="" /></div>
                        <div className="dtextpart">10 Vici Tokens</div>
                        <div className="dlockpart"><FontAwesomeIcon icon={faLock} /></div>
                    </div>
                    <div className="wr-item">
                        <div className="diconpart"><img src="/img/coil.png" alt="" /></div>
                        <div className="dtextpart">10 Vici Tokens</div>
                        <div className="dlockpart"><FontAwesomeIcon icon={faLock} /></div>
                    </div>
                </div>

                <ReactModal
                    isOpen={this.state.isRewardSent}
                    contentLabel="Example Modal"
                    className="watch_side_modal"
                    ariaHideApp={false}
                >
                    <div className="d-rewards-settings-modal">
                        <h4>Rewards</h4>
                        <div className="d-reward-settings-list d-reward-sent-setting">
                            <div className="d-reward-image">
                                <img src="/img/gift_box_big.png" alt="" />
                            </div>
                            <h2>Apple watch</h2>
                            <div className="d-reward-header">Your reward is being sent by the challenge creator</div>
                            <h3>Proof</h3>
                            <div className="d-reward-proof-list">
                                <div className="d-reward-item"><img src="/img/reward-image-1.png" alt="" /></div>
                                <div className="d-reward-item"><img src="/img/reward-image-2.png" alt="" /></div>
                            </div>
                            <h3>Download</h3>
                        </div>
                        {updateRewardStepsButtons()}
                    </div>
                </ReactModal>
            </div>
        )
    }
}

export default WatchRewards