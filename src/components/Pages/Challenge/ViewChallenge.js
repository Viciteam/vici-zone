import './../../styles/challenge.css';
import React from 'react';


class ViewChallenge extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo
        }
    }

    render () {
        return (
            <div className="challenges-page-inner">
                <div className="dview-left">
                    <div className="dv-left-inner">
                        <div className="dvl-main-sidebar">Main side</div>
                        <div className="dvl-main-sidebar">rewards and penalties</div>
                        <div className="dvl-main-sidebar">invite link</div>
                    </div>
                </div>
                <div className="dview-right">
                    <div className="dview-right-inner">
                        <div className="dvr-main-action">actions</div>
                        <div className="dvr-main-progress">progress</div>
                        <div className="dvr-main-participants-progress">participants</div>
                        <div className="dvr-main-comments">comments</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewChallenge