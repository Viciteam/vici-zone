import './../../../styles/profiles.css';
import React from 'react';

class WallofAchievements extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo
        }
    }

    render () {
        return (
            <div className="wall-achievement-inner">
                <div className="wa-inner">
                    <h2 className="top-header">Wall of Achievement</h2>
                    <div className="list-of-achievement">
                        &nbsp;
                    </div>
                </div>
            </div>
        )
    }
}

export default WallofAchievements