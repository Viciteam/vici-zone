import './../../../styles/challenge.css';
import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'

class WatchRewards extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isactive: this.props.isactive
        }
    }

    render () {
        return (
            <div className="watch-rewards-inner">
                <div className="watch-rewards-header">Rewards</div>
                <div className="watch-rewards-items">
                    <div className="wr-item">
                        <div className="diconpart"><img src="/img/coil.png" alt="" /></div>
                        <div className="dtextpart">10 Vici Tokens</div>
                        <div className="dlockpart"><FontAwesomeIcon icon={faLock} /></div>
                    </div>
                    <div className="wr-item">
                        <div className="diconpart"><img src="/img/coil.png" alt="" /></div>
                        <div className="dtextpart">10 Vici Tokens</div>
                        <div className="dlockpart"><FontAwesomeIcon icon={faLock} /></div>
                    </div>
                </div>
                <div className="watch-penalty-header">Penalty</div>
                <div className="watch-penalty-items">
                    <div className="wr-item">
                        <div className="diconpart"><img src="/img/coil.png" alt="" /></div>
                        <div className="dtextpart">10 Vici Tokens</div>
                        <div className="dlockpart"><FontAwesomeIcon icon={faLock} /></div>
                    </div>
                    <div className="wr-item">
                        <div className="diconpart"><img src="/img/coil.png" alt="" /></div>
                        <div className="dtextpart">10 Vici Tokens</div>
                        <div className="dlockpart"><FontAwesomeIcon icon={faLock} /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WatchRewards