import './../../styles/profiles.css';
import React from 'react';

class ClanInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: this.props.active
        }
    }

    render () {
        return (
            <div className="dheaderbase">
                <div className="dhb-inner">
                    <div className="dhb-image">
                        <div className="img-place">
                            <img src="/img/prof_icon.png"/>
                        </div>
                    </div>
                    <div className="dhb-info">
                        <h2>Running Club</h2>
                        <div className="info-desc">We help you complete your running exercise! Join us!</div>
                    </div>
                    <div className="dhb-eds"><a href="#">Edit</a></div>
                </div>
            </div>
        )
    }
}

export default ClanInfo