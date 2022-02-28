import './../../../styles/challenge.css';
import React from 'react';

import Switch from "react-switch";
import ReactModal from 'react-modal';
import ReactTooltip from 'react-tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBars, faEllipsisV, faGlobeEurope, faMapMarkerAlt, faImage, faCrosshairs, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

class AddSocialAction extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isactive: this.props.isactive,
            socialType: 'facebook',

            isOpenSingleRewardModal: false, // open social action modal,
            

            // facebook options
            isFacebookLoginEnabled: false,
            isFacebookVisitEnabled: false,
            isFacebookViewPostEnabled: false,
            isFacebookJoinGroupEnabled: false,
            isFacebookSelectPhotoVideoEnabled: false,

            // facebook Login Options
            isFacebookLoginAllowToLikePage: false,
            isFacebookLoginEnabledrepeat: false,

            // facebook Visit Options
            isFacebookVisitAllowToLikePage: false,
            isFacebookVisitEnabledrepeat: false,
            
            // twitter
            isTwitterFollowAUserEnabled: false,
            isTwitterViewATweetEnabled: false,
            isTwitterRetweetATweetEnabled: false,
            isTwitterTweetEnabled: false,

            isTheTwitterFollowUserEnableRepeatAction: false,
            isTwitterViewATweetEnabledRepeat: false,
            isTwitterRetweetaTweetEnableRepeat: false,

            // youtube
            isYoutubeVisitChannelEnabled: false,

            // instagram
            isInstagramSelectPhotoVideoEnabled: false,
            isInstagramSelectVisitAPost: false,
            isInstagramSelectVisitAProfile: false,
            isInstagramShowPhotoVideoEnabledRepeat: false,
            isInstagramVisitaPostEnabledRepeat: false,
            isInstagramVisitaProfileEnabledRepeat: false,
        }

        this.socialOpenOptions = this.socialOpenOptions.bind(this);
        this.socialCloseOptions = this.socialCloseOptions.bind(this);

        this.toogleCustomSocialActions = this.toogleCustomSocialActions.bind(this);
        this.toogleInviteFriendsActions = this.toogleInviteFriendsActions.bind(this);
        this.toogleFacebookActions = this.toogleFacebookActions.bind(this);
        this.toogleInstagramActions = this.toogleInstagramActions.bind(this);
        this.toogleTwitterActions = this.toogleTwitterActions.bind(this);
        this.toogleYoutubeActions = this.toogleYoutubeActions.bind(this);
        this.toogleTiktokActions = this.toogleTiktokActions.bind(this);

        this.toogleFacebookLogin = this.toogleFacebookLogin.bind(this);
        this.toogleFacebookVisit = this.toogleFacebookVisit.bind(this);
        this.toogleFacebookViewPost = this.toogleFacebookViewPost.bind(this);
        this.toogleFacebookJoinGroup = this.toogleFacebookJoinGroup.bind(this);
        this.toogleFacebookSelectPhotoVideo = this.toogleFacebookSelectPhotoVideo.bind(this);

        this.onSocialActionChange = this.onSocialActionChange.bind(this);
        
        // facebook login options
        this.toogleFacebookLoginAllowToLikePage = this.toogleFacebookLoginAllowToLikePage.bind(this);
        this.toogleFacebookLoginEnableRepeat = this.toogleFacebookLoginEnableRepeat.bind(this);

        // facebook view options
        this.toogleFacebookViewAllowToLikePage = this.toogleFacebookViewAllowToLikePage.bind(this);
        this.toogleFacebookViewEnableRepeat = this.toogleFacebookViewEnableRepeat.bind(this);

        // instagram options
        this.toogleInstagramSelectPhotoVideo = this.toogleInstagramSelectPhotoVideo.bind(this);
        this.toogleInstagramVisitAPost = this.toogleInstagramVisitAPost.bind(this);
        this.toogleInstagramVisitAProfile = this.toogleInstagramVisitAProfile.bind(this);
        this.toogleInstagramShowPhotoVideoEnableRepeat = this.toogleInstagramShowPhotoVideoEnableRepeat.bind(this);
        this.toogleInstagramVisitaPostEnableRepeat = this.toogleInstagramVisitaPostEnableRepeat.bind(this);

        // twitter
        this.toogleTwitterFollowAUser = this.toogleTwitterFollowAUser.bind(this);
        this.toogleTwitterViewATweet = this.toogleTwitterViewATweet.bind(this);
        this.toogleTwitterRetweetaTweet = this.toogleTwitterRetweetaTweet.bind(this);
        this.toogleTwitterTweet = this.toogleTwitterTweet.bind(this);

        this.toogleTwitterFollowUserEnableRepeatAction = this.toogleTwitterFollowUserEnableRepeatAction.bind(this);
        this.toogleTwitterViewATweetEnableRepeat = this.toogleTwitterViewATweetEnableRepeat.bind(this);

        // youtube
        this.toogleYoutubeVisitChannel = this.toogleYoutubeVisitChannel.bind(this);

    }

    socialOpenOptions(){
        console.log('open modal');
        this.setState({isOpenSingleRewardModal: true});
    }

    socialCloseOptions(){
        this.setState({isOpenSingleRewardModal: false});
    }

    toogleCustomSocialActions(){
        console.log('shiowe iasd');
        this.setState({socialType: 'custom_social_action'});
    }

    toogleInviteFriendsActions(){
        this.setState({socialType: 'invite_friend'});
    }

    toogleFacebookActions(){
        this.setState({socialType: 'facebook'});
    }

    toogleInstagramActions(){
        this.setState({socialType: 'instagram'});
    }

    toogleTwitterActions(){
        this.setState({socialType: 'twitter'});
    }

    toogleYoutubeActions(){
        this.setState({socialType: 'youtube'});
    }

    toogleTiktokActions(){
        this.setState({socialType: 'tiktok'});
    }

    toogleFacebookLogin(){
        this.setState({isFacebookLoginEnabled: !this.state.isFacebookLoginEnabled});
    }

    toogleFacebookVisit(){
        this.setState({isFacebookVisitEnabled: !this.state.isFacebookVisitEnabled});
    }

    toogleFacebookViewPost(){
        this.setState({isFacebookViewPostEnabled: !this.state.isFacebookViewPostEnabled});
    }

    toogleFacebookJoinGroup(){
        this.setState({isFacebookJoinGroupEnabled: !this.state.isFacebookJoinGroupEnabled});
    }

    toogleFacebookSelectPhotoVideo(){
        this.setState({isFacebookSelectPhotoVideoEnabled: !this.state.isFacebookSelectPhotoVideoEnabled});
    }

    toogleFacebookLoginAllowToLikePage(){
        this.setState({isFacebookLoginAllowToLikePage: !this.state.isFacebookLoginAllowToLikePage});
    } 

    toogleFacebookLoginEnableRepeat(){
        this.setState({isFacebookLoginEnabledrepeat: !this.state.isFacebookLoginEnabledrepeat});
    }

    toogleFacebookViewAllowToLikePage(){
        this.setState({isFacebookVisitAllowToLikePage: !this.state.isFacebookVisitAllowToLikePage});
    }

    toogleFacebookViewEnableRepeat(){
        this.setState({isFacebookVisitEnabledrepeat: !this.state.isFacebookVisitEnabledrepeat});
    }

    // instagram options
    toogleInstagramSelectPhotoVideo(){
        this.setState({isInstagramSelectPhotoVideoEnabled: !this.state.isInstagramSelectPhotoVideoEnabled});
    }

    toogleInstagramVisitAPost(){
        this.setState({isInstagramSelectVisitAPost: !this.state.isInstagramSelectVisitAPost});
    }

    toogleInstagramVisitAProfile(){
        this.setState({isInstagramSelectVisitAProfile: !this.state.isInstagramSelectVisitAProfile});
    }

    toogleInstagramShowPhotoVideoEnableRepeat(){
        this.setState({isInstagramShowPhotoVideoEnableRepeat: !this.state.isInstagramShowPhotoVideoEnableRepeat});
    }

    toogleInstagramVisitaPostEnableRepeat(){
        this.setState({isInstagramVisitaPostEnabledRepeat: !this.state.isInstagramVisitaPostEnabledRepeat});
    }

    // twitter
    toogleTwitterFollowAUser(){
        this.setState({isTwitterFollowAUserEnabled: !this.state.isTwitterFollowAUserEnabled});
    }

    toogleTwitterViewATweet(){
        this.setState({isTwitterViewATweetEnabled: !this.state.isTwitterViewATweetEnabled});
    }

    toogleTwitterRetweetaTweet(){
        this.setState({isTwitterRetweetATweetEnabled: !this.state.isTwitterRetweetATweetEnabled});
    }

    toogleTwitterTweet(){
        this.setState({isTwitterTweetEnabled: !this.state.isTwitterTweetEnabled});
    }

    // youtube
    toogleYoutubeVisitChannel(){
        this.setState({isYoutubeVisitChannelEnabled: !this.state.isYoutubeVisitChannelEnabled});
    }

    toogleTwitterFollowUserEnableRepeatAction(){
        this.setState({isTheTwitterFollowUserEnableRepeatAction: !this.state.isTheTwitterFollowUserEnableRepeatAction});
    }

    toogleTwitterViewATweetEnableRepeat(){
        this.setState({isTwitterViewATweetEnabledRepeat: !this.state.isTwitterViewATweetEnabledRepeat});
    }

    toogleTwitterRetweetatweetEnableRepeat(){
        this.setState({isTwitterRetweetaTweetEnableRepeat: !this.state.isTwitterRetweetaTweetEnableRepeat});
    }

    onSocialActionChange(){
        let socialActions = !this.state.socialActionSLide;
        this.setState({socialActionSLide: socialActions});
        // this.populateInput('social_action', socialActions)
    }

    render () {
        const socialActionBottomOptions = () => {
            return (
                <div className="d-reward-settings-ops">
                    <button className="cancelReward" onClick={() => this.socialCloseOptions()}>Cancel</button>
                    <button className="saveReward">Save and Add actions</button>
                </div>
            );
        }

        const socialOptions = () => {
            if(this.state.socialType === 'facebook'){
                let LoginWithFacebookInput = () => {
                    if(this.state.isFacebookLoginEnabled){
                        return (
                            <div className="d-social-value-section">
                                <div className="d-social-value-item">
                                    <label htmlFor="">Instructions</label>
                                    <input type="text" placeholder="Enter using Facebook"/>
                                </div>
                                <div className="d-social-item d-enable-user-to-like-page">
                                    <div className="d-social-item-text">After entering, give the user option to Like a Page?</div>
                                    <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleFacebookLoginAllowToLikePage} checked={this.state.isFacebookLoginAllowToLikePage} /></div>
                                </div>
                                <div className={"d-social-value-item d-like-page-after-login" + (this.state.isFacebookLoginAllowToLikePage ? 'enabled-allow-like-page' : "")}>
                                    <label htmlFor="">Page URL</label>
                                    <input type="text" placeholder="https://www.facebook.com/JanesWidgets"/>
                                </div>
                                <div className="d-social-segmented-values">
                                    <div className="d-social-left-segment">
                                        <div className="d-social-item d-enable-repeat-action">
                                            <div className="d-social-item-text">Enable repeated action </div>
                                            <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleFacebookLoginEnableRepeat} checked={this.state.isFacebookLoginEnabledrepeat} /></div>
                                        </div>
                                    </div>
                                    <div className="d-social-right-segment">
                                        <div className="d-social-value-item d-value-points">
                                            <label htmlFor="">Points</label>
                                            <input type="number" defaultValue="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"d-social-values-additional-options " + (this.state.isFacebookLoginEnabledrepeat ? 'repeated-action-enabled' : "")}>
                                    <div className="d-social-value-item d-max-points">
                                        <label htmlFor="">Maximum points per</label>
                                        <select name="" id="">
                                            <option >Day</option>
                                            <option >Week</option>
                                            <option >Month</option>
                                            <option >Year</option>
                                        </select>
                                        <input type="number" defaultValue="0" />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                };

                let VisitFacebookOption = () => {
                    if(this.state.isFacebookVisitEnabled){
                        return (
                            <div className="d-social-value-section">
                                <div className="d-social-value-item">
                                    <label htmlFor="">Enter URL</label>
                                    <input type="text" placeholder="https://www.facebook.com/JanesWidgets"/>
                                </div>
                                <div className="d-social-value-item">
                                    <label htmlFor="">Instructions</label>
                                    <input type="text" placeholder="Enter using Facebook"/>
                                </div>
                                <div className="d-social-item d-enable-user-to-like-page">
                                    <div className="d-social-item-text">After entering, give the user option to Like a Page?</div>
                                    <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleFacebookViewAllowToLikePage} checked={this.state.isFacebookVisitAllowToLikePage} /></div>
                                </div>
                                <div className={"d-social-value-item d-like-page-after-login" + (this.state.isFacebookVisitAllowToLikePage ? 'enabled-allow-like-page' : "")}>
                                    <label htmlFor="">Page URL</label>
                                    <input type="text" placeholder="https://www.facebook.com/JanesWidgets"/>
                                </div>
                                <div className="d-social-segmented-values">
                                    <div className="d-social-left-segment">
                                        <div className="d-social-item d-enable-repeat-action">
                                            <div className="d-social-item-text">Enable repeated action </div>
                                            <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleFacebookViewEnableRepeat} checked={this.state.isFacebookVisitEnabledrepeat} /></div>
                                        </div>
                                    </div>
                                    <div className="d-social-right-segment">
                                        <div className="d-social-value-item d-value-points">
                                            <label htmlFor="">Points</label>
                                            <input type="number" defaultValue="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"d-social-values-additional-options " + (this.state.isFacebookVisitEnabledrepeat ? 'repeated-action-enabled' : "")}>
                                    <div className="d-social-value-item d-max-points">
                                        <label htmlFor="">Maximum points per</label>
                                        <select name="" id="">
                                            <option >Day</option>
                                            <option >Week</option>
                                            <option >Month</option>
                                            <option >Year</option>
                                        </select>
                                        <input type="number" defaultValue="0" />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                };

                let ViewPostOption = () => {
                    if(this.state.isFacebookViewPostEnabled){
                        return (
                            <div className="d-social-value-section">
                                <div className="d-social-value-item">
                                    <label htmlFor="">Enter Facebook post URL</label>
                                    <input type="text" placeholder="https://www.facebook.com/JanesWidgets"/>
                                </div>
                                <div className="d-social-value-item">
                                    <label htmlFor="">Instructions</label>
                                    <input type="text" placeholder="Enter using Facebook"/>
                                </div>
                                <div className={"d-social-value-item d-like-page-after-login" + (this.state.isFacebookVisitAllowToLikePage ? 'enabled-allow-like-page' : "")}>
                                    <label htmlFor="">Page URL</label>
                                    <input type="text" placeholder="https://www.facebook.com/JanesWidgets"/>
                                </div>
                                <div className="d-social-segmented-values">
                                    <div className="d-social-left-segment">
                                        <div className="d-social-item d-enable-repeat-action">
                                            <div className="d-social-item-text">Enable repeated action </div>
                                            <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleFacebookViewEnableRepeat} checked={this.state.isFacebookVisitEnabledrepeat} /></div>
                                        </div>
                                    </div>
                                    <div className="d-social-right-segment">
                                        <div className="d-social-value-item d-value-points">
                                            <label htmlFor="">Points</label>
                                            <input type="number" defaultValue="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"d-social-values-additional-options " + (this.state.isFacebookVisitEnabledrepeat ? 'repeated-action-enabled' : "")}>
                                    <div className="d-social-value-item d-max-points">
                                        <label htmlFor="">Maximum points per</label>
                                        <select name="" id="">
                                            <option >Day</option>
                                            <option >Week</option>
                                            <option >Month</option>
                                            <option >Year</option>
                                        </select>
                                        <input type="number" defaultValue="0" />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                };

                let JoinGroupOption = () => {
                    if(this.state.isFacebookJoinGroupEnabled){
                        return (
                            <div className="d-social-value-section">
                                <div className="d-social-value-item">
                                    <label htmlFor="">Enter Facebook Group API</label>
                                    <input type="text" placeholder="****************************"/>
                                </div>
                            </div>
                        );
                    }
                };

                let SelectPhotoVideoOption = () => {
                    if(this.state.isFacebookSelectPhotoVideoEnabled){
                        return (
                            <div className="d-social-value-section">
                                <div className="d-social-value-item">
                                    <label htmlFor="">show options soon</label>
                                </div>
                            </div>
                        );
                    }
                };

                return (
                    <div className="d-social-items">
                        <h3>Facebook Actions</h3>
                        <div className="d-social-options-container">
                            <div className="d-social-item">
                                <div className="d-social-item-text">Login with Facebook <span data-tip="This action will award the user with an entry for logging into Facebook -- award<br />the entry during login or ask the user to Like your Facebook page after login." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleFacebookLogin} checked={this.state.isFacebookLoginEnabled} /></div>
                                {LoginWithFacebookInput()}
                            </div>
                            <div className="d-social-item">
                                <div className="d-social-item-text">Visit on Facebook <span data-tip="This action allows you to ask participants to visit a Facebook Page." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleFacebookVisit} checked={this.state.isFacebookVisitEnabled} /></div>
                                {VisitFacebookOption()}
                            </div>
                            <div className="d-social-item">
                                <div className="d-social-header">
                                    <div className="d-social-item-text">View Post <span data-tip="This action allows you to ask participants to view a Facebook Post." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                    <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleFacebookViewPost} checked={this.state.isFacebookViewPostEnabled} /></div>
                                </div>
                                {ViewPostOption()}
                            </div>
                            <div className="d-social-item">
                                <div className="d-social-header">
                                    <div className="d-social-item-text">Join Facebook Group <span data-tip="This action allows you to ask participants to join a Facebook Group." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                    <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleFacebookJoinGroup} checked={this.state.isFacebookJoinGroupEnabled} /></div>
                                </div>
                                {JoinGroupOption()}
                            </div>
                            <div className="d-social-item">
                                <div className="d-social-header">
                                    <div className="d-social-item-text">Select image/photo <span data-tip="Select an image that corresponds to your page/post." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                    <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleFacebookSelectPhotoVideo} checked={this.state.isFacebookSelectPhotoVideoEnabled} /></div>
                                </div>
                                {SelectPhotoVideoOption()}
                            </div>
                        </div>
                        <ReactTooltip html="true" />
                    </div>
                );
            }

            if(this.state.socialType === 'twitter'){

                let FollowAUser = () => {
                    if(this.state.isTwitterFollowAUserEnabled){
                        return (
                            <div className="d-instagram-visit-a-post">
                                <div className="d-social-value-section">
                                    <div className="d-social-value-item">
                                        <label htmlFor="">Instructions</label>
                                        <input type="text" placeholder=""/>
                                    </div>
                                </div>
                                <div className="d-social-value-section">
                                    <div className="d-social-value-item">
                                        <label htmlFor="">Username</label>
                                        <input type="text" placeholder="@someone"/>
                                    </div>
                                </div>
                                <div className="d-social-segmented-values">
                                    <div className="d-social-left-segment">
                                        <div className="d-social-item d-enable-repeat-action">
                                            <div className="d-social-item-text">Enable repeated action </div>
                                            <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleTwitterFollowUserEnableRepeatAction} checked={this.state.isTheTwitterFollowUserEnableRepeatAction} /></div>
                                        </div>
                                    </div>
                                    <div className="d-social-right-segment">
                                        <div className="d-social-value-item d-value-points">
                                            <label htmlFor="">Points</label>
                                            <input type="number" defaultValue="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"d-social-values-additional-options " + (this.state.isTheTwitterFollowUserEnableRepeatAction ? 'repeated-action-enabled' : "")}>
                                    <div className="d-social-value-item d-max-points">
                                        <label htmlFor="">Maximum points per</label>
                                        <select name="" id="">
                                            <option >Day</option>
                                            <option >Week</option>
                                            <option >Month</option>
                                            <option >Year</option>
                                        </select>
                                        <input type="number" defaultValue="0" />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                };

                let ViewATweet = () => {
                    if(this.state.isTwitterViewATweetEnabled){
                        return (
                            <div className="d-instagram-visit-a-post">
                                <div className="d-social-value-section">
                                    <div className="d-social-value-item">
                                        <label htmlFor="">Instructions</label>
                                        <input type="text" placeholder=""/>
                                    </div>
                                </div>
                                <div className="d-social-value-section">
                                    <div className="d-social-value-item">
                                        <label htmlFor="">Twitter Post URL</label>
                                        <input type="text" placeholder="https://twitter.com/vici/status/1227713580572103"/>
                                    </div>
                                </div>
                                <div className="d-social-segmented-values">
                                    <div className="d-social-left-segment">
                                        <div className="d-social-item d-enable-repeat-action">
                                            <div className="d-social-item-text">Enable repeated action </div>
                                            <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleTwitterViewATweetEnableRepeat} checked={this.state.isTwitterViewATweetEnabledRepeat} /></div>
                                        </div>
                                    </div>
                                    <div className="d-social-right-segment">
                                        <div className="d-social-value-item d-value-points">
                                            <label htmlFor="">Points</label>
                                            <input type="number" defaultValue="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"d-social-values-additional-options " + (this.state.isTwitterViewATweetEnabledRepeat ? 'repeated-action-enabled' : "")}>
                                    <div className="d-social-value-item d-max-points">
                                        <label htmlFor="">Maximum points per</label>
                                        <select name="" id="">
                                            <option >Day</option>
                                            <option >Week</option>
                                            <option >Month</option>
                                            <option >Year</option>
                                        </select>
                                        <input type="number" defaultValue="0" />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                };

                let ReTweet = () => {
                    if(this.state.isTwitterRetweetATweetEnabled){
                        return (
                            <div className="d-instagram-visit-a-post">
                                <div className="d-social-value-section">
                                    <div className="d-social-value-item">
                                        <label htmlFor="">Instructions</label>
                                        <input type="text" placeholder=""/>
                                    </div>
                                </div>
                                <div className="d-social-value-section">
                                    <div className="d-social-value-item">
                                        <label htmlFor="">Tweet URL</label>
                                        <input type="text" placeholder="https://twitter.com/vici/status/1227713580572103"/>
                                    </div>
                                </div>
                                <div className="d-social-segmented-values">
                                    <div className="d-social-left-segment">
                                        <div className="d-social-item d-enable-repeat-action">
                                            <div className="d-social-item-text">Enable repeated action </div>
                                            <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleTwitterRetweetatweetEnableRepeat} checked={this.state.isTwitterRetweetaTweetEnableRepeat} /></div>
                                        </div>
                                    </div>
                                    <div className="d-social-right-segment">
                                        <div className="d-social-value-item d-value-points">
                                            <label htmlFor="">Points</label>
                                            <input type="number" defaultValue="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"d-social-values-additional-options " + (this.state.isTwitterRetweetaTweetEnableRepeat ? 'repeated-action-enabled' : "")}>
                                    <div className="d-social-value-item d-max-points">
                                        <label htmlFor="">Maximum points per</label>
                                        <select name="" id="">
                                            <option >Day</option>
                                            <option >Week</option>
                                            <option >Month</option>
                                            <option >Year</option>
                                        </select>
                                        <input type="number" defaultValue="0" />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                };

                let Tweet = () => {
                    if(this.state.isTwitterTweetEnabled){
                        return (
                            <div className="d-instagram-visit-a-post">
                                <div className="d-social-value-section">
                                    <div className="d-social-value-item">
                                        <label htmlFor="">Instructions</label>
                                        <input type="text" placeholder=""/>
                                    </div>
                                </div>
                                <div className="d-social-value-section">
                                    <div className="d-social-value-item">
                                        <label htmlFor="">Tweet</label>
                                        <input type="text" placeholder="I'm in the running to win a Widget Pro thanks to @JanesWidgets! #win #widgets"/>
                                    </div>
                                </div>
                                <div className="d-social-segmented-values">
                                    <div className="d-social-left-segment">
                                        <div className="d-social-item d-enable-repeat-action">
                                            <div className="d-social-item-text">Enable repeated action </div>
                                            <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleInstagramVisitaPostEnableRepeat} checked={this.state.isInstagramVisitaPostEnabledRepeat} /></div>
                                        </div>
                                    </div>
                                    <div className="d-social-right-segment">
                                        <div className="d-social-value-item d-value-points">
                                            <label htmlFor="">Points</label>
                                            <input type="number" defaultValue="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"d-social-values-additional-options " + (this.state.isInstagramVisitaPostEnabledRepeat ? 'repeated-action-enabled' : "")}>
                                    <div className="d-social-value-item d-max-points">
                                        <label htmlFor="">Maximum points per</label>
                                        <select name="" id="">
                                            <option >Day</option>
                                            <option >Week</option>
                                            <option >Month</option>
                                            <option >Year</option>
                                        </select>
                                        <input type="number" defaultValue="0" />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                };


                return (
                    <div className="d-social-items">
                        <h3>Twitter Actions</h3>
                        <div className="d-social-options-container">
                            <div className="d-social-item">
                                <div className="d-social-header">
                                    <div className="d-social-item-text">Follow a user <span data-tip="This action allows you to ask participants to follow a Twitter Account." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                    <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleTwitterFollowAUser} checked={this.state.isTwitterFollowAUserEnabled} /></div>
                                </div>
                                {FollowAUser()}
                            </div>
                            <div className="d-social-item">
                                <div className="d-social-header">
                                    <div className="d-social-item-text">View a Tweet <span data-tip="This action allows you to ask participants to view a Tweet." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                    <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleTwitterViewATweet} checked={this.state.isTwitterViewATweetEnabled} /></div>
                                </div>
                                {ViewATweet()}
                            </div>
                            <div className="d-social-item">
                                <div className="d-social-header">
                                    <div className="d-social-item-text">Retweet a tweet <span data-tip="This action allows you to ask participants to Retweet a Tweet." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                    <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleTwitterRetweetaTweet} checked={this.state.isTwitterRetweetATweetEnabled} /></div>
                                </div>
                                {ReTweet()}
                            </div>
                            <div className="d-social-item">
                                <div className="d-social-header">
                                    <div className="d-social-item-text">Tweet <span data-tip="This action allows you to ask participants to Tweet." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                    <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleTwitterTweet} checked={this.state.isTwitterTweetEnabled} /></div>
                                </div>
                                {Tweet()}
                            </div>
                        </div>
                        <ReactTooltip html="true" />
                    </div>
                );
            }

            if(this.state.socialType === 'instagram'){

                let VisitAPost = () => {
                    if(this.state.isInstagramSelectVisitAPost){
                        return (
                            <div className="d-instagram-visit-a-post">
                                <div className="d-social-value-section">
                                    <div className="d-social-value-item">
                                        <label htmlFor="">Instructions</label>
                                        <input type="text" placeholder=""/>
                                    </div>
                                </div>
                                <div className="d-social-value-section">
                                    <div className="d-social-value-item">
                                        <label htmlFor="">Media URL</label>
                                        <input type="text" placeholder="http://instagram.com/p/blDoYMvlZu/"/>
                                    </div>
                                </div>
                                <div className="d-social-segmented-values">
                                    <div className="d-social-left-segment">
                                        <div className="d-social-item d-enable-repeat-action">
                                            <div className="d-social-item-text">Enable repeated action </div>
                                            <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleInstagramVisitaPostEnableRepeat} checked={this.state.isInstagramVisitaPostEnabledRepeat} /></div>
                                        </div>
                                    </div>
                                    <div className="d-social-right-segment">
                                        <div className="d-social-value-item d-value-points">
                                            <label htmlFor="">Points</label>
                                            <input type="number" defaultValue="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"d-social-values-additional-options " + (this.state.isInstagramVisitaPostEnabledRepeat ? 'repeated-action-enabled' : "")}>
                                    <div className="d-social-value-item d-max-points">
                                        <label htmlFor="">Maximum points per</label>
                                        <select name="" id="">
                                            <option >Day</option>
                                            <option >Week</option>
                                            <option >Month</option>
                                            <option >Year</option>
                                        </select>
                                        <input type="number" defaultValue="0" />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                };

                let VisitAPProfile = () => {
                    if(this.state.isInstagramSelectVisitAProfile){
                        return (
                            <div className="d-instagram-visit-a-post">
                                <div className="d-social-value-section">
                                    <div className="d-social-value-item">
                                        <label htmlFor="">Instructions</label>
                                        <input type="text" placeholder=""/>
                                    </div>
                                </div>
                                <div className="d-social-value-section">
                                    <div className="d-social-value-item">
                                        <label htmlFor="">Profile URL</label>
                                        <input type="text" placeholder="Nike or http://instagram.com/nike"/>
                                    </div>
                                </div>
                                <div className="d-social-segmented-values">
                                    <div className="d-social-left-segment">
                                        <div className="d-social-item d-enable-repeat-action">
                                            <div className="d-social-item-text">Enable repeated action </div>
                                            <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleInstagramVisitaPostEnableRepeat} checked={this.state.isInstagramVisitaPostEnabledRepeat} /></div>
                                        </div>
                                    </div>
                                    <div className="d-social-right-segment">
                                        <div className="d-social-value-item d-value-points">
                                            <label htmlFor="">Points</label>
                                            <input type="number" defaultValue="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"d-social-values-additional-options " + (this.state.isInstagramVisitaPostEnabledRepeat ? 'repeated-action-enabled' : "")}>
                                    <div className="d-social-value-item d-max-points">
                                        <label htmlFor="">Maximum points per</label>
                                        <select name="" id="">
                                            <option >Day</option>
                                            <option >Week</option>
                                            <option >Month</option>
                                            <option >Year</option>
                                        </select>
                                        <input type="number" defaultValue="0" />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                };

                let SelectPhotoVideoOption = () => {
                    if(this.state.isInstagramSelectPhotoVideoEnabled){
                        return (
                            <div className="d-instagram-option-items">
                                <div className="d-social-value-section">
                                    <div className="d-social-value-item">
                                        <label htmlFor="">show options soon</label>
                                    </div>
                                </div>
                                <div className="d-social-segmented-values">
                                    <div className="d-social-left-segment">
                                        <div className="d-social-item d-enable-repeat-action">
                                            <div className="d-social-item-text">Enable repeated action </div>
                                            <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleInstagramShowPhotoVideoEnableRepeat} checked={this.state.isInstagramShowPhotoVideoEnableRepeat} /></div>
                                        </div>
                                    </div>
                                    <div className="d-social-right-segment">
                                        <div className="d-social-value-item d-value-points">
                                            <label htmlFor="">Points</label>
                                            <input type="number" defaultValue="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"d-social-values-additional-options " + (this.state.isInstagramShowPhotoVideoEnableRepeat ? 'repeated-action-enabled' : "")}>
                                    <div className="d-social-value-item d-max-points">
                                        <label htmlFor="">Maximum points per</label>
                                        <select name="" id="">
                                            <option >Day</option>
                                            <option >Week</option>
                                            <option >Month</option>
                                            <option >Year</option>
                                        </select>
                                        <input type="number" defaultValue="0" />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                };

                return (
                    <div className="d-social-items">
                        <h3>Instagram</h3>
                        <div className="d-social-item">
                            <div className="d-social-header">
                                <div className="d-social-item-text">Select image/photo <span data-tip="This action allows you to ask participants to visit an Instagram Profile." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleInstagramSelectPhotoVideo} checked={this.state.isInstagramSelectPhotoVideoEnabled} /></div>
                            </div>
                            {SelectPhotoVideoOption()}
                        </div>
                        <div className="d-social-item">
                            <div className="d-social-header">
                                <div className="d-social-item-text">Visit a Post <span data-tip="This action allows you to ask participants to view an Instagram Post." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleInstagramVisitAPost} checked={this.state.isInstagramSelectVisitAPost} /></div>
                            </div>
                            {VisitAPost()}
                        </div>
                        <div className="d-social-item">
                            <div className="d-social-header">
                                <div className="d-social-item-text">Visit a Profile <span data-tip="Select an image that corresponds to your page/post." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleInstagramVisitAProfile} checked={this.state.isInstagramSelectVisitAProfile} /></div>
                            </div>
                            {VisitAPProfile()}
                        </div>
                        <ReactTooltip html="true" />
                    </div>
                );
            }

            if(this.state.socialType === 'youtube'){

                let VisitChannel = () => {
                    if(this.state.isYoutubeVisitChannelEnabled){
                        return (
                            <div className="d-instagram-option-items">
                                <div className="d-social-value-section">
                                    <div className="d-social-value-item">
                                        <label htmlFor="">Instructions</label>
                                        <input type="text" placeholder=""/>
                                    </div>
                                </div>
                                <div className="d-social-value-section">
                                    <div className="d-social-value-item">
                                        <label htmlFor="">Channel URL</label>
                                        <input type="text" placeholder="https://www.youtube.com/user/LondonGrammar"/>
                                    </div>
                                </div>
                                <div className="d-social-segmented-values">
                                    <div className="d-social-left-segment">
                                        <div className="d-social-item d-enable-repeat-action">
                                            <div className="d-social-item-text">Enable repeated action</div>
                                            <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleInstagramShowPhotoVideoEnableRepeat} checked={this.state.isInstagramShowPhotoVideoEnableRepeat} /></div>
                                        </div>
                                    </div>
                                    <div className="d-social-right-segment">
                                        <div className="d-social-value-item d-value-points">
                                            <label htmlFor="">Points</label>
                                            <input type="number" defaultValue="0"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"d-social-values-additional-options " + (this.state.isInstagramShowPhotoVideoEnableRepeat ? 'repeated-action-enabled' : "")}>
                                    <div className="d-social-value-item d-max-points">
                                        <label htmlFor="">Maximum points per</label>
                                        <select name="" id="">
                                            <option >Day</option>
                                            <option >Week</option>
                                            <option >Month</option>
                                            <option >Year</option>
                                        </select>
                                        <input type="number" defaultValue="0" />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                };

                return (
                    <div className="d-social-items">
                        <h3>Youtube</h3>
                        <div className="d-social-item">
                            <div className="d-social-header">
                                <div className="d-social-item-text">Visit youtube channel <span data-tip="This action allows you to ask participants to visit a YouTube Channel." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleYoutubeVisitChannel} checked={this.state.isYoutubeVisitChannelEnabled} /></div>
                            </div>
                            {VisitChannel()}
                        </div>
                        <div className="d-social-item">
                            <div className="d-social-header">
                                <div className="d-social-item-text">Subscribe to channel <span data-tip="This action allows you to ask participants to subscribe to a YouTube Channel." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleYoutubeVisitChannel} checked={false} disabled/></div>
                            </div>
                        </div>
                        <div className="d-social-item">
                            <div className="d-social-header">
                                <div className="d-social-item-text">Watch a video <span data-tip="This action allows you to ask participants to watch a YouTube video." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleYoutubeVisitChannel} checked={false} disabled/></div>
                            </div>
                        </div>
                        <div className="d-social-item">
                            <div className="d-social-header">
                                <div className="d-social-item-text">Comment a video <span data-tip="This action allows you to ask participants to comment on a YouTube video." className="d-social-question-info"><FontAwesomeIcon icon={faQuestionCircle} /></span></div>
                                <div className="d-social-item-switch"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.toogleYoutubeVisitChannel} checked={false} disabled/></div>
                            </div>
                        </div>
                        <ReactTooltip html="true" />
                    </div>
                );
            }

            if(this.state.socialType === 'custom_social_action'){
                return (
                    <div className="d-social-items">
                        <h3>Custom social actions</h3>
                        <div className="d-social-item">
                            <div className="d-social-header">
                                <div className="d-social-item-text">Action Name</div>
                            </div>
                            <div className="d-social-value">
                                <input type="text" placeholder="Action Name" />
                            </div>
                        </div>
                        <div className="d-social-item">
                            <div className="d-social-header">
                                <div className="d-social-item-text">URL if applicable</div>
                            </div>
                            <div className="d-social-value">
                                <input type="text" placeholder="www.facebookpage.com" />
                            </div>
                        </div>
                        <h3>Verify</h3>
                        <div className="d-social-item">
                            <div className="d-social-header">
                                <div className="d-social-item-text">Question</div>
                            </div>
                            <div className="d-social-value">
                                <input type="text" placeholder="type here..." />
                            </div>
                        </div>
                        <div className="d-social-item">
                            <div className="d-social-header">
                                <div className="d-social-item-text">Answer</div>
                            </div>
                            <div className="d-social-value">
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                    </div>
                );
            }

            if(this.state.socialType === 'invite_friend'){
                return (
                    <div className="d-social-items">
                        <h3>Invite Friends</h3>
                        <div className="d-social-item">
                            <div className="d-social-header">
                                <div className="d-social-item-text">Give points every:</div>
                            </div>
                            <div className="d-social-value">
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="d-social-item">
                            <div className="d-social-header">
                                <div className="d-social-item-text">Points per invite</div>
                            </div>
                            <div className="d-social-value">
                                <input type="number" defaultValue="1" />
                            </div>
                        </div>
                    </div>
                );
            }
        }

        return (
            <div className="social-inner">
                <div className="cg-label">
                    <div className="cgl-name">Social Actions</div>
                    <div className="cgl-doptions"><Switch onColor='#FFCA28' height={20} width={40} onChange={this.onSocialActionChange} checked={this.state.socialActionSLide} /></div>
                </div>
                <div className="cg-input dactivity">
                    <div className="subheader">Actions that help spread the word, build awareness and increase challenge engagement</div>
                    <div className="social-action-list"></div>
                    <div className="add-social-action">
                        <button onClick={() => this.socialOpenOptions()}><span><FontAwesomeIcon icon={faPlus} /></span> Add Social Action</button>
                    </div>
                </div>
                <ReactModal
                    isOpen={this.state.isOpenSingleRewardModal}
                    contentLabel="Example Modal"
                    className="social_action_modal"
                    ariaHideApp={false}
                >
                    <div className="d-rewards-settings-modal d-social-modal-size">
                        <h4>Social Actions</h4>
                        <div className="d-social-settings-list">
                            <div className="d-social-left-side" >
                                <div className="d-social-settings">
                                    <div className="d-social-settings-dropdown">
                                        <select>
                                            <option >Choose from saved settings</option>
                                        </select>
                                    </div>
                                    <div className="d-social-setting-sub">
                                        <button>Save social settings</button>
                                    </div>
                                </div>
                                <div className="d-social-show-items">
                                    <div className={"d-social-show-item " + (this.state.socialType === 'facebook' ? 'active' : '')} onClick={() => this.toogleFacebookActions()}>
                                        <div className="d-social-item-icon">
                                            <span className="facebook"><FontAwesomeIcon icon={faFacebook} /></span>
                                        </div>
                                        <div className="d-social-item-text">Facebook</div>
                                        <div className="d-social-item-action"><FontAwesomeIcon icon={faPlus} /></div>
                                    </div>
                                    <div className={"d-social-show-item " + (this.state.socialType === 'instagram' ? 'active' : '')} onClick={() => this.toogleInstagramActions()}>
                                        <div className="d-social-item-icon">
                                            <span className="instagram"><FontAwesomeIcon icon={faInstagram} /></span>
                                        </div>
                                        <div className="d-social-item-text">Instagram</div>
                                        <div className="d-social-item-action"><FontAwesomeIcon icon={faPlus} /></div>
                                    </div>
                                    <div className={"d-social-show-item " + (this.state.socialType === 'twitter' ? 'active' : '')} onClick={() => this.toogleTwitterActions()}>
                                        <div className="d-social-item-icon">
                                            <span className="twitter"><FontAwesomeIcon icon={faTwitter} /></span>
                                        </div>
                                        <div className="d-social-item-text">Twitter</div>
                                        <div className="d-social-item-action"><FontAwesomeIcon icon={faPlus} /></div>
                                    </div>
                                    <div className={"d-social-show-item " + (this.state.socialType === 'youtube' ? 'active' : '')} onClick={() => this.toogleYoutubeActions()}>
                                        <div className="d-social-item-icon">
                                            <span className="youtube"><FontAwesomeIcon icon={faYoutube} /></span>
                                        </div>
                                        <div className="d-social-item-text">Youtube</div>
                                        <div className="d-social-item-action"><FontAwesomeIcon icon={faPlus} /></div>
                                    </div>
                                    {/* <div className={"d-social-show-item " + (this.state.socialType === 'tiktok' ? 'active' : '')} onClick={() => this.toogleTiktokActions()}>
                                        <div className="d-social-item-icon">
                                            <span className="tiktok"><FontAwesomeIcon icon={faTiktok} /></span>
                                        </div>
                                        <div className="d-social-item-text">Tiktok</div>
                                        <div className="d-social-item-action"><FontAwesomeIcon icon={faPlus} /></div>
                                    </div> */}
                                    <div className={"d-social-show-item no-icon-part " + (this.state.socialType === 'invite_friend' ? 'active' : '')} onClick={() => this.toogleInviteFriendsActions()}>
                                        <div className="d-social-item-text">Invite Friends</div>
                                        <div className="d-social-item-action"><FontAwesomeIcon icon={faPlus} /></div>
                                    </div>
                                    <div className={"d-social-show-item no-icon-part " + (this.state.socialType === 'custom_social_action' ? 'active' : '')} onClick={() => this.toogleCustomSocialActions()}>
                                        <div className="d-social-item-text">Custom Social Action</div>
                                        <div className="d-social-item-action"><FontAwesomeIcon icon={faPlus} /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-social-right-side" >
                                {socialOptions()}
                            </div>
                        </div>
                        {socialActionBottomOptions()}
                    </div>
                </ReactModal>
            </div>
        )
    }
}

export default AddSocialAction