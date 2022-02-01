import './../../styles/profiles.css';
import React from 'react';
import JoinClanModal from './Components/JoinClanModal';
import { JoinContext } from './JoinedContext';
class ClanInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: this.props.active,
            openModal: false,
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        //const [] = useContext(JoinContext);
        
    }
    static contextType = JoinContext;

    handleOpenModal () {
        this.setState({ openModal: true });
    }

    handleCloseModal () {
        this.setState({ openModal: false });
    }

    render () {
        const {isJoined} = this.context;
        return (
            <div className="dheaderbase">
                <div className="dhb-inner">
                    <div className="flex">
                        <div className="dhb-image">
                            <div className="img-place">
                                <img alt="" src="/img/prof_icon.png"/>
                            </div>
                        </div>
                        <div className="flex justify-between w-full">
                            {/* <div className="dhb-info"> */}
                            <div className="mt-12 pl-12">
                                <div className="text-5xl font-bold">Running Club</div>
                                <div className="info-desc">We help you complete your running exercise! Join us!</div>
                            </div>
                            <div className="mt-14">
                            {/* <div className="dhb-eds"> */}
                                {/* <a href="#">Edit</a> */}
                                {
                                    !isJoined &&
                                    <button onClick={this.handleOpenModal} className="font-bold uppercase px-8 mx-6 py-3 bg-btn_bgcolor text-white_color rounded-lg text-sm">Join Clan</button>
                                }
                                {this.state.openModal && <JoinClanModal closeModal={this.handleCloseModal } />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClanInfo