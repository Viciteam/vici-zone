import './../../../styles/challenge.css';
import React from 'react';

import ChallengeGoalActions from './../Segments/ChallengeGoalActions'
import AddSocialAction from './../Segments/AddSocialAction'
import ChallengePenalties from './../Segments/ChallengePenalties'
import Switch from "react-switch";
import ReactModal from 'react-modal';
import ReactTooltip from 'react-tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBars, faEllipsisV, faGlobeEurope, faMapMarkerAlt, faImage, faCrosshairs, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

class StepTwo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isactive: this.props.isactive,
            activepart: 'title',
            mainGoalValue: 'single', 
            convertActionToPoints: false,
            allowPenalty: false,
            convertActionToPoints: false,
        }

        this.createActive = this.createActive.bind(this);
        this.toogleMainGoalValues = this.toogleMainGoalValues.bind(this);

        this.toogleConvertActionToPoints = this.toogleConvertActionToPoints.bind(this);
        


        
    }

    createActive(setactive){
        console.log('Type ->', setactive);
        this.setState({activepart: setactive})
    }

    toogleMainGoalValues(toogleTo){
        this.setState({mainGoalValue: toogleTo});
        // this.populateInput('goal_type', toogleTo);
        this.createActive('two_main_goal')
    } 

    toogleConvertActionToPoints(){
        let newState = !this.state.convertActionToPoints;
        this.setState({convertActionToPoints: newState});
        
        // this.populateInput('convert_action_to_points', newState)
    }

    
    

    render () {
        return (
            <div className="cgoal-center-inner">
                <h2>How to Measure the Goal?</h2>

                <div className={"cg-item " + (this.state.activepart === 'two_main_goal' ? 'active_item' : '')} onFocus={() => this.createActive('two_main_goal') }>
                    <div className="cg-label">Main Goal</div>
                    <div className="cg-input">
                        <div className="dmultiple">
                            <div className={"dm-left toogle-clickable " + (this.state.mainGoalValue === 'single' ? 'active_main_goal_item' : '')} onClick={() => this.toogleMainGoalValues('single')}>
                                <div className="dradiobt">
                                    {/* <input type="radio" name="gender" checked={this.state.mainGoalValue ==== "single"}/> */}
                                    <div className={"dradiobase " + (this.state.mainGoalValue === 'single' ? 'active_radio_main_itemn' : '')}>
                                    <div className={"dradio-inner " + (this.state.mainGoalValue === 'single' ? 'active_radio_itemn' : '')}>&nbsp;</div>
                                    </div>
                                </div>
                                <div className="dtextone">
                                    Single Goal
                                </div>
                            </div>
                            <div className={"dm-left toogle-clickable " + (this.state.mainGoalValue === 'multiple' ? 'active_main_goal_item' : '')} onClick={() => this.toogleMainGoalValues('multiple')}>
                                <div className="dradiobt">
                                    {/* <input type="radio" name="gender" checked={this.state.mainGoalValue ==== "multiple"}/> */}
                                    <div className={"dradiobase " + (this.state.mainGoalValue === 'multiple' ? 'active_radio_main_itemn' : '')}>
                                    <div className={"dradio-inner " + (this.state.mainGoalValue === 'multiple' ? 'active_radio_itemn' : '')}>&nbsp;</div>
                                    </div>
                                </div>
                                <div className="dtextone ">
                                    Multiple Milestones
                                </div>
                            </div>
                        </div>
                        <div className="dsdesc">Description</div>
                        <div className="dsdesc">Single Goal. Only has one goal with multiple actions, enable multiple milestones to create milestones.</div>
                        <input type="text" placeholder="What is the main goal? E.g. Be physically fit" />
                    </div>
                </div>

                <div className={"cg-item " + (this.state.activepart === 'two_actions' ? 'active_item' : '')} onFocus={() => this.createActive('two_actions') }>

                    <div className="cg-label">Actions</div>
                    <ChallengeGoalActions />
                </div>

                <div className={"cg-item " + (this.state.activepart === 'two_social_actions' ? 'active_item' : '')} onFocus={() => this.createActive('two_social_actions') }>
                    <AddSocialAction />
                </div>

                <div className={"cg-item " + (this.state.activepart === 'two_convert_actions' ? 'active_item' : '')} onFocus={() => this.createActive('two_convert_actions') }>
                    <div className="cg-label">
                        <div className="cgl-name">Convert all actions into points</div>
                        <div className="cgl-doptions"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleConvertActionToPoints} checked={this.state.convertActionToPoints} /></div>
                    </div>
                    <div className="cg-input dactivity">
                        <div className="subheader">Set how many points participant can get for each action</div>
                    </div>
                </div>

                <div className={"cg-item " + (this.state.activepart === 'two_penalty' ? 'active_item' : '')} onFocus={() => this.createActive('two_penalty') }>
                    <ChallengePenalties />
                </div>

                <div className="dnext-button">
                    <button className="prev-arrow" onClick={() => this.proceedToPrev()}>Back</button>
                    <button className="next-arrow" onClick={() => this.proceedToNext()}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default StepTwo