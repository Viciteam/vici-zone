import './../../../styles/challenge.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

class ShowActivity extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isactive: this.props.isactive
        }
    }

    render () {
        const actionlabel = this.props.info.action.replace(/_/g, ' ');
        return (
            <div className="dpost-list-item activity-item">
                <div className="dpost-list-item">
                    <div className="dpost-list-item-header">
                        <div className="dpost-list-image">
                            <img src="/img/user_main.jpg" alt="" />
                        </div>
                        <div className="dpost-list-text">
                            <h3>{this.props.info.name} - <span className="actionpart">{actionlabel}</span></h3>
                            <div className="dnumber">1hr ago</div>
                        </div>
                        <div className="dpost-list-dots">
                            &nbsp;
                        </div>
                    </div>
                </div> 
            </div> 
        )
    }
}

export default ShowActivity