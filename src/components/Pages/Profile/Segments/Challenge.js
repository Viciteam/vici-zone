import './../../../styles/profiles.css';
import React from 'react';

import ChallengeList from './ChallengeList'
import LoginModal from '../../Auth/LoginModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowRight, faArrowLeft, faThList } from '@fortawesome/free-solid-svg-icons'

import ReactModal from 'react-modal';

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.vici.life/api/',
  headers: {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization' : 'Bearer 54|nDXR6RW6gzfF0P20tPIrjg68h6xpnZmNGdzSVVBM',
  }
})

class Challenge extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo,
            openModal: false,
            newChallengeModalOpen: true,
            challengeCurrentSteps: 1,
            challengeDesc: '',
            challengeName: ''
        }
        
        this.newChallenge = this.newChallenge.bind(this);
        this.proceedToNextStep = this.proceedToNextStep.bind(this);
        this.closeNewChallengeModal = this.closeNewChallengeModal.bind(this);
        this.saveChallengeName = this.saveChallengeName.bind(this);
        this.saveChallengeDesc = this.saveChallengeDesc.bind(this);
        this.buildChallengeFromScratch = this.buildChallengeFromScratch.bind(this);
    }

    newChallenge(){
        // window.location.href = "/challenge/new";

        console.log('new challenge');
        this.setState({ newChallengeModalOpen: true });
    }

    buildChallengeFromScratch(){
        // window.location.href = "/challenge/new";
        console.log('create from scratchj')

        let params = {};
        params['name'] = this.state.challengeName;
        params['description'] = this.state.challengeDesc;
        params['is_template'] = 'No';
        params['owner_id'] = '1';
        params['details'] = [];

        console.log('save new token sd -> ', params);

        let parameters = JSON.stringify(params);

         console.log('save new token -> ', parameters);

        api.post('/challenge', parameters)
        .then((response) => {
            console.log(response);
        });

    }

    proceedToNextStep(selectedStep){
        this.setState({ challengeCurrentSteps: selectedStep });
    }

    closeNewChallengeModal(){
        this.setState({ newChallengeModalOpen: false });
    }

    saveChallengeName(name){
        this.setState({ challengeName: name });
    }

    saveChallengeDesc(desc){
        this.setState({ challengeDesc: desc });
    }

    render () {

        let ChallengeSteps = () => {
            if(this.state.challengeCurrentSteps == 1){
                return (
                    <div className="d-new-challenge-step d-challenge-step-one">
                        <div className="d-new-challenge-inner">
                            <h3>What is your challenge about?</h3>
                            <div className="d-new-challenge-name-input">
                                {/* <input type="text" placeholder="Enter challenge description" name="d-challenge-desc" defaultValue={this.state.challengeDesc} onChange={(e) => this.saveChallengeDesc(e.target.value)} /> */}
                                <textarea placeholder="Enter challenge description" onChange={(e) => this.saveChallengeDesc(e.target.value)}></textarea>
                            </div>
                            <div className="d-new-challenge-option">
                                <button className="dnc-option-cancel" onClick={() => this.closeNewChallengeModal()}>Cancel</button>
                                <button className="dnc-option-proceed" onClick={() => this.proceedToNextStep(2)}>Next <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
                            </div>
                        </div>
                    </div>
                );
            }

            if(this.state.challengeCurrentSteps == 2){
                return (
                    <div className="d-new-challenge-step d-challenge-step-one">
                        <div className="d-new-challenge-inner">
                            <h3>Name your challenge!</h3>
                            <div className="d-new-challenge-name-input">
                                <input type="text" placeholder="Enter challenge name" name="d-challenge-name" defaultValue={this.state.challengeName} onChange={(e) => this.saveChallengeName(e.target.value)} />
                            </div>
                            <div className="d-new-challenge-option">
                                <button className="dnc-option-cancel" onClick={() => this.proceedToNextStep(1)}><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
                                <button className="dnc-option-proceed" onClick={() => this.proceedToNextStep(3)}>Next <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
                            </div>
                        </div>
                    </div>
                );
            }

            if(this.state.challengeCurrentSteps == 3){
                return (
                    <div className="d-new-challenge-step d-challenge-step-three">
                        <div className="d-new-challenge-inner">
                            <h3>{this.state.challengeName} test</h3>
                            <div className="dnm-subheader">Challenge name saved!</div>
                            <div className="dnm-subheader-base">Continue making the challenge from scratch or choose from our ready made templates.</div>
                            <div className="dnm-create-a-challenge">
                                <div className="dnm-create-challenge-from-scratch">
                                    <button onClick={() => this.buildChallengeFromScratch()}><span className="dnm-scratch-icon"><FontAwesomeIcon icon={faPlus} /></span> <span className="dnm-from-scratch-span">Create a challenge from scratch</span></button>
                                </div>
                            </div>
        
                            <div className="dnm-create-a-challenge">
                                <div className="dnm-create-challenge-from-template">
                                    <span><FontAwesomeIcon icon={faThList} /></span> <strong>Choose from templates</strong> (recommended for new creators)
                                </div>
                            </div>
                            {/* <div className="dnm-create-challenge-options">
                                show options
                            </div> */}
                            <div className="dnm-create-a-challenge-bottom">
                                <button>Browse all templates</button>
                            </div>
                            {/* <div className="d-new-challenge-option">
                                <button className="dnc-option-cancel" onClick={() => this.proceedToNextStep(2)}><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
                                <button className="dnc-option-proceed" onClick={() => this.proceedToNextStep(3)}>Next <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
                            </div> */}
                        </div>
                    </div>
                );
            }
        };

        return (
            <div className="challenges-inner">
                <div className="dchallemgeheader">
                    <div className="dc-inner">
                        <div className="dci-left">
                            <button onClick={this.handleOpenModal}>
                                <img src="/img/join_challenge.png" alt="" />
                                <span>Join a Challenge</span>
                            </button>
                            {this.state.openModal && <LoginModal closeModal={this.handleCloseModal } />}
                        </div>
                        <div className="dci-right">
                            <button onClick={() => this.newChallenge() }>
                                <img src="/img/new_challenge.png" alt="" />
                                <span>New Challenge</span>
                            </button>
                            <ReactModal
                                isOpen={this.state.newChallengeModalOpen}
                                contentLabel="Example Modal"
                                className="new_challenge_modal"
                                ariaHideApp={false}
                            >
                                <div className="d-new-challenge-pop">
                                    <div className="d-new-challenge-pop-inner">
                                        <h2>Create a Challenge</h2>
                                        <div className="d-new-challenge-content">
                                            {ChallengeSteps()}
                                        </div>
                                    </div>
                                </div>
                            </ReactModal>
                        </div>
                    </div>
                </div>
                <div className="dchallenge-list">
                    <div className="dch-inner">
                        <ChallengeList />
                        <ChallengeList />
                        <ChallengeList />
                    </div>
                </div>
            </div>
        )
    }
}

export default Challenge