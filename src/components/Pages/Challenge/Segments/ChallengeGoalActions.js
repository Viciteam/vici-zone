import './../../../styles/challenge.css';
import React from 'react';

import Switch from "react-switch";

import ReactModal from 'react-modal';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisV, faBars, faPlus, faTimes} from '@fortawesome/free-solid-svg-icons'

class ChallengeGoalActions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isactive: this.props.isactive,
            addActionModal: true,
            actionsInOrder: false,
            actionCurrentStep: 2,
            stageTwoSelectedOption: '',
            simplipifyAction: false,
            setAsRequired: false,
            showInstructionForm: false,
			VerifyAction: false,
			actionPoints: true,
			integratedItems: [],
			customTrackingItems: [],
			integrationMeasurement: 'meter'
        }

        this.openAddActionModal = this.openAddActionModal.bind(this);
        this.onSimplfyActionChange = this.onSimplfyActionChange.bind(this);
        this.onRequiredActionChange = this.onRequiredActionChange.bind(this);
        this.AddNewInstructions = this.AddNewInstructions.bind(this);
        this.CloneNewInstructions = this.CloneNewInstructions.bind(this);
        this.goToNextStep = this.goToNextStep.bind(this);
        this.addIntegratedItem = this.addIntegratedItem.bind(this);
        this.changeIntegrationMeasurement = this.changeIntegrationMeasurement.bind(this);
        this.addCustomTracking = this.addCustomTracking.bind(this);
        this.enableVerifyAction = this.enableVerifyAction.bind(this);
        this.enableActionPoints = this.enableActionPoints.bind(this);
    }

    addActivity(){
        console.log("shiw -> ", this.activity_list);
    }

    openAddActionModal(){
      this.setState({addActionModal: true})
    }

    closeAddActionModal(){
      this.setState({addActionModal: false})
    }

    onSimplfyActionChange(){
      this.setState({simplipifyAction: !this.state.simplipifyAction})
    }

    onRequiredActionChange(){
      this.setState({setAsRequired: !this.state.setAsRequired})
    }

    AddNewInstructions(){
      this.setState({showInstructionForm: true})
    }

    CloneNewInstructions(){
      this.setState({showInstructionForm: false})
    }
    
    goToNextStep(toStep){
      this.setState({actionCurrentStep: toStep})
    }

	addIntegratedItem(event, item){
		console.log('show item ->', item);
		console.log('show selected ->', event.target.checked);
		let integrated_items = this.state.integratedItems;

		if(event.target.checked){
			integrated_items.push(item);
		} else {
			let item_index = integrated_items.indexOf(item);
			integrated_items.splice(item_index, 1);
		}

		this.setState({integratedItems: integrated_items})
	}

	addCustomTracking(event, item){
		console.log('show item ->', item);
		console.log('show selected ->', event.target.checked);
		let custom_tracking = this.state.customTrackingItems;

		if(event.target.checked){
			custom_tracking.push(item);
		} else {
			let item_index = custom_tracking.indexOf(item);
			custom_tracking.splice(item_index, 1);
		}

		this.setState({customTrackingItems: custom_tracking})
	}

	enableVerifyAction(){
		this.setState({VerifyAction: !this.state.VerifyAction})
	}

	enableActionPoints(){
		this.setState({actionPoints: !this.state.actionPoints})
	}

	changeIntegrationMeasurement(event){
		// console.log('selected measurement ->', event.target.value);
		this.setState({integrationMeasurement: event.target.value})
	}

    render () {
        const showSteps = () => {
        	let showInstrucitionsField = () => {
				if(this.state.showInstructionForm){
					return (
						<div class="d-add-instructions-fields">
							<div class="d-add-header">Instruction</div>
							<div class="d-add-close">
								<button onClick={() => this.CloneNewInstructions()}><FontAwesomeIcon icon={faTimes} /></button>
							</div>
							<div class="d-add-instruction-textarea">
								<textarea placeholder="Add instruction on how to do this action"></textarea>
							</div>
							<div class="d-link-options">
								<div class="d-link-option-checkarea">
									<input type="checkbox" />
								</div>
								<div class="d-link-option-text">Action Link</div>
								<div class="d-link-option-input">
									<input type="text" placeholder="www.facebookpage.com" />
								</div>
							</div>
						</div>
					);
				}

				if(!this.state.showInstructionForm){
					return (
						<div class="d-add-instructions">
							<button onClick={() => this.AddNewInstructions()}><FontAwesomeIcon icon={faPlus} /> <span>Add instruction and link</span></button>
						</div>
					);
				}
			}
			
			let pointsEveryWhen = () => {
				let pointlist = Array.from({length:5},(v,k)=>(k+1)*10);
				console.log('point list -> ', pointlist);

				let dmeasure = this.state.integrationMeasurement;
				
				console.log('selected measure -> ', dmeasure);
				return pointlist.map(function (mark, i) {
					return <option
						key={mark}
						value={mark}>
						{mark + " "+dmeasure}
					</option>
				})
					
			}

			let integrated_fields = () => {
				if(this.state.integratedItems.length > 0){
					let integratedItems = this.state.integratedItems;
					// if google fit exist
					let isGoogleFitSelected = integratedItems.indexOf('google_fit');
					let googleFitInfo = (isGoogleFitSelected >= 0 ? <div className="d-integrated-selected-item"><img src="/img/logos_google-fit.png" alt="" /> <span className="d-integ-item">Google Fit</span></div> : '');
					
					// if apple health exist
					let isAppleHealthSelected = integratedItems.indexOf('apple_health');
					let AppleHealthInfo = (isAppleHealthSelected >= 0 ? <div className="d-integrated-selected-item"><img src="/img/ant-design_apple-filled.png" alt="" /> <span className="d-integ-item">Apple Health</span></div> : '');

					return (
						<div className="d-selected-integration">
							{googleFitInfo}
							{AppleHealthInfo}
							<div className="d-integration-measurement">
								<h3>Measurement</h3>
								<div className="d-number-form">
									<input type="number" />
								</div>
								<div className="d-number-measurement">
									<select onChange={(e) => this.changeIntegrationMeasurement(e)} defaultValue={this.state.integrationMeasurement}>
										<option value="meter">Meter</option>
										<option value="km">Km</option>
										<option value="miles">Miles</option>
									</select>
								</div>
							</div>
							<div className="d-integration-measurement">
								<h3>Points</h3>
								<div className="d-number-points">
									<label htmlFor="">Give points every:</label>
									<select>
										{pointsEveryWhen()}
									</select>
								</div>
							</div><div className="d-integration-customize">
								<button>Customize point scale</button>
							</div>
						</div>
					);
				} else {
					return (
						<div className="d-integrated-item no-item-message">No integrations selected</div>
					);
				}
			}

			let showVerification = () => {
				if(this.state.enableVerifyAction){
					return (
						<div className="manual_verify">
							<select>
								<option value="manually_verify">Manually verify</option>
								<option value="create_quiz">Create quiz</option>
							</select>
						</div>
					);
				}
			}

			let custom_tracking = () => {
				if(this.state.customTrackingItems.length > 0){
					let customTrackingItems = this.state.customTrackingItems;
					// if google fit exist
					let isViaLinkSelected = customTrackingItems.indexOf('via_link');
					let viaLink = (isViaLinkSelected >= 0 ? <div className="d-integrated-selected-item"><img src="/img/link.png" alt="" /> <span className="d-integ-item">Via Link</span></div> : '');
					
					// if apple health exist
					let isWriteActicleSelected = customTrackingItems.indexOf('write_article');
					let writeArticle = (isWriteActicleSelected >= 0 ? <div className="d-integrated-selected-item"><img src="/img/notes.png" alt="" /> <span className="d-integ-item">Write Article</span></div> : '');

					let isUploadSelected = customTrackingItems.indexOf('upload');
					let upload = (isUploadSelected >= 0 ? <div className="d-integrated-selected-item"><img src="/img/upload.png" alt="" /> <span className="d-integ-item">Upload</span></div> : '');

					let isTextInputSelected = customTrackingItems.indexOf('text_input');
					let textInput = (isTextInputSelected >= 0 ? <div className="d-integrated-selected-item"><img src="/img/text.png" alt="" /> <span className="d-integ-item">Text Input</span></div> : '');

					let isViaCameraSelected = customTrackingItems.indexOf('via_camera');
					let viaCamera = (isViaCameraSelected >= 0 ? <div className="d-integrated-selected-item"><img src="/img/camera.png" alt="" /> <span className="d-integ-item">Via Camera</span></div> : '');

					return (
						<div className="d-selected-integration">
							<div className="d-selected-custom-tracking">
								{viaLink}
								{writeArticle}
								{upload}
								{textInput}
								{viaCamera}
							</div>
							<div className="d-verify-action">
								<div className="cg-label">
									<div className="cgl-name">Verify action tracking</div>
									<div className="cgl-doptions"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.enableVerifyAction} checked={this.state.VerifyAction} /></div>
								</div>
								{showVerification()}
							</div>
						</div>
					);
				} else {
					return (
						<div className="d-integrated-item no-item-message">No integrations selected</div>
					);
				}
			} 

			let pointData = () => {
				if(this.state.actionPoints){
					return (
						<div className="d-action-points">
							<div className="d-action-points-left">
								<label htmlFor="">Number of points</label>
								<input type="number" />
							</div>
							<div className="d-action-points-right">
								<button>Randomize point scale</button>
							</div>
						</div>
					);
				}
			}

			if(this.state.actionCurrentStep === 1){
				return (
					<div className="d-action-current-step step-one-selected">
						<div className="d-action-step-items">
							<div className="d-action-step-image">
								<img src="/img/reward_image.png" alt="" />
							</div>
							<div className="d-action-step-name">
								<input type="text" placeholder="Action Name"/>
							</div>
							<div class="d-actions-instructions">
								{showInstrucitionsField()}
							</div>
							<div className="d-action-step-one-options">
								<div className="cg-label">
									<div className="cgl-name">Simplify actions</div>
									<div className="cgl-doptions"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.onSimplfyActionChange} checked={this.state.simplipifyAction} /></div>
								</div>
								<div className="cg-input dactivity">
									<div className="subheader">Create actions with ease, these actions won’t need any tracking and can be marked as done with one click.</div>
								</div>
							</div>
							<div className="d-action-step-one-options">
								<div className="cg-label">
									<div className="cgl-name">Set as required action</div>
									<div className="cgl-doptions"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.onRequiredActionChange} checked={this.state.setAsRequired} /></div>
								</div>
							</div>
						</div>
						<div className="d-action-steps-options">
							<button className="d-cancel-action" onClick={() => this.closeAddActionModal()}>Cancel</button>
							<button className="d-proceed-action" onClick={() => this.goToNextStep(2)}>Next</button>
						</div>
					</div>
				);
			}

			if(this.state.actionCurrentStep === 2){
				return (
					<div className="d-action-current-step step-two-selected">
						<div className="d-action-step-items d-action-step-two">
							<div className="d-action-sidebar">
								<h3>Action tracking</h3>
								<div className="d-action-sidebar-desc">How can participants verify their action completion?	</div>
								<div className="d-action-sidebar-item">
									<div className="d-sideitem-label">Integrated apps</div>
									<div className="d-sideitem-content">
										<div className="d-sideitem-single"><span className="d-integ-checkbox"><input type="checkbox" name="integrate_item" onChange={(e) => this.addIntegratedItem(e, 'google_fit')} /></span> <img src="/img/logos_google-fit.png" alt="" /> <span className="d-integ-item">Google Fit</span></div>
										<div className="d-sideitem-single"><span className="d-integ-checkbox"><input type="checkbox" name="integrate_item" onChange={(e) => this.addIntegratedItem(e, 'apple_health')} /></span> <img src="/img/ant-design_apple-filled.png" alt="" /> <span className="d-integ-item">Apple Health</span></div>
										<div className="d-sideitem-single suggestive-item">Suggest Integration</div>
									</div>
								</div>
								<div className="d-action-sidebar-item">
									<div className="d-sideitem-label">Custom Tracking</div>
									<div className="d-sideitem-content">
										<div className="d-sideitem-single"><span className="d-integ-checkbox"><input type="checkbox" name="custom_tracking" onChange={(e) => this.addCustomTracking(e, 'via_link')} /></span><img className="d-tracking-image" src="/img/link.png" alt="" /> Via Link</div>
										<div className="d-sideitem-single"><span className="d-integ-checkbox"><input type="checkbox" name="custom_tracking" onChange={(e) => this.addCustomTracking(e, 'write_article')} /></span><img className="d-tracking-image" src="/img/notes.png" alt="" /> Write an Article</div>
										<div className="d-sideitem-single"><span className="d-integ-checkbox"><input type="checkbox" name="custom_tracking" onChange={(e) => this.addCustomTracking(e, 'upload')} /></span><img className="d-tracking-image" src="/img/upload.png" alt="" /> Upload</div>
										<div className="d-sideitem-single"><span className="d-integ-checkbox"><input type="checkbox" name="custom_tracking" onChange={(e) => this.addCustomTracking(e, 'text_input')} /></span><img className="d-tracking-image" src="/img/text.png" alt="" /> Text Input</div>
										<div className="d-sideitem-single"><span className="d-integ-checkbox"><input type="checkbox" name="custom_tracking" onChange={(e) => this.addCustomTracking(e, 'via_camera')} /></span><img className="d-tracking-image" src="/img/camera.png" alt="" /> Via Camera</div>
										<div className="d-sideitem-single suggestive-item"><span><input type="checkbox" /></span>Import from social media</div>
									</div>
								</div>
							</div>
							<div className="d-action-maincontent">
								<div className="d-main-content">
									<div className="d-maincontent-label">Integrated Apps</div>
									<div className="d-maincontent-items">
										{integrated_fields()}

									</div>
								</div>
								<div className="d-main-content">
									<div className="d-maincontent-label">Custom Tracking</div>
									<div className="d-maincontent-items">
										{custom_tracking()}
									</div>
								</div>
								<div className="d-main-content no-border">
									<div className="d-maincontent-label">
										<div className="cg-label d-points-based">
											<div className="cgl-name">Points</div>
											<div className="cgl-doptions"><Switch onColor='#FFCA28' onColor='#FFCA28' height={20} width={40} onChange={this.enableActionPoints} checked={this.state.actionPoints} /></div>
										</div>
									</div>
									<div className="d-maincontent-items">
										{pointData()}
									</div>
								</div>
								<div className="d-main-content no-border">
									<div className="total-action-points">
										<div className="total-action-points-left">&nbsp;</div>
										<div className="total-action-points-right">
											<label htmlFor="">Total Points</label>
											<input type="text" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="d-action-steps-options">
							<button className="d-cancel-action" onClick={() => this.goToNextStep(1)}>Back</button>
							<button className="d-proceed-action">Save and Add Action</button>
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
                          <span className="dtext">add action</span>
                      </div>
                      <ReactModal
                          isOpen={this.state.addActionModal}
                          contentLabel="Example Modal"
                          className="add-action-modal"
                          ariaHideApp={false}
                      >
                          <div className="d-add-action-modal-inner d-rewards-settings-modal d-social-modal-size" style={{width: '690px'}}>
                              <h4>Actions</h4>
                              <div className="d-social-settings-list">
                                  {showSteps()}
                              </div>
                          </div>
                      </ReactModal>
                  </div>
              </div>
              <div className="ditem-flow"><div className="dflowtext">Must complete actions in order</div> <Switch onColor='#FFCA28' height={20} width={40} onChange={this.handleChange} checked={this.state.checked} /></div>
          </div>
        )
    }
}

export default ChallengeGoalActions
