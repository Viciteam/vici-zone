import './../../../styles/challenge.css';
import React from 'react';

import Switch from "react-switch";

import ReactModal from 'react-modal';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faImage, faLink, faPaperPlane, faEllipsisV, faThumbsUp, faThumbsDown, faCommentAlt, faBars, faPlus, faAngleDown} from '@fortawesome/free-solid-svg-icons'

class ChallengeGoalActions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isactive: this.props.isactive,
            addActionModal: true,
            actionCurrentStep: 2,
            stageTwoSelectedOption: '',
            socialActionSLide: false,
            setAsRequired: false,
            integrations: [],
            customTracking: []
        }

        this.openAddActionModal = this.openAddActionModal.bind(this);
        this.addNewAction = this.addNewAction.bind(this);
        this.onSocialActionChange = this.onSocialActionChange.bind(this);
        this.onSetAsRequired = this.onSetAsRequired.bind(this);
        this.onSetNewIntegrationItem = this.onSetNewIntegrationItem.bind(this);
    }

    addActivity(){
        console.log("shiw -> ", this.activity_list);
    }

    openAddActionModal(){
      this.setState({addActionModal: !this.state.addActionModal})
    }

    onSocialActionChange(){
      this.setState({socialActionSLide: !this.state.socialActionSLide})
    }

    onSetAsRequired(){
      this.setState({setAsRequired: !this.state.setAsRequired})
    }

    addNewAction(){
      console.log('add action ->');
    }

    onSetNewIntegrationItem(target, checked, position){
      let modePosition;
      if(position == 'integration'){
        modePosition = this.state.integrations;
      } else if(position == 'custom_tracking'){
        modePosition = this.state.customTracking;
      }

      // if true push
      if(checked){
        modePosition.push(target);
      }

      // if false pop
      if(!checked){
        var index = modePosition.indexOf(target)
        if (index !== -1) {
          modePosition.splice(index, 1);
        }
      }

      if(position == 'integration'){
        this.setState({integrations: modePosition})
      } else if(position == 'custom_tracking'){
        this.setState({customTracking: modePosition})
      }
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
                    <div className="d-add-insctuctions-and-link">
                      <button><FontAwesomeIcon icon={faPlus} /> <span>Add instruction and link</span></button>
                    </div>
                  </div>
                  <div className="d-action-step-one-options">
                    <div className="cg-label">
                        <div className="cgl-name">Social Actions</div>
                        <div className="cgl-doptions"><Switch height={20} width={40} onChange={this.onSocialActionChange} checked={this.state.socialActionSLide} /></div>
                    </div>
                    <div className="cg-input dactivity">
                        <div className="subheader">Create actions with ease, these actions won’t need any tracking and can be marked as done with one click.</div>
                    </div>
                  </div>

                  <div className="d-action-step-one-options">
                    <div className="cg-label">
                        <div className="cgl-name">Set as required action</div>
                        <div className="cgl-doptions"><Switch height={20} width={40} onChange={this.onSetAsRequired} checked={this.state.setAsRequired} /></div>
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

            let integrations = () => {
              if(this.state.integrations.length > 0){
                return (
                  <div className="has-data-selected">
                    <div className="dm-integrated-values">
                        {
                          this.state.integrations.map((item, index) =>
                            <div className="dm-integrated-item">{item}</div>
                          )
                        }
                    </div>
                    <div className="dm-integrated-measurements">
                      <h4>Measurements</h4>
                      <div className="d-number-main">
                        <input type="text" />
                      </div>
                      <div className="d-number-metric">
                        <select name="" id="">
                          <option value="">KM</option>
                        </select>
                      </div>
                    </div>
                    <div className="dm-integrated-points">
                      <h4>points</h4>
                      <div className="d-number-full">
                      <label htmlFor="">Give points every:</label>
                        <select name="" id="">
                          <option value="">1 KM</option>
                          <option value="">10 KM</option>
                          <option value="">20 KM</option>
                          <option value="">30 KM</option>
                          <option value="">40 KM</option>
                          <option value="">50 KM</option>
                        </select>
                      </div>
                      <div className="dm-customize-point-scale">
                        <button>Customize point scale</button>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="no-data-selected">No Integration Selected</div>
                );
              }
            }
            return (
              <div className="d-action-current-step step-two-selected">
                <div className="d-action-step-items">
                  <div className="d-action-step-menu">
                    <h2>Action tracking</h2>
                    <div className="dmenu-subheader">How can participants verify their action completion?</div>
                    <div className="dmenu-menu-item">
                      <div className="dmtitle">
                        <div className="dm-main-title">Integrated apps</div>
                        <div className="dm-main-icon"><FontAwesomeIcon icon={faAngleDown} /></div>
                      </div>
                      <div className="dm-items">
                        <div className="dm-item">
                          <div className="dm-item-checkbox"><input type="checkbox" name="" id="" onChange={(e) => this.onSetNewIntegrationItem('google fit', e.target.checked, 'integration')} /></div>
                          <div className="dm-item-text">Google Fit</div>
                        </div>
                        <div className="dm-item">
                          <div className="dm-item-checkbox"><input type="checkbox" name="" id="" onChange={(e) => this.onSetNewIntegrationItem('apple health', e.target.checked, 'integration')} /></div>
                          <div className="dm-item-text">Apple Health</div>
                        </div>
                        <div><button>Suggest Integration</button></div>
                      </div>
                    </div>
                    <div className="dmenu-menu-item">
                      <div className="dmtitle">
                        <div className="dm-main-title">Custom Tracking</div>
                        <div className="dm-main-icon"><FontAwesomeIcon icon={faAngleDown} /></div>
                      </div>
                      <div className="dm-items">
                        <div className="dm-item">
                          <div className="dm-item-checkbox"><input type="checkbox" name="" id="" /></div>
                          <div className="dm-item-text">Via Link</div>
                        </div>
                        <div className="dm-item">
                          <div className="dm-item-checkbox"><input type="checkbox" name="" id="" /></div>
                          <div className="dm-item-text">Write an Article</div>
                        </div>
                        <div className="dm-item">
                          <div className="dm-item-checkbox"><input type="checkbox" name="" id="" /></div>
                          <div className="dm-item-text">Upload</div>
                        </div>
                        <div className="dm-item">
                          <div className="dm-item-checkbox"><input type="checkbox" name="" id="" /></div>
                          <div className="dm-item-text">Text Input</div>
                        </div>
                        <div className="dm-item">
                          <div className="dm-item-checkbox"><input type="checkbox" name="" id="" /></div>
                          <div className="dm-item-text">Via Camera</div>
                        </div>
                        <div className="dm-item">
                          <div className="dm-item-checkbox"><input type="checkbox" name="" id="" /></div>
                          <div className="dm-item-text">Import from social media</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-action-step-content">
                    <div className="d-action-step-inner">
                      <div className="d-step-action-step">
                        <div className="d-step-action-title">
                          <div className="dm-main-title">Integrated Apps</div>
                          <div className="dm-main-icon"><FontAwesomeIcon icon={faAngleDown} /></div>
                        </div>
                        <div className="dm-integrated-tems">
                          {integrations()}
                        </div>
                      </div>
                      <div className="d-step-action-step">
                        <div className="d-step-action-title">
                          <div className="dm-main-title">Custom Tracking</div>
                          <div className="dm-main-icon"><FontAwesomeIcon icon={faAngleDown} /></div>
                        </div>
                      </div>
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
                          <div className={"d-add-action-modal-inner " + (this.state.actionCurrentStep == 2 ? 'd-add-step-two' : "")}>
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
