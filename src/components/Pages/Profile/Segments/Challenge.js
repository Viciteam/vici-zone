import './../../../styles/profiles.css';
import React from 'react';

import ChallengeList from './ChallengeList'
import LoginModal from '../../Auth/LoginModal';

class Challenge extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo,
            openModal: false,
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ openModal: true });
    }

    handleCloseModal () {
        this.setState({ openModal: false });
    }

    render () {
        return (
            <div className="challenges-inner">
                <div className="dchallemgeheader">
                    <div className="dc-inner">
                        <div className="dci-left">
                            <button onClick={this.handleOpenModal}>Join a Challenge</button>
                            {this.state.openModal && <LoginModal closeModal={this.handleCloseModal } />}
                        </div>
                        <div className="dci-right">
                            <button>New Challenge</button>
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