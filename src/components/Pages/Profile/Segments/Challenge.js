import './../../../styles/profiles.css';
import React from 'react';

import ChallengeList from './ChallengeList'
import LoginModal from '../../Auth/LoginModal';
import auth from '../../../../services/auth';

class Challenge extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo,
            openModal: false,
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.newChallenge = this.newChallenge.bind(this);
    }

    handleOpenModal () {
        if(!auth.isAuthenticated()){
            this.setState({ openModal: true });
        }
    }

    handleCloseModal () {
        this.setState({ openModal: false });
    }

    newChallenge(){
        window.location.href = "/challenge/new";
    }

    render () {
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