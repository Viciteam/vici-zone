import './../../../styles/challenge.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

class StepTwo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isactive: this.props.isactive,
            activepart: 'title',

        }


        
    }
    

    render () {
        
        return (
            <div className="cgoal-center-inner">
                this is step 2
            </div>
        )
    }
}

export default StepTwo