import './../../../styles/profiles.css';
import React from 'react';
import ReactModal from 'react-modal';
import { HexColorPicker } from "react-colorful";
import auth from '../../../../services/auth';

// add avatar component
import Avatar from "./Avatar.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class SideProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo,
            showOptions: false,
            isModalOpen: false,
            mainColor: '#c6ad23',
            showColorChange: false,
            createClanConfirm: false
        }
        this.data_initialize = this.data_initialize.bind(this);
        this.createClan = this.createClan.bind(this);
        this.joinClan = this.joinClan.bind(this);
        this.openClanOptions = this.openClanOptions.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.changeColorOption = this.changeColorOption.bind(this);
        this.createClanNow = this.createClanNow.bind(this);
    }

    data_initialize(){
        console.log('stats', this.state.uinfo.stats);
    }

    createClan(){
        console.log('create a clan clicked');
        this.setState({isModalOpen: true});
        this.setState({showOptions: false});
    }

    joinClan(){
        console.log('join a clan');
    }

    openClanOptions(){
        console.log('openClanOptions');
        if(this.state.showOptions){
            this.setState({showOptions: false});
        } else {
            this.setState({showOptions: true});
        }
        

    }

    closeModal(){
        this.setState({isModalOpen: false});
    }

    changeColor(vals){
        // console.log(vals);
        this.setState({mainColor: vals});
        this.setState({showColorChange: true});
    }

    changeColorOption(){
        console.log('change color');
        if(this.state.showColorChange){
            this.setState({showColorChange: false});
        } else {
            this.setState({showColorChange: true});
        }
    }

    createClanNow(){
        this.setState({createClanConfirm: true});
    }

    openNewChallenge(){
        console.log('open challenge');
    }



    render () {
        const data_i = () => {
            // this.data_initialize()
            // return this.state.uinfo;
            const dstats = this.state.uinfo;

            // console.log('dinfo', dstats);
        }
        const user_info = this.state.uinfo;

        
        return (
            <div className="sd-inner">
                { data_i() }
                <div className="main-profile">
                    <div className="header relative">
                        <div className="header-inner">
                            <div className="hi-left">
                                <div className="levelrate">Lvl {user_info.level}</div>
                                {/* <div className="dshowclan">
                                    <div className="showedClan" onClick={this.openClanOptions}>{user_info.clan}</div>
                                    <div className={"clanlist " + (this.state.showOptions ? 'open_clan_option' : 'close_clan_option')}>
                                        <div className="dcl-inner">
                                            <ul>
                                                <li>
                                                    <div className="dicon">i</div>
                                                    <div className="dname">The Ibial Team - Lvl 50</div>
                                                </li>
                                                <li>
                                                    <div className="dicon">i</div>
                                                    <div className="dname">Fitness Club - Lvl 10</div>
                                                </li>
                                                <li className="create_clan" onClick={this.createClan}>Create Clan</li>
                                                <li className="join_clan" onClick={this.joinClan}>Join Clan</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ReactModal
                                        isOpen={this.state.isModalOpen}
                                        contentLabel="Example Modal"
                                        className="create_clan_modal"
                                        ariaHideApp={false}
                                    >
                                        <div className={"dcreate_clan_inner " + (this.state.createClanConfirm ? 'hide_form' : '')}>
                                            <div className="header_part">
                                                <div className="dtitle">
                                                    <h2>Create a Clan</h2>
                                                </div>
                                                <div className="dclose">
                                                    <button onClick={this.closeModal}><FontAwesomeIcon icon={faTimes} /></button>
                                                </div>
                                            </div>
                                            <div className="content_part">
                                                <div className="dconts">
                                                    Clans are communities of people with shared interests, goals and challenges
                                                </div>
                                                <div className="dformlist">
                                                    <div className="df_item">
                                                        <label htmlFor="">Clan name</label>
                                                        <input type="text"/>
                                                    </div>
                                                    <div className="df_item">
                                                        <label htmlFor="">Clan Description</label>
                                                        <textarea placeholder=""></textarea>
                                                    </div>
                                                    <div className="df_item">
                                                        <label htmlFor="">Clan Color <span>(can be changed later)</span></label>
                                                        <div className="dcolortag">
                                                            <div className="colorswatch" onClick={this.changeColorOption}>
                                                                <div className="xswatch" style={{ background: this.state.mainColor, borderColor: this.state.mainColor }}>&nbsp;</div>
                                                            </div>
                                                            <div className="colorinput">
                                                                <input type="text" value={this.state.mainColor} read-only />
                                                            </div>
                                                        </div>
                                                        <div className={"colorpicker " + (this.state.showColorChange ? 'open_color_option' : 'close_color_option')}>
                                                            <HexColorPicker color={this.state.mainColor} onChange={this.changeColor} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="dbuttonups">
                                                    <button className="dcancel" onClick={this.closeModal}>Cancel</button>
                                                    <button className="dcreate" onClick={this.createClanNow}>Create Clan</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"dcreate_clan_inner dcreatedconfirm " + (this.state.createClanConfirm ? 'confirmed_on' : 'confirmed_off')}>
                                            <div className="header_part">
                                                <div className="dtitle">
                                                </div>
                                                <div className="dclose">
                                                    <button onClick={this.closeModal}><FontAwesomeIcon icon={faTimes} /></button>
                                                </div>
                                            </div>
                                            <div className="dmainmessage">
                                                <div className="dmessagemain">Your clan has been created!</div>
                                                <div className="dclanname"><a href="">Running Club</a></div>
                                            </div>
                                            <div className="dbuttonups">
                                                <button className="dcancel" onClick={this.closeModal}>Close</button>
                                                <button className="dcreate">Invite Friends</button>
                                            </div>
                                        </div>
                                    </ReactModal>
                                </div> */}
                            </div>
                            <div className="hi-right">
                                <div className="dcreatechallenge">
                                    <a href="/challenge/new">
                                        <div className="dimage"><img src="/img/challenge_question.png"/></div>
                                        <div className="dtext">Challenge</div>
                                    </a>
                                </div>
                            </div>
                            <br className="clear"/>
                        </div>
                        
                        <a href="/profile" className="p-2 absolute top-28 bg-vici_bg_button rounded-lg text-white_color">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </a>
                        
                    </div>
                    {
                        auth.isAuthenticated() ? 
                        <div className="avatar flex justify-center bg-vici_prof_bg py-10">
                            <div className="d-profile-avatar">
                                <div className="d-profile-avatar-inner">
                                    <img src={auth.userProfile() ? auth.userProfile().profpic_link : '/img/avatarguest.png'} alt="" className="object-cover rounded-full w-40 h-40" />
                                </div>
                            </div>
                        </div>
                        :
                        <div className="flex justify-center p-6 bg-primary_color">
                            <div>
                                <img src="/img/avatarguest.png"></img>
                            </div>
                        </div>
                    }
                    
                    <div className="user-details">
                        <div className="ud-inner">
                            <h3><a href='/profile'>{ auth.isAuthenticated() ? auth.userProfile() ? auth.userProfile().name : auth.user().name : 'Guest User'}</a></h3>
                            <div className="stats">
                                <ul>
                                    <li>
                                        <div className="dpointicon" style={{background: "#ffca28"}}>&nbsp;</div>
                                        <div className="dpointtext">0</div>
                                    </li>
                                    <li>
                                        <div className="dpointicon" style={{background: "#9b51e0"}}>&nbsp;</div>
                                        <div className="dpointtext">0</div>
                                    </li>
                                    <li>
                                        <a href="">visit store</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="dinfo">
                                <ul>
                                    {Object.keys(user_info.social_info).map( (key, item) => 
                                        <li key={key}>
                                            <div className="dnum">{user_info.social_info[key]}</div>
                                            <div className="dtext">{key}</div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideProfile