import './../../../styles/profiles.css';
import React from 'react';

import { CircularProgressbar, CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
                        <div className="ta-list-item bluebar">
                            <div className="ta-inner">
                                <h3>Health & Firness</h3>
                                <div className="dcenter">
                                    <div className="dc-inner">
                                        <CircularProgressbarWithChildren value={70}>
                                            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                            <img className="dcenterimage" style={{ width: 60, marginTop: 0 }} src="/img/gym.png" alt="doge" />
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                                <div className="dnum">
                                    70%
                                </div>
                            </div>
                        </div>
                        <div className="ta-list-item yellowbar">
                            <div className="ta-inner">
                                <h3>Productivity</h3>
                                <div className="dcenter">
                                    <div className="dc-inner">
                                        <CircularProgressbarWithChildren value={25}>
                                            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                            <div className="dwhitebg">
                                                <img className="dcenterimage" style={{ width: 35, marginTop: 0 }} src="/img/readme.png" alt="doge" />
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                                <div className="dnum">
                                    25%
                                </div>
                            </div>
                        </div>
                        <div className="ta-list-item purplebar">
                            <div className="ta-inner">
                                <h3>Miscellaneous</h3>
                                <div className="dcenter">
                                    <div className="dc-inner">
                                        <CircularProgressbarWithChildren value={10}>
                                            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                            <div className="dwhitebg">
                                                <img className="dcenterimage" style={{ width: 38, marginTop: 0 }} src="/img/games.png" alt="doge" />
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                                <div className="dnum">
                                    10%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopActivities