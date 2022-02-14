import './../../styles/challenge.css';
import React from 'react';

import Menu from './Segments/MenuContest'

import Switch from "react-switch";

import ReactModal from 'react-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBars, faEllipsisV, faGlobeEurope, faMapMarkerAlt, faImage, faCrosshairs, faLink, faUpload, faCameraRetro, faCog } from '@fortawesome/free-solid-svg-icons'

import { HexColorPicker } from "react-colorful";


class GoalContestOne extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo,
            activepart: 'title',
            stepnumber: 3,
            menuActive: 4,
            activityList: [{"activity": ""}],
            checked: false,
            showCountry: false,
            showState: false,
            showCity: false,
            showDropOptions: false,
            showOptionOne: true,
            showOptionTwo: false,
            selectedColor: '#03488d',
            selectedPreviewHeaderImage: '/img/prev-header.png',
            enableAction: false,
            selectedJudgeOption: 'me',
            judgeList: [
                {
                    id: 1,
                    name: 'John Peter Doe',
                    photo: '/img/dummy/1.png',
                    status: 1
                },
                {
                    id: 2,
                    name: 'Someone Doe',
                    photo: '/img/dummy/2.png',
                    status: 1
                },
                {
                    id: 3,
                    name: 'Jopnathan Someone Doe',
                    photo: '/img/dummy/3.png',
                    status: 0
                },
                {
                    id: 4,
                    name: 'John Doe',
                    photo: '/img/dummy/4.png',
                    status: 0
                },
                {
                    id: 5,
                    name: 'John Doe',
                    photo: '/img/dummy/5.png',
                    status: 1
                }
            ],
            singleRewardsList: [],
            linkCheck: false,
            uploadCheck: false,
            cameraCheck: false,
            showAddJudge: false,
            rewardWinner: true,
            isOpenRewardModal: false
        }


        this.createActive = this.createActive.bind(this);
        this.proceedToNext = this.proceedToNext.bind(this);
        this.proceedToPrev = this.proceedToPrev.bind(this);
        this.addActivity = this.addActivity.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.openCountry = this.openCountry.bind(this);
        this.showDropBase = this.showDropBase.bind(this);
        this.activateItem = this.activateItem.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.changePrevHeader = this.changePrevHeader.bind(this);
        this.enableActionChange = this.enableActionChange.bind(this);
        this.changeJudge = this.changeJudge.bind(this);
        this.inviteJudge = this.inviteJudge.bind(this);
        this.cancelInviteJudge = this.cancelInviteJudge.bind(this);
        this.changeWinnerOptions = this.changeWinnerOptions.bind(this);

        this.activity_list = [
            {"activity": ""}
        ];
    }

    createActive(setactive){
        console.log('Type ->', setactive);
        this.setState({activepart: setactive})
    }

    proceedToNext(){
        let stepnum = this.state.stepnumber + 1;
        let menuitem = this.state.menuActive + 1;
        this.setState({stepnumber: stepnum}) 
        this.setState({menuActive: menuitem}) 
    }

    proceedToPrev(){
        let stepnum = this.state.stepnumber - 1;
        let menuitem = this.state.menuActive - 1;
        this.setState({stepnumber: stepnum}) 
        this.setState({menuActive: menuitem}) 
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    enableActionChange(checked){
        // console.log('checked -> ', checked);
        this.setState({ enableAction: checked });
    }

    addActivity(){
        console.log("shiw -> ", this.activity_list);
    }

    resetCount(){
        this.setState({showCountry: false})
        this.setState({showState: false})
        this.setState({showCity: false})
    }

    openCountry(){
        this.resetCount();

        if(this.state.showCountry === false){
            this.setState({showCountry: true})
        } else {
            this.setState({showCountry: false})
        }
    }

    openState(){
        this.resetCount();

        if(this.state.showState === false){
            this.setState({showState: true})
        } else {
            this.setState({showState: false})
        }
    }

    openCity(){
        this.resetCount();

        if(this.state.showCity === false){
            this.setState({showCity: true})
        } else {
            this.setState({showCity: false})
        }
    }

    showDropBase(){
        if(this.state.showDropOptions === false){
            this.setState({showDropOptions: true})
        } else {
            this.setState({showDropOptions: false})
        }

    }

    activateItem(showOption){
        console.log('show option ->', showOption);

        if(showOption === "option_one"){
            this.setState({showOptionOne: true})
            this.setState({showOptionTwo: false})
        }

        if(showOption === "option_two"){
            this.setState({showOptionOne: false})
            this.setState({showOptionTwo: true})
        }
    }

    changeColor(vals){
        // console.log(vals);
        this.setState({selectedColor: vals});
    }

    changePrevHeader(selectedTodo){
        this.setState({selectedPreviewHeaderImage: selectedTodo});
    }

    changeJudge(selectJudge){
        console.log('select judge -> ', selectJudge);

        this.setState({selectedJudgeOption: selectJudge});

        this.createActive('item_decide_winner');
    }

    inviteJudge(){
        console.log('invite judge now');

        this.setState({showAddJudge: true});
    }

    cancelInviteJudge(){
        this.setState({showAddJudge: false});
    }

    changeWinnerOptions(checked){
        console.log('change winner type -> ', checked);

        this.setState({rewardWinner: checked});
    }

    addSingleReward(){
        let appendme = [];
        const listOfRewards = this.state.singleRewardsList;
        listOfRewards.push(appendme);
        this.setState({singleRewardsList: listOfRewards});
    }

    cancelOpenRewardModal(){
        this.setState({isOpenRewardModal: false});
    }

    openRewardModal(){
        this.setState({isOpenRewardModal: true});
    }

    render () {
        const tip_images = [
            '/img/challenge_tip1.png',
            '/img/challenge_tip2.png',
            '/img/challenge_tip3.png',
            '/img/challenge_tip3.png',
        ];

        const tip_message = [
            'Remember a good title catches your reader\'s interest. But don\'t just be a clickbait. Keep It Short, Simple, and on Point.',
            'Measurable goals are easier to gauge. Just choose and click!',
            'A goal with a deadline helps you achieve it much quicker.',
            'A goal with a deadline helps you achieve it much quicker.',
        ]

        const challenge_photo = [
            '/img/prev-header.png',
            '/img/prev-header1.png',
            '/img/prev-header2.png',
            '/img/prev-header3.png',
        ];

        const todoItems = challenge_photo.map((todo, index) =>
            // Only do this if items have no stable IDs
            <li key={index}>
                <div className={"dlistimage " + (this.state.selectedPreviewHeaderImage === todo ? 'ditem-active' : "")}>
                    <div className="dlimg-base" onClick={() => this.changePrevHeader(todo)} style={{background: 'url('+todo+') no-repeat center center'}}>&nbsp;</div>
                </div>
            </li>
        );

        const rewardOpts = () => {
            if(!this.state.rewardWinner){
                return (
                    <div className="d-reward-select d-reward-single">
                        <div className="d-reward-single-list">
                            <div className="activity-add-button">
                                <div className="daddactions" onClick={() => this.addSingleReward()}>
                                    <span className="dicon"><FontAwesomeIcon icon={faPlus} /></span>
                                    <span className="dtext">Add Reward</span>
                                </div>
                            </div>
                            {this.state.singleRewardsList.map((todo, index) => 
                                <div className="ac-item">
                                    <div className="dleftitems">
                                        <span className="dtext"><input type="text" placeholder="Enter Reward" /></span>
                                    </div>
                                    <div className="drightitems">
                                        <span className="doptions"><FontAwesomeIcon icon={faEllipsisV} /></span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                );
            }

            if(this.state.rewardWinner){
                return (
                    <div className="d-reward-select d-reward-multiple">
                        <div className="d-reward-list">
                            <div className="d-reward-item">
                                <div className="d-place-info gold-text">1st</div>
                                <div className="d-place-reward-text">Reward</div>
                                <div className="d-place-reward-list-icon">
                                    <div className="d-place-rewards-items">
                                        <div className="d-place-item"><img src="/img/reward_gift.png" alt="" /></div>
                                        <div className="d-place-item"><img src="/img/reward_token.png" alt="" /></div>
                                        <div className="d-place-item"><img src="/img/reward_cert.png" alt="" /></div>
                                    </div>
                                </div>
                                <div className="d-place-edit">
                                    <button>Edit</button>
                                </div>
                            </div>
                            <div className="d-reward-item">
                                <div className="d-place-info silver-text">2st</div>
                                <div className="d-place-reward-text">Reward</div>
                                <div className="d-place-reward-list-icon">
                                    <div className="d-place-rewards-items">
                                        <div className="d-place-item"><img src="/img/reward_gift.png" alt="" /></div>
                                        <div className="d-place-item"><img src="/img/reward_token.png" alt="" /></div>
                                    </div>
                                </div>
                                <div className="d-place-edit">
                                    <button>Edit</button>
                                </div>
                            </div>
                            <div className="d-reward-item">
                                <div className="d-place-info bronze-text">3st</div>
                                <div className="d-place-reward-text">Reward</div>
                                <div className="d-place-reward-list-icon">
                                    <button>Add Reward</button>
                                </div>
                                <div className="d-place-edit">
                                    <button>Edit</button>
                                </div>
                            </div>
                            <div className="d-reward-item add-new-placer">
                                <button>Add 4th Place</button>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        
        const judgeShow = () => {
            if(this.state.selectedJudgeOption === 'select'){
                return (
                    <div className="show-select-judge">
                        <div className="ss-title">Select Judges</div>
                        <div className={"d-judge-add d-jitem-segment " + (this.state.showAddJudge ? 'd-jadd-tab-active' : "")}>
                            <div className="d-jadd-inner">
                                <div className="d-jadd-enter">
                                    <input type="text" style={{ backgroundImage: "url(/img/search_icon.png)", backgroundRepeat: 'no-repeat' }} />
                                </div>
                                <div className="d-jadd-userlist">
                                    {this.state.judgeList.map((todo, index) => 
                                        <div className="djl-invited-item d-judge-invited" key={index}>
                                            <div className="djl-inner">
                                                <div className="djl-photo"><img src={todo.photo} alt="" /></div>
                                                <div className="djl-title">{todo.name}</div>
                                                <div className="djl-close">x</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="d-jadd-list">
                                    <input type="text" value="https://invitelink" style={{ backgroundImage: "url(/img/link.png)", backgroundRepeat: 'no-repeat' }} />
                                    <button>Copy</button>
                                </div>
                                <div className="d-jadd-options">
                                    <button className="d-jadd-cancel" onClick={() => this.cancelInviteJudge()}>Cancel</button>
                                    <button className="d-jadd-sendinvite">Send Invite</button>
                                </div>
                            </div>
                        </div>
                        <div className={"d-judge-list d-jitem-segment " + (this.state.showAddJudge ? '' : "d-jadd-tab-active")}>
                            <div className="djl-item d-add-judge">
                                <div className="djl-add-inner" onClick={() => this.inviteJudge()}>
                                    <div className="d-add-icon"><FontAwesomeIcon icon={faPlus} /></div>
                                    <div className="d-add-text">Invite judges</div>
                                </div>
                            </div>
                            {this.state.judgeList.map((todo, index) => 
                                <div className="djl-item d-judge-item" key={index}>
                                    <div className="djl-inner">
                                        <div className="djl-close">x</div>
                                        <div className="djl-photo"><img src={todo.photo} alt="" /></div>
                                        <div className="djl-title">{todo.name}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                );
            }

            if(this.state.selectedJudgeOption === 'random'){
                return (
                    <div className="show-random-winner">
                        <div className="ss-title">Random Winners</div>
                        <div className="ss-random-items">
                            <div className="cg-label">
                                <div className="cgl-name">
                                    <div className="cgl-name-title">Allow multiple winners</div>
                                </div>
                                <div className="cgl-doptions"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.enableActionChange} checked={this.state.enableAction} /></div>
                            </div>
                            <div className="cg-label many-winners">
                                <div className="cgl-name">
                                    <div className="cgl-name-title">How many winners?</div>
                                </div>
                                <div className="cgl-doptions">
                                    <input type="number" defaultValue="1" />
                                </div>
                            </div>
                            <div className="cg-label base-main-specs">
                                <select>
                                    <option value="">Automatically pick random winner</option>
                                    <option value="">Challenge creator spin the wheel to pick winner</option>
                                </select>
                            </div>
                        </div>
                    </div>
                );
            }
            
        }
        

        return (
            <div className="challenges-goal-page-inner">
                <div className="cgoal-inner">
                    <div className="cgoal-left">
                        <div className="cgoal-left-inner">
                            <div className="dtitle">
                                <div className="dimage">
                                    <img src="/img/ch_contest.png" alt="" />
                                </div>
                                <div className="dtext">
                                    Contest
                                </div>
                            </div>
                            <div className="dmenu-side">
                                <Menu isactive={this.state.menuActive} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="cgoal-center">
                        <div className={"dstep step_one " + (this.state.stepnumber === 0 ? 'isactive_tab' : '')}>
                            <div className="cgoal-center-inner">
                                <h2>Title and Description</h2>

                                <div className={"cg-item " + (this.state.activepart === 'title' ? 'active_item' : '')} onFocus={() => this.createActive('title') }>
                                    <div className="cg-label">Challenge Title</div>
                                    <div className="cg-input">
                                        <input type="text" />
                                    </div>
                                </div>

                                <div className={"cg-item " + (this.state.activepart === 'hashtags' ? 'active_item' : '')}  onFocus={() => this.createActive('hashtags') }>
                                    <div className="cg-label">Hashtags</div>
                                    <div className="cg-input">
                                        <input type="text" />
                                    </div>
                                </div>

                                <div className={"cg-item " + (this.state.activepart === 'tagline' ? 'active_item' : '')}  onFocus={() => this.createActive('tagline') }>
                                    <div className="cg-label">Tagline</div>
                                    <div className="cg-input">
                                        <textarea name="" id=""></textarea>
                                    </div>
                                </div>

                                <div className={"cg-item " + (this.state.activepart === 'rules' ? 'active_item' : '')}  onFocus={() => this.createActive('rules') }>
                                    <div className="cg-label">Instructions and rules</div>
                                    <div className="cg-input">
                                        <textarea name="" id=""></textarea>
                                    </div>
                                </div>
                                <div className="dnext-button">
                                    <button className="next-arrow" onClick={() => this.proceedToNext()}>Next &rarr;</button>
                                </div>
                            </div>
                        </div>

                        <div className={"dstep step_one " + (this.state.stepnumber === 1 ? 'isactive_tab' : '')}>
                            <div className="cgoal-center-inner">
                                <h2>Entry Submission</h2>

                                <div className={"cg-item " + (this.state.activepart === 'how_to_submit_entry' ? 'active_item' : '')} onFocus={() => this.createActive('how_to_submit_entry') }>
                                    <div className="cg-label">
                                        <div className="dmaintitle">How will the contestants submit their entry?</div>
                                        <div className="dsubtitle">Can select more than one.</div>
                                    </div>
                                    <div className="cg-input">
                                        <div className="cg-entry-ops">
                                            <div className="cg-ops-item">
                                                <div className="cg-checkbox-ops">
                                                    <input type="checkbox"/>
                                                </div>
                                                <div className="cg-icon-ops">
                                                    <FontAwesomeIcon icon={faLink} />
                                                </div>
                                                <div className="cg-text-ops">Link</div>
                                            </div>
                                            <div className="cg-ops-item">
                                                <div className="cg-checkbox-ops">
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="cg-icon-ops">
                                                    <FontAwesomeIcon icon={faUpload} />
                                                </div>
                                                <div className="cg-text-ops">Upload</div>
                                            </div>
                                            <div className="cg-ops-item">
                                                <div className="cg-checkbox-ops">
                                                    <input type="checkbox" />
                                                </div>
                                                <div className="cg-icon-ops">
                                                    <FontAwesomeIcon icon={faCameraRetro} />
                                                </div>
                                                <div className="cg-text-ops">Via Camera</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={"cg-item " + (this.state.activepart === 'two_enable_actions' ? 'active_item' : '')} onFocus={() => this.createActive('two_enable_actions') }>
                                    <div className="cg-label">
                                        <div className="cgl-name">
                                            <div className="cgl-name-title">Enable Actions</div>
                                            <div className="cgl-name-subtitle">Enable additional actions to complete a submission</div>
                                        </div>
                                        <div className="cgl-doptions"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.enableActionChange} checked={this.state.enableAction} /></div>
                                    </div>
                                    <div className="cg-input dactivity">
                                        <div className="cg-item cg-innerpart">
                                            <div className="cg-label">
                                                <div className="cgl-name">
                                                    <div className="cgl-name-title">Social Actions</div>
                                                    <div className="cgl-name-subtitle">Actions that involves other's time/resources for the common good e.g., volunteering, donation drives, etc</div>
                                                </div>
                                                <div className="cgl-doptions"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.enableActionChange} checked={this.state.enableAction} /></div>
                                            </div>
                                        </div>

                                        <div className="cg-item cg-innerpart">
                                            <div className="cg-label">
                                                <div className="cgl-name">
                                                    <div className="cgl-name-title">Convert all actions into entry points</div>
                                                    <div className="cgl-name-subtitle">Entries will be based on points, useful for deciding winners randomly.</div>
                                                </div>
                                                <div className="cgl-doptions"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.enableActionChange} checked={this.state.enableAction} /></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <h2>Judges</h2>

                                <div className={"cg-item " + (this.state.activepart === 'item_decide_winner' ? 'active_item' : '')} onFocus={() => this.createActive('item_decide_winner') }>
                                    <div className="cg-label">
                                        <div className="dmaintitle">Who decides the winner?</div>
                                    </div>
                                    <div className="cg-input">
                                        <div className="cg-decide-ops">
                                            <div onClick={() => this.changeJudge('me')} className={"cd-decide-item " + (this.state.selectedJudgeOption === 'me' ? 'active_item' : '')}>
                                                <div className="cditem-icon">
                                                    <img src="/img/judge_me.png" alt="" />
                                                </div>
                                                <div className="cditem-text">Me</div>
                                            </div>
                                            <div onClick={() => this.changeJudge('audience')} className={"cd-decide-item " + (this.state.selectedJudgeOption === 'audience' ? 'active_item' : '')}>
                                                <div className="cditem-icon">
                                                    <img src="/img/judge_audience.png" alt="" />
                                                </div>
                                                <div className="cditem-text">Audience Votes</div>
                                            </div>
                                            <div onClick={() => this.changeJudge('select')} className={"cd-decide-item " + (this.state.selectedJudgeOption === 'select' ? 'active_item' : '')}>
                                                <div className="cditem-icon">
                                                    <img src="/img/judge_select.png" alt="" />
                                                </div>
                                                <div className="cditem-text">Select Judges</div>
                                            </div>
                                            <div onClick={() => this.changeJudge('random')} className={"cd-decide-item " + (this.state.selectedJudgeOption === 'random' ? 'active_item' : '')}>
                                                <div className="cditem-icon">
                                                    <img src="/img/judge_random.png" alt="" />
                                                </div>
                                                <div className="cditem-text">Random Winners</div>
                                            </div>
                                        </div>
                                        <div className="show-judges-options">
                                            {judgeShow()}
                                        </div>
                                    </div>
                                    
                                </div>

                                
                                
                                <div className="dnext-button">
                                    <button className="prev-arrow" onClick={() => this.proceedToPrev()}>Back</button>
                                    <button className="next-arrow" onClick={() => this.proceedToNext()}>Next &rarr;</button>
                                </div>
                            </div>
                        </div>

                        <div className={"dstep step_one " + (this.state.stepnumber === 2 ? 'isactive_tab' : '')}>
                            <div className="cgoal-center-inner">
                                <h2>Customize Rewards</h2>

                                <div className={"cg-item " + (this.state.activepart === 'two_rewards' ? 'active_item' : '')} onFocus={() => this.createActive('two_rewards') }>
                                    <div className="cg-label">Rewards</div>
                                    <div className="cg-input">
                                        <div className="d-rewards-select">
                                            <div className="dm-left">
                                                <div className="dtextone">One winner</div>
                                                <div className="drakicon"><img src="/img/judge_single.png" alt="" /></div>
                                            </div>
                                            <div className="dm-center">
                                                <Switch onColor='#FFCA28' height={20} width={40} onChange={this.changeWinnerOptions} checked={this.state.rewardWinner} />
                                            </div>
                                            <div className="dm-right">
                                                <div className="drakicon"><img src="/img/judge_audience.png" alt="" /></div>
                                                <div className="dtextone">Multiple winners</div>
                                            </div>
                                        </div>
                                        {rewardOpts()}
                                        <div className="d-show-reward">
                                            <a href="">Give reward for everbody else</a>
                                        </div>
                                        <div className="d-rewards-settings">
                                            <button onClick={() => this.openRewardModal()}><span><FontAwesomeIcon icon={faCog} /></span> Reward Settings</button>
                                        </div>
                                        <ReactModal
                                            isOpen={this.state.isOpenRewardModal}
                                            contentLabel="Example Modal"
                                            className="watch_side_modal"
                                            ariaHideApp={false}
                                        >
                                            <div className="d-rewards-settings-modal">
                                                <h4>Reward Settings</h4>
                                                <div className="d-reward-settings-list">
                                                    <div className="cg-label">
                                                        <div className="cgl-name">
                                                            <div className="cgl-name-title">Allow winners to pick their rewards</div>
                                                        </div>
                                                        <div className="cgl-doptions"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.enableActionChange} checked={this.state.enableAction} /></div>
                                                    </div>
                                                    <div className="cg-label">
                                                        <div className="cgl-name">
                                                            <div className="cgl-name-title">Allow multiple rewards</div>
                                                        </div>
                                                        <div className="cgl-doptions"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.enableActionChange} checked={this.state.enableAction} /></div>
                                                    </div>
                                                </div>
                                                <div className="d-reward-settings-ops">
                                                    <button className="cancelReward" onClick={() => this.cancelOpenRewardModal()}>Cancel</button>
                                                    <button className="saveReward">Save</button>
                                                </div>
                                            </div>
                                        </ReactModal>
                                    </div>
                                </div>

                                <div className={"cg-item " + (this.state.activepart === 'two_penalty' ? 'active_item' : '')} onFocus={() => this.createActive('two_penalty') }>
                                    <div className="cg-label">
                                        <div className="cgl-name">Penalty</div>
                                        <div className="cgl-doptions"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.handleChange} checked={this.state.checked} /></div>
                                    </div>
                                    <div className="cg-input dactivity">
                                        <div className="subheader">Set penalty for people who did not win.</div>
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
                                                <div className="daddactions" onClick={() => this.addActivity()}>
                                                    <span className="dicon"><FontAwesomeIcon icon={faPlus} /></span>
                                                    <span className="dtext">Add penalty action</span>
                                                </div>
                                                <div className="daddactions" onClick={() => this.addActivity()}>
                                                    <span className="dicon"><FontAwesomeIcon icon={faPlus} /></span>
                                                    <span className="dtext">Add social action</span>
                                                </div>
                                                <div className="daddactions" onClick={() => this.addActivity()}>
                                                    <span className="dicon"><FontAwesomeIcon icon={faPlus} /></span>
                                                    <span className="dtext">Lose Vici tokens</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="dnext-button">
                                    <button className="prev-arrow" onClick={() => this.proceedToPrev()}>Back</button>
                                    <button className="next-arrow" onClick={() => this.proceedToNext()}>Next &rarr;</button>
                                </div>
                            </div>
                        </div>

                        <div className={"dstep step_one " + (this.state.stepnumber === 3 ? 'isactive_tab' : '')}>
                            <div className="cgoal-center-inner">
                                <h2>Audience & Duration</h2>

                                <div className={"cg-item " + (this.state.activepart === 'three_challenge_privacy' ? 'active_item' : '')} onFocus={() => this.createActive('three_challenge_privacy') }>
                                    <div className="cg-label">Challenge Privacy</div>
                                    <div className="cg-input dactivity">
                                        <div className="dc_privacy">
                                            <select name="" className="dc_privacy_setting">
                                                <option value="">Invite Only</option>
                                                <option value="">Invite Only</option>
                                                <option value="">Invite Only</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className={"cg-item " + (this.state.activepart === 'three_locations_of_participants' ? 'active_item' : '')} onFocus={() => this.createActive('three_locations_of_participants') }>
                                    <div className="cg-label">Location of participants</div>
                                    <div className="cg-input dactivity">

                                        <div className="dlp-inner">
                                            <div className="dlp-item">
                                                <div className="dlp-radio">
                                                    <input type="radio" name="anywhere" />
                                                </div>
                                                <div className="dlp-label"><FontAwesomeIcon icon={faGlobeEurope} /> Anywhere</div>
                                            </div>
                                            <div className="dlp-item">
                                                <div className="dlp-radio">
                                                    <input type="radio" name="select_locations" />
                                                </div>
                                                <div className="dlp-label select_locations"><FontAwesomeIcon icon={faMapMarkerAlt} /> Select Locations</div>
                                            </div>
                                            <div className="dlp-item ddown_list">
                                                <div className="dselectlocation" onClick={() => this.showDropBase()}>Select Location</div>
                                                <div className={"dlocationlist " + (this.state.showDropOptions === true ? 'show-location-options': 'hide-location-options')}>
                                                    <div className="dll-item">
                                                        <div className="dll-item-label" onClick={() => this.openCountry()}>By Country <span>></span></div>
                                                        <div className={"dll-item-dropdown " + (this.state.showCountry === true ? 'show-me': 'hide-me')}>
                                                            <div className="dlistofcountry">
                                                                <div className="dinputselect">
                                                                    <input type="text" placeholder="Search.." />
                                                                </div>
                                                                <div className="dcountrylist">
                                                                    <ul>
                                                                        <li>Afghanistan</li>
                                                                        <li>Albania</li>
                                                                        <li>Algeria</li>
                                                                        <li>American Samoa</li>
                                                                        <li>Andorra</li>
                                                                        <li>Angola</li>
                                                                        <li>Anguilla</li>
                                                                        <li>Antigua & Barbuda</li>
                                                                        <li>Argentina</li>
                                                                        <li>Armenia</li>
                                                                        <li>Aruba</li>
                                                                        <li>Australia</li>
                                                                        <li>Austria</li>
                                                                        <li>Azerbaijan</li>
                                                                        <li>Bahamas</li>
                                                                        <li>Bahrain</li>
                                                                        <li>Bangladesh</li>
                                                                        <li>Barbados</li>
                                                                        <li>Belarus</li>
                                                                        <li>Belgium</li>
                                                                        <li>Belize</li>
                                                                        <li>Benin</li>
                                                                        <li>Bermuda</li>
                                                                        <li>Bhutan</li>
                                                                        <li>Bolivia</li>
                                                                        <li>Bonaire</li>
                                                                        <li>Bosnia & Herzegovina</li>
                                                                        <li>Botswana</li>
                                                                        <li>Brazil</li>
                                                                        <li>British Indian Ocean Ter</li>
                                                                        <li>Brunei</li>
                                                                        <li>Bulgaria</li>
                                                                        <li>Burkina Faso</li>
                                                                        <li>Burundi</li>
                                                                        <li>Cambodia</li>
                                                                        <li>Cameroon</li>
                                                                        <li>Canada</li>
                                                                        <li>Canary Islands</li>
                                                                        <li>Cape Verde</li>
                                                                        <li>Cayman Islands</li>
                                                                        <li>Central African Republic</li>
                                                                        <li>Chad</li>
                                                                        <li>Channel Islands</li>
                                                                        <li>Chile</li>
                                                                        <li>China</li>
                                                                        <li>Christmas Island</li>
                                                                        <li>Cocos Island</li>
                                                                        <li>Colombia</li>
                                                                        <li>Comoros</li>
                                                                        <li>Congo</li>
                                                                        <li>Cook Islands</li>
                                                                        <li>Costa Rica</li>
                                                                        <li>Cote DIvoire</li>
                                                                        <li>Croatia</li>
                                                                        <li>Cuba</li>
                                                                        <li>Curacao</li>
                                                                        <li>Cyprus</li>
                                                                        <li>Czech Republic</li>
                                                                        <li>Denmark</li>
                                                                        <li>Djibouti</li>
                                                                        <li>Dominica</li>
                                                                        <li>Dominican Republic</li>
                                                                        <li>East Timor</li>
                                                                        <li>Ecuador</li>
                                                                        <li>Egypt</li>
                                                                        <li>El Salvador</li>
                                                                        <li>Equatorial Guinea</li>
                                                                        <li>Eritrea</li>
                                                                        <li>Estonia</li>
                                                                        <li>Ethiopia</li>
                                                                        <li>Falkland Islands</li>
                                                                        <li>Faroe Islands</li>
                                                                        <li>Fiji</li>
                                                                        <li>Finland</li>
                                                                        <li>France</li>
                                                                        <li>French Guiana</li>
                                                                        <li>French Polynesia</li>
                                                                        <li>French Southern Ter</li>
                                                                        <li>Gabon</li>
                                                                        <li>Gambia</li>
                                                                        <li>Georgia</li>
                                                                        <li>Germany</li>
                                                                        <li>Ghana</li>
                                                                        <li>Gibraltar</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dll-item">
                                                        <div className="dll-item-label" onClick={() => this.openState()}>By State <span>></span></div>
                                                        <div className={"dll-item-dropdown " + (this.state.showState === true ? 'show-me': 'hide-me')}>
                                                            show dropdown
                                                        </div>
                                                    </div>
                                                    <div className="dll-item">
                                                        <div className="dll-item-label" onClick={() => this.openCity()}>By City <span>></span></div>
                                                        <div className={"dll-item-dropdown " + (this.state.showCity === true ? 'show-me': 'hide-me')}>
                                                            show dropdown
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={"cg-item " + (this.state.activepart === 'three_enable_form' ? 'active_item' : '')} onFocus={() => this.createActive('three_enable_form')}>
                                    <div className="cg-label">Enable form</div>
                                    <div className="cg-input dactivity">
                                        <div className="subheader">Collect additional information from participants</div>
                                        <div className="ditem-flow"><div className="dflowtext">Show after joining</div> <Switch onColor='#FFCA28' height={20} width={40} onChange={this.handleChange} checked={this.state.checked} /></div>
                                    </div>
                                </div>

                                <div className={"cg-item " + (this.state.activepart === 'three_challenge_duration' ? 'active_item' : '')} onFocus={() => this.createActive('three_challenge_duration') }>
                                    <div className="cg-label">Challenge Duration</div>
                                    <div className="cg-input dactivity">
                                        <div className="cd-dropbase">
                                            <div className="cd-toprions-items">
                                                <div className={"cd-tp-item-left cd-item-part " + (this.state.showOptionOne ? 'active_item' : 'inactive_item')} onClick={() => this.activateItem('option_one')}>Fixed Duration</div>
                                                <div className={"cd-tp-item-right cd-item-part " + (this.state.showOptionTwo ? 'active_item' : 'inactive_item')} onClick={() => this.activateItem('option_two')}>Recurring Frequency</div>
                                            </div>
                                            <div className="dshowitems">
                                                <div className={"cd-option-one dshowoptions " + (this.state.showOptionOne ? 'active_item' : 'inactive_item')}>
                                                    <div className="cd-option-item">
                                                        <div className="cd-input-item">
                                                            <input type="text" name="" placeholder="Start Date" />
                                                        </div>
                                                        <div className="cd-input-item">
                                                            <input type="text" name="" placeholder="End Date" />
                                                        </div>
                                                        <div className="cd-input-item">
                                                            <input type="text" name="" placeholder="11:00 am" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={"cd-option-two dshowoptions " + (this.state.showOptionTwo ? 'active_item' : 'inactive_item')}>
                                                    <div className="cd-option-item">
                                                        <div className="cd-input-item">
                                                            <select name="" id="">
                                                                <option value="">Once</option>
                                                                <option value="">Daily</option>
                                                                <option value="">Weekly</option>
                                                                <option value="">Monthly</option>
                                                                <option value="">Set Duration</option>
                                                            </select>
                                                        </div>
                                                        <div className="cd-input-item">
                                                            <select name="" id="">
                                                                <option value="">End On</option>
                                                                <option value="">Repeat</option>
                                                            </select>
                                                        </div>
                                                        <div className="cd-input-item">
                                                            <input type="text" name="" placeholder="11:00 am" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={"cg-item " + (this.state.activepart === 'three_challenge_duration' ? 'active_item' : '')} onFocus={() => this.createActive('three_challenge_duration') }>
                                    <div className="cg-label">Voting Duration</div>
                                    <div className="cg-input dactivity">
                                        <div className="cd-dropbase">
                                            <div className="dshowitems">
                                                <div className={"cd-option-one dshowoptions active_item"}>
                                                    <div className="cd-option-item">
                                                        <div className="cd-input-item">
                                                            <input type="text" name="" placeholder="Start Date" />
                                                        </div>
                                                        <div className="cd-input-item">
                                                            <input type="text" name="" placeholder="End Date" />
                                                        </div>
                                                        <div className="cd-input-item">
                                                            <input type="text" name="" placeholder="11:00 am" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="dnext-button">
                                    <button className="prev-arrow" onClick={() => this.proceedToPrev()}>Back</button>
                                    <button className="next-arrow" onClick={() => this.proceedToNext()}>Next &rarr;</button>
                                </div>
                            </div>
                        </div>

                        <div className={"dstep step_one " + (this.state.stepnumber === 4 ? 'isactive_tab' : '')}>
                            <div className="cgoal-center-inner">
                                <h2>Customize Appearance</h2>

                                <div className="dshowstep4">
                                    <div className={"dshowsitem " + (this.state.activepart === 'four_change_photo' ? 'active_item' : '')} onFocus={() => this.createActive('four_change_photo')}>
                                        <div className="dtitle">
                                            <div className="diconbase"><FontAwesomeIcon icon={faImage} /></div>
                                            <div className="dheaderb">Challenge Photo or Icon</div>
                                        </div>
                                        <div className="dinfosection">
                                            <div className="dheaderpart">
                                                dropdown
                                            </div>
                                            <div className="dphotoslist">
                                                <ul>
                                                    <li><img alt="" src="/img/s4img0.png" className=""/></li>
                                                    {todoItems}
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dshowsitem">
                                        <div className="dtitle">
                                            <div className="diconbase"><FontAwesomeIcon icon={faCrosshairs} /></div>
                                            <div className="dheaderb">Challenge Color</div>
                                        </div>
                                        <div className="dinfosection">
                                            <div className="designcolorbase">
                                                <div className="designcolorleft"><HexColorPicker color={this.state.selectedColor} onChange={this.changeColor} /></div>
                                                <div className="designcolorright">
                                                    <div className="dcolorbasetext">Color Code</div>
                                                    <div className="dcolorvals">
                                                        <div className="dcolorprev" style={{backgroundColor: this.state.selectedColor}}>&nbsp;</div>
                                                        <div className="dcolortext">{this.state.selectedColor}</div>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="dnext-button">
                                    <button className="prev-arrow" onClick={() => this.proceedToPrev()}>Back</button>
                                    <button className="next-arrow" onClick={() => this.proceedToNext()}>Publish Challenge &rarr;</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="cgoal-right">
                        <div className="cgoal-right-inner" style={{display: this.state.stepnumber < 4 ? 'block' : 'none' }} >
                            <div className="dimage"><img src={tip_images[this.state.stepnumber]} alt="" /></div>
                            <div className="dtipbase">Tip { this.state.stepnumber + 1}</div>
                            <div className="dtextinfo">{tip_message[this.state.stepnumber]}</div>
                        </div>
                        <div className="cgoal-right-inner withopts"  style={{display: this.state.stepnumber === 5 ? 'block' : 'none' }} >
                            <div className="withops-inner">
                                <h3>Preview</h3>
                                <div className="withops-show-card">
                                    <h4>Card</h4>
                                    <div className="wsc-inner">
                                        <div className="prev-image">
                                            <img src={this.state.selectedPreviewHeaderImage} alt="" />
                                        </div>
                                        <div className="prev-sm-header">DAILY</div>
                                        <div className="prev-mg-header">HEALTHY SPIRITS!</div>
                                        <div className="prev-mg-desc">For me to discipline myself to drink water more often.</div>
                                        <div className="prev-tags">
                                            <ul>
                                                <li style={{backgroundColor: this.state.selectedColor}}>Health</li>
                                                <li style={{backgroundColor: this.state.selectedColor}}>Health</li>
                                                <li style={{backgroundColor: this.state.selectedColor}}>Health</li>
                                            </ul>
                                        </div>
                                        <div className="prev-participants">
                                            <div className="dpart-list">
                                                <div className="dname">
                                                    <div className="dphoto">
                                                        <img src="/img/prof_icon.png" alt="" />
                                                    </div>
                                                    <div className="dfname">John S. White</div>
                                                </div>
                                                <div className="dnumjoins">20 Joined</div>
                                            </div>
                                        </div>
                                        <div className="prev-instructions">instructions</div>
                                    </div>

                                    <h4>Progress bars, buttons & milestones</h4>
                                    <div className="wsc-inner dprogresspart">
                                        <div className="dprogressbase" style={{backgroundColor: this.state.selectedColor+"70"}}>
                                            <div className="dprogressvals" style={{backgroundColor: this.state.selectedColor, width: '60%'}}>&nbsp;</div>
                                        </div>
                                    </div>

                                    <div className="doptionspart">
                                        <div className="doptleft">
                                            <div className="donut-chart-block block"> 
                                                <div className="donut-chart" style={{backgroundColor: this.state.selectedColor+"70"}}>
                                                    <div id="part1" className="portion-block"><div className="circle" style={{backgroundColor: this.state.selectedColor}}></div></div>
                                                    <p className="center"></p>        
                                                </div>
                                            </div>
                                        </div>
                                        <div className="doptright">
                                            <div className="doptr-item diconpin" style={{color: this.state.selectedColor}}>
                                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                            </div>
                                            <div className="doptr-item no-bg">
                                                <button style={{backgroundColor: this.state.selectedColor}}>Join Challenge</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoalContestOne