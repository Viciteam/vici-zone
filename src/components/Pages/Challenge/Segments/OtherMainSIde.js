import './../../../styles/challenge.css';
import React from 'react';
import ReactModal from 'react-modal';

import Switch from "react-switch";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'

class OtherMainSIde extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isactive: this.props.isactive,
            isModalOpen: false,
            isWatching: false,
            isWatchingText: 'Watch Challenge',
            switchOne: false,
            switchTwo: false,
            switchThree: false,
            joinChallengeModal: false,
            joinChallengeStep: 1,
            joinChallengeSelected: 'individual',
            joinChallengeSelectedSquad: 'Please select a Squad',
            joinChallengeSelectedClan: 'Please select a Clan',
            quitChallengeModal: false,
            quitChallengeStep: 1,
            quitChallengeType: 1
        }

        this.watchChallenge = this.watchChallenge.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.cancelWatch = this.cancelWatch.bind(this);
        this.joinChallengeOption = this.joinChallengeOption.bind(this);
        this.openJoinChallenge = this.openJoinChallenge.bind(this);
        this.openQuitChallenge = this.openQuitChallenge.bind(this);
        this.confirmJoinChallenge = this.confirmJoinChallenge.bind(this);
        this.closeJoinChallenge = this.closeJoinChallenge.bind(this);
        this.closeQuitChallenge = this.closeQuitChallenge.bind(this);
        this.confirmQuitChallenge = this.confirmQuitChallenge.bind(this);
    }

    watchChallenge(){
        this.setState({ isWatching: !this.state.isWatching });
        if(this.state.isWatching){
            this.setState({ isWatchingText: 'Watch Challenge'});
        } else {
            this.setState({ isWatchingText: 'Stop Watching'});

            // open modal
            this.setState({ isModalOpen: !this.state.isModalOpen });
        }
    }

    handleChange(item){
        console.log('changed -> ', item);
        if(item === 'one'){ this.setState({ switchOne: !this.state.switchOne}); }
        if(item === 'two'){ this.setState({ switchTwo: !this.state.switchTwo}); }
        if(item === 'three'){ this.setState({ switchThree: !this.state.switchThree}); }
    }

    cancelWatch(){
        // console.log('tgus us a test');
        this.setState({ isModalOpen: false });
    }

    joinChallengeOption(selected){
        this.setState({ joinChallengeSelected: selected });
    }

    closeJoinChallenge(){

        this.setState({ joinChallengeModal: false });
    }

    openJoinChallenge(){
        this.setState({ joinChallengeStep: 1 });
        this.setState({ joinChallengeModal: true });
    }

    openQuitChallenge(){
        this.setState({ quitChallengeModal: true });
    }

    closeQuitChallenge(){
        this.setState({ quitChallengeModal: false });
    }

    confirmJoinChallenge(){
        this.setState({ joinChallengeStep: 2 });
    }

    confirmQuitChallenge(){
        this.setState({ quitChallengeStep: 2 });
    }

    render () {

        let joinChallenge = () => {
            if(this.state.joinChallengeStep === 1){
                // let individualOptions = () => {
                //     if(this.state.joinChallengeSelected == 'individual'){
                //         return (
                //             <div className="join-challenge-idv-options">
                //                 show individual options
                //             </div>
                //         );
                //     }
                // }

                let clanOptions = () => {
                    if(this.state.joinChallengeSelected === 'clan'){
                        return (
                            <div className="join-challenge-idv-options">
                                <div className="join-challenge-idv-options-items">
                                    <label htmlFor="">Select clan</label>
                                    <div className="d-select-squad">
                                        <div className="d-selected-squad">{this.state.joinChallengeSelectedClan}</div>
                                        <div className="d-squad-options">
                                            <div className="d-select-squad-item">Clan 1</div>
                                            <div className="d-select-squad-item">Clan 2</div>
                                            <div className="d-select-squad-item">Clan 3</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }

                let squadOptions = () => {
                    if(this.state.joinChallengeSelected === 'squad'){
                        return (
                            <div className="join-challenge-idv-options">
                                <div className="join-challenge-idv-options-items">
                                    <label htmlFor="">Select squad</label>
                                    <div className="d-select-squad">
                                        <div className="d-selected-squad">{this.state.joinChallengeSelectedSquad}</div>
                                        <div className="d-squad-options">
                                            <div className="d-select-squad-item">Squad 1</div>
                                            <div className="d-select-squad-item">Squad 2</div>
                                            <div className="d-select-squad-item">Squad 3</div>
                                            <div className="d-select-squad-item create-a-squad">Create a squad</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
                return (
                    <div className="join-challenge-steps challenge-step-one">
                        <div className="join-challenge-inner">
                            <div className="join-challenge-header">Join Challenge</div>
                            <div className="join-challenge-content">
                                <div className="join-challenge-content-inner">
                                    <h3>How do you want to join the challenge?</h3>
                                    <div className="join-challenge-item">
                                        <div className="d-join-checkbox">
                                            <input type="radio" name="selectjoin[]" defaultChecked onChange={() => this.joinChallengeOption('individual')} />
                                        </div>
                                        <div className="d-join-content">
                                            <div className="join-challenge-item-title">Join as an indvidual</div>
                                            <div className="join-challenge-item-subtitle">Join the challenge as yourself.</div>
                                        </div>
                                        {/* {individualOptions()} */}
                                    </div>
                                    <div className="join-challenge-item">
                                        <div className="d-join-checkbox">
                                            <input type="radio" name="selectjoin[]" onChange={() => this.joinChallengeOption('clan')} />
                                        </div>
                                        <div className="d-join-content">
                                            <div className="join-challenge-item-title">Represent a Clan</div>
                                            <div className="join-challenge-item-subtitle">Choose a clan to represent when doing the challenge, chosen clan name will be shown in participant progress.</div>
                                        </div>
                                        {clanOptions()}
                                    </div>
                                    <div className="join-challenge-item">
                                        <div className="d-join-checkbox">
                                            <input type="radio" name="selectjoin[]" onChange={() => this.joinChallengeOption('squad')} />
                                        </div>
                                        <div className="d-join-content">
                                            <div className="join-challenge-item-title">Join as a Squad</div>
                                            <div className="join-challenge-item-subtitle">Invite your squad members to join the challenge with you.</div>
                                        </div>
                                        {squadOptions()}
                                    </div>
                                </div>
                            </div>
                            <div className="join-challenge-footer">
                                <button className="cancel-option" onClick={() => this.closeJoinChallenge()}>Cancel</button>
                                <button className="join-option" onClick={() => this.confirmJoinChallenge()}>Join Challenge</button>
                            </div>
                        </div>
                    </div>
                );
            }

            if(this.state.joinChallengeStep === 2){
                return (
                    <div className="join-challenge-steps challenge-step-two">
                        <div className="ms-watch-modal">
                            <div className="ms-watch-modal-inner">
                                <div className="ms-watch-header-top">
                                    <img src="/img/watch_header.png" alt="" />
                                </div>
                                <div className="ms-watch-content">
                                    <div className="ms-watch-join">
                                        <h3>Challenge Joined!</h3>
                                        <div className="ms-join-success">Start doing the actions now or<br />invite some friends to join you!</div>
                                    </div>
                                    <div className="dsub-desc-ops">
                                        <button className="cancelbutton">Invite Friends</button>
                                        <button className="savebutton" onClick={() => this.closeJoinChallenge()}>Challenge Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        };

        let quitChallenge = () => {
            if(this.state.quitChallengeStep === 1){

                // let hasPenalty = () => {
                //     return (
                //         <div className="showPenalty">
                //             test
                //         </div>
                //     );
                // }

                return (
                    <div className="quit-challenge-steps challenge-step-one">
                        <div className="ms-watch-modal">
                            <div className="ms-watch-modal-inner ms-watch-quit">
                                <div className="ms-quit-icon">
                                    <FontAwesomeIcon icon={faExclamationCircle} />
                                </div>
                                <div className="ms-watch-content">
                                    <div className="ms-watch-quit-desc">
                                        <div className="ms-watch-quit-title">You are about to abandon the challenge</div>
                                        <div className="ms-watch-quit-desc">You will be marked as 'abandoned' in the participant list</div>
                                        <div className="ms-watch-let-creator-know">
                                            <textarea placeholder="Let the creator know your reason for abandoning (optional)"></textarea>
                                        </div>
                                    </div>
                                    <div className="dsub-desc-ops">
                                        <button className="cancelbutton" onClick={() => this.closeQuitChallenge()}>ON SECOND THOUGHT</button>
                                        <button className="quitbutton" onClick={() => this.confirmQuitChallenge()}>Abandon Challenge</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }

            if(this.state.quitChallengeStep === 2){
                return (
                    <div className="quit-challenge-steps challenge-step-two">
                        <div className="ms-watch-modal">
                            <div className="ms-watch-modal-inner">
                                <div className="ms-watch-header-top">
                                    <img src="/img/watch_header.png" alt="" />
                                </div>
                                <div className="ms-watch-content">
                                    <div className="ms-watch-join">
                                        <h3>Challenge Abandoned</h3>
                                    </div>
                                    <div className="dsub-desc-ops">
                                        <button className="cancelbutton">Home</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        };

        return (
            <div className="main-sidebar-inner">
                <div className="dshageimage">
                    <img src="/img/share.png" alt="" />
                </div>
                <h2>{this.props.details['name']}</h2>
                <div className="subtitle">Goal</div>
                <div className="ms-main-image">
                    <img src="/img/watch_main.png" alt="" />
                </div>
                <div className="ms-sub-title">{this.props.details['description']}</div>
                <div className="dinfodetails">
                    <div className="dinfoitem">
                        <div className="din-left">CREATED BY:</div>
                        <div className="din-right"><span className="dimagepart"><img src="/img/dummy/1.png" alt="" /></span><span className="dtextpart">John S. White</span></div>
                    </div>
                    <div className="dinfoitem">
                        <div className="din-left">PEOPLE JOINED:</div>
                        <div className="din-right"><img src="/img/dummy/Group.png" alt="" /></div>
                    </div>
                    <div className="dinfoitem">
                        <div className="din-left">DURATION:</div>
                        <div className="din-right">Daily</div>
                    </div>
                    <div className="dinfoitem">
                        <div className="din-left">INSTRUCTIONS:</div>
                        <div className="din-right">Do the completed set of actions daily</div>
                    </div>
                </div>
                <div className="ms-join-button">
                    <button onClick={() => this.openJoinChallenge()}>Join Challenge</button>
                    <button className="quit-challenge" onClick={() => this.openQuitChallenge()}>Quit Challenge</button>
                </div>

                <div className="ms-button-options">
                    <div className="ms-button-optleft">
                        <button onClick={() => this.watchChallenge()}><span className="diconbase"><FontAwesomeIcon icon={faEye} /></span><span className="dtextbase">{this.state.isWatchingText}</span></button>
                    </div>
                    <div className="ms-button-optright">
                        <button>Invite Friends</button>
                    </div>
                </div>
                <ReactModal
                    isOpen={this.state.isModalOpen}
                    contentLabel="Example Modal"
                    className="watch_side_modal"
                    ariaHideApp={false}
                >
                    <div className="ms-watch-modal">
                        <div className="ms-watch-modal-inner">
                            <div className="ms-watch-header-top">
                                <img src="/img/watch_header.png" alt="" />
                            </div>
                            <div className="ms-watch-content">
                                <h3><span className="ms-watch-eye"><FontAwesomeIcon icon={faEye} /></span> You are now a watcher!</h3>
                                <div className="dsub-desc">Choose what notifications to receive for this challenge</div>
                                <div className="dsub-list">
                                    <div className="dsub-items">
                                        <div className="dsub-title">When someone completed the challenge</div>
                                        <div className="dsub-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={() => this.handleChange('one')} checked={this.state.switchOne} /></div>
                                    </div>
                                    <div className="dsub-items">
                                        <div className="dsub-title">When someone fails the challenge</div>
                                        <div className="dsub-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={() => this.handleChange('two')} checked={this.state.switchTwo} /></div>
                                    </div>
                                    <div className="dsub-items">
                                        <div className="dsub-title">When challenge ends</div>
                                        <div className="dsub-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={() => this.handleChange('three')} checked={this.state.switchThree} /></div>
                                    </div>
                                </div>
                                <div className="dsub-frequency">
                                    <label htmlFor="">Send updates every:</label>
                                    <select>
                                        <option>Daily</option>
                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                    </select>
                                </div>
                                <div className="dsub-desc-ops">
                                    <button className="cancelbutton" onClick={() => this.cancelWatch()}>Cancel</button>
                                    <button className="savebutton">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactModal>
                <ReactModal
                    isOpen={this.state.joinChallengeModal}
                    contentLabel="Example Modal"
                    className="join_challenge_modal"
                    ariaHideApp={false}
                >
                    <div className="ms-watch-modal">
                        {joinChallenge()}
                    </div>
                </ReactModal>

                <ReactModal
                    isOpen={this.state.quitChallengeModal}
                    contentLabel="Example Modal"
                    className="quit_challenge_modal"
                    ariaHideApp={false}
                >
                    <div className="ms-watch-modal">
                        {quitChallenge()}
                    </div>
                </ReactModal>
            </div>
        )
    }
}

export default OtherMainSIde
