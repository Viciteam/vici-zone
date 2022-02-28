import './../../../styles/challenge.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

class StepOne extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isactive: this.props.isactive,
            activepart: 'title',
            isChallengeTitle: '',
            isHashtags: '',
            isTagline: '',
            isInstructions: ''

        }

        this.createActive = this.createActive.bind(this);

        this.addChallengeTitle = this.addChallengeTitle.bind(this); 
        this.addChallengehashtag = this.addChallengehashtag.bind(this); 
        this.addChallengeTagline = this.addChallengeTagline.bind(this); 
        this.addChallengeInstuctions = this.addChallengeInstuctions.bind(this); 

        this.proceedToNext = this.proceedToNext.bind(this); 
        
    }

    createActive(setactive){
        console.log('Type ->', setactive);
        this.setState({activepart: setactive});
    }

    addChallengeTitle(value){
        this.setState({isChallengeTitle: value});
    }

    addChallengehashtag(value){
        this.setState({isHashtags: value});
    }

    addChallengeTagline(value){
        this.setState({isTagline: value});
    }

    addChallengeInstuctions(value){
        this.setState({isInstructions: value});
    }
    
    proceedToNext(){
        let finalInfo = {
            'title': this.state.isChallengeTitle,
            'hashtag': this.state.isHashtags,
            'tagline': this.state.isTagline,
            'instructions': this.state.isInstructions,
        }
        this.props.callBack(finalInfo);
    }

    render () {
        
        return (
            <div className="cgoal-center-inner">
                <h2>Title and Description</h2>
                <div className={"cg-item " + (this.state.activepart === 'title' ? 'active_item' : '')} onFocus={() => this.createActive('title') }>
                    <div className="cg-label">Challenge Title</div>
                    <div className="cg-input">
                        <input type="text" onChange={(e) => this.addChallengeTitle(e.target.value)} />
                    </div>
                </div>

                <div className={"cg-item " + (this.state.activepart === 'hashtags' ? 'active_item' : '')} style={(this.state.isChallengeTitle == "" ? {display: 'none'} : {})}  onFocus={() => this.createActive('hashtags') }>
                    <div className="cg-label">Hashtags</div>
                    <div className="cg-input">
                        <input type="text" onChange={(e) => this.addChallengehashtag(e.target.value)} />
                    </div>
                </div>

                <div className={"cg-item " + (this.state.activepart === 'tagline' ? 'active_item' : '')} style={(this.state.isHashtags == "" ? {display: 'none'} : {})}  onFocus={() => this.createActive('tagline') }>
                    <div className="cg-label">Tagline</div>
                    <div className="cg-input">
                        <textarea name="" id="" onChange={(e) => this.addChallengeTagline(e.target.value)}></textarea>
                    </div>
                </div>

                <div className={"cg-item " + (this.state.activepart === 'rules' ? 'active_item' : '')} style={(this.state.isTagline == "" ? {display: 'none'} : {})}  onFocus={() => this.createActive('rules') }>
                    <div className="cg-label">Instructions and rules</div>
                    <div className="cg-input">
                        <textarea name="" id="" onChange={(e) => this.addChallengeInstuctions(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="dnext-button" style={(this.state.isInstructions == "" ? {display: 'none'} : {})}>
                    <button className="next-arrow" onClick={() => this.proceedToNext()}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default StepOne