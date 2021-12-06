import './../../../styles/challenge.css';
import React from 'react';
import ReactModal from 'react-modal';

import Switch from "react-switch";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faEye} from '@fortawesome/free-solid-svg-icons'

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
        }

        this.watchChallenge = this.watchChallenge.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.cancelWatch = this.cancelWatch.bind(this);
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
        if(item == 'one'){ this.setState({ switchOne: !this.state.switchOne}); }
        if(item == 'two'){ this.setState({ switchTwo: !this.state.switchTwo}); }
        if(item == 'three'){ this.setState({ switchThree: !this.state.switchThree}); }
    }

    cancelWatch(){
        // console.log('tgus us a test');
        this.setState({ isModalOpen: false });
    }

    render () {
        
        return (
            <div className="main-sidebar-inner">
                <div className="dshageimage">
                    <img src="/img/share.png" alt="" />
                </div>
                <h2>Morning Routine</h2>
                <div className="subtitle">Goal</div>
                <div className="ms-main-image">
                    <img src="/img/watch_main.png" alt="" />
                </div>
                <div className="ms-sub-title">A morning routine challenge for those who want to start their day with a healthy mindset!</div>
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
                    <button>Join Challenge</button>
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
                                        <div className="dsub-title">When someone completed a challenge</div>
                                        <div className="dsub-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={() => this.handleChange('one')} checked={this.state.switchOne} /></div>
                                    </div>
                                    <div className="dsub-items">
                                        <div className="dsub-title">When someone fails a challenge</div>
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
                                        <option value="">Daily</option>
                                        <option value="">Weekly</option>
                                        <option value="">Monthly</option>
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
            </div>
        )
    }
}

export default OtherMainSIde