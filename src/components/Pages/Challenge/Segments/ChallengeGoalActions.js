import './../../../styles/challenge.css';
import React from 'react';

import Switch from "react-switch";

import ReactModal from 'react-modal';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faImage, faLink, faPaperPlane, faEllipsisV, faThumbsUp, faThumbsDown, faCommentAlt, faBars, faPlus} from '@fortawesome/free-solid-svg-icons'

class ChallengeGoalActions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isactive: this.props.isactive,
            addActionModal: true,
            actionCurrentStep: 1,
            stageTwoSelectedOption: ''
        }

        this.openAddActionModal = this.openAddActionModal.bind(this);
    }

    addActivity(){
        console.log("shiw -> ", this.activity_list);
    }

    openAddActionModal(){
      this.setState({addActionModal: !this.state.addActionModal})
    }




    render () {
        const showSteps = () => {
          if(this.state.actionCurrentStep == 1){
            return (
              <div className="d-action-current-step step-one-selected">
                <div className="d-action-step-items">
                  <div className="d-action-step-image">
                    <img src="/img/reward_image.png" alt="" />
                  </div>
                  <div className="d-action-step-name">
                    <input type="text" placeholder="Action Name"/>
                  </div>
                  <div className="d-action-step-one-options">
                    <div className="cg-label">
                        <div className="cgl-name">Social Actions</div>
                        <div className="cgl-doptions"><Switch height={20} width={40} onChange={this.onSocialActionChange} checked={this.state.socialActionSLide} /></div>
                    </div>
                    <div className="cg-input dactivity">
                        <div className="subheader">Actions that help spread the word, build awareness and increase challenge engagement</div>
                    </div>
                  </div>
                </div>
                <div className="d-action-steps-options">
                  <button className="d-cancel-action">Cancel</button>
                  <button className="d-proceed-action">Next</button>
                </div>
              </div>
            );
          }

          if(this.state.actionCurrentStep == 2){
            return (
              <div className="d-action-current-step step-two-selected">
                <div className=""></div>
              </div>
            );
          }
        }
        return (
          <div className="cg-input dactivity">
              <div className="subheader">Specify the actions needed to complete the goal.</div>
              <div className="activity-list">
                  <div className="activity-items">
                      <div className="ac-item">
                          <div className="dleftitems">
                              <span className="dicon"><FontAwesomeIcon icon={faBars} /></span>
                              <span className="dtext">Drink 8 glasses of water everyday</span>
                          </div>
                          <div className="drightitems">
                              <span className="doptions"><FontAwesomeIcon icon={faEllipsisV} /></span>
                          </div>
                      </div>
                      <div className="ac-item">
                          <div className="dleftitems">
                              <span className="dicon"><FontAwesomeIcon icon={faBars} /></span>
                              <span className="dtext">Drink 8 glasses of water everyday</span>
                          </div>
                          <div className="drightitems">
                              <span className="doptions"><FontAwesomeIcon icon={faEllipsisV} /></span>
                          </div>
                      </div>
                      <div className="ac-item">
                          <div className="dleftitems">
                              <span className="dicon"><FontAwesomeIcon icon={faBars} /></span>
                              <span className="dtext">Drink 8 glasses of water everyday</span>
                          </div>
                          <div className="drightitems">
                              <span className="doptions"><FontAwesomeIcon icon={faEllipsisV} /></span>
                          </div>
                      </div>
                  </div>
                  <div className="activity-add-button">
                      <div className="daddactions" onClick={() => this.openAddActionModal()}>
                          <span className="dicon"><FontAwesomeIcon icon={faPlus} /></span>
                          <span className="dtext">Add an action</span>
                      </div>
                      <ReactModal
                          isOpen={this.state.addActionModal}
                          contentLabel="Example Modal"
                          className="add-action-modal"
                          ariaHideApp={false}
                      >
                          <div className="d-add-action-modal-inner">
                              <h4>Actions</h4>
                              <div className="d-social-settings-list">
                                  {showSteps()}
                              </div>
                          </div>
                      </ReactModal>
                  </div>
              </div>
              <div className="ditem-flow"><div className="dflowtext">Must complete actions in order</div> <Switch height={20} width={40} onChange={this.handleChange} checked={this.state.checked} /></div>
          </div>
        )
    }
}

export default ChallengeGoalActions
