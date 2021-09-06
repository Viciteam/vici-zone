import './../../../styles/profiles.css';
import React from 'react';

class TopActivities extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo
        }
    }

    render () {
        return (
            <div className="top-activities-inner">
                <div className="ta-inner">
                    <h2 className="top-header">Top Activities</h2>
                    <div className="ta-list">
                        <div class="ta-list-item">&nbsp;</div>
                        <div class="ta-list-item">&nbsp;</div>
                        <div class="ta-list-item">&nbsp;</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopActivities